"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Headers from "./components/headers/page";
import Footers from "./components/footers/page";
import { getAllFaq } from "./services/admin-services";
import { ChevronDown, ChevronUp } from "lucide-react";


const benefits = [
    {
      title: "Improve Employee Well-being",
      description: "Reduce stress and increase productivity.",
      image: "/Meditation.svg",
    },
    {
      title: "Enhance Focus & Clarity",
      description: "Help employees stay motivated and engaged.",
      image: "/Rocket.svg",
    },
    {
      title: "Tailored for Companies",
      description: "Manage team access effortlessly via the company dashboard.",
      image: "/Phone.svg",
    },
  ];


  interface FaqItem  {
    _id: string;
    question: string;
    answer: string;
  }


export default function Home() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFaq = async () => {
    try {
      const res = await getAllFaq() as { data: { data: any[] } };
      setFaqData(res.data?.data);
      setLoading(false)
    } catch (err) {
      console.error(err);
      setLoading(false)

    }
  };
  useEffect(() => {
    setLoading(true)
    fetchFaq();
  }, []);


  console.log('faqData: ', faqData);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-[#1A3F70] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;



    const handleClick = () => {
      window.location.href = 'https://panel.inscape.life/';
    };



  return (
    <>
    <Headers/>
     
       {/* top  */}
       <div className="bg-white flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
         <h1 className="text-4xl sm:text-5xl md:text-6xl text-zinc-800 font-bold">
          Empower Your Team with <span className="text-[#1A3F70]">Guided Meditation</span>
         </h1>
         <p className="mt-5 text-neutral-500 text-base font-normal">Register your company to provide your employees with exclusive access to premium meditation sessions.</p>
    
         <button  onClick={handleClick}  className="mt-8 px-[30px] py-[13px] bg-[#1A3F70] rounded-full inline-flex justify-center items-center gap-2.5 cursor-pointer">
          <div className="text-white text-base font-medium cursor-pointer">Login/Register</div>
         </button>
        </div>
    
    
    <div className=" relative w-full flex justify-center items-center ">
       {/* <Image 
        src="/images/mobiles.png" 
        height={428} width={211} alt="Stacked Mobile "
        className="absolute h-[200px] sm:h-[280px] md:h-[428px] w-auto object-contain" /> */}
        <Image 
  src="/images/mobiles.png" 
  height={428} 
  width={211} 
  alt="Stacked Mobile"
  unoptimized
  className="absolute h-[200px] sm:h-[280px] md:h-[428px] w-auto object-contain"
/>
        <div className=" relative w-full h-[300px] sm:h-[350px] md:h-[450px] flex items-center justify-center"></div>
    
    </div>
    
    
      </div>
    
    {/* benifits  */}
    
      <div className=" h-15 bg-[#F5F4FF] [clip-path:polygon(0%_0%,100%_100%,0%_100%)]"></div>
    
      <div  id="benefits"   className=" px-[20px]  sm:px-[20px] bg-[#F5F4FF] ">
        <div className="  text-center justify-start text-zinc-800 text-4xl font-bold ">Benefits</div>
        <div className="mt-[10px] text-center justify-start text-neutral-500 text-base font-normal ">Why Bring Meditation to Your Workplace?</div>
    
    
    <div className="mt-[30px]  grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="py-[20px] bg-white rounded-[20px] px-[20px]  shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={100}
                height={100}
                className="w-20 h-20 mx-auto "
              />
              <div className="mt-[33px] text-center text-[#382F32] text-xl font-semibold">
                {benefit.title}
              </div>
              <div className="mt-[15px] mb-[44px] text-center text-[#727272] text-base font-normal">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
    
    
       <div className="mt-[40px]  h-15 bg-[#FFFFFF]  -m-[20px] [clip-path:polygon(0%_100%,100%_0%,100%_100%)]"></div>
      </div>
    
    
    {/* How It Works */}
      <div id="how-it-works" className=" mt-12 mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-800">
          How It <span className="text-[#1A3F70]">Works</span>
        </h2>
      </div>
    
    
    <div className=" sm:ml-[20px] sm:mr-[20px] md:ml-[40px] md:mr-[40px] lg:ml-[119px] lg:mr-[119px]">
    {/* top  */}
    <div className="flex flex-col md:flex-row bg-violet-50 rounded-2xl">
        <div className=" sm:p-[20px] min-[320px]:p-[20px] max-[425px]:p-[20px] sm:w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/Laptop.png"
            height={354}
            width={576}
            alt="Center"
            className="w-full h-auto max-h-[354px] object-contain"
          />
        </div>
    
        <div className=" w-full md:w-1/2 sm:px-[20px] md:px-[10px] min-[320px]:p-[20px] max-[425px]:p-[20px] flex items-center">
          <div className="py-6">
            <div className="text-xl font-semibold text-zinc-800 mb-4">
              Register Your Company
            </div>
            <div className="text-sm text-neutral-500">
              Sign up your company with a quick and easy registration process.
              Simply fill out the form with your company details to create an
              account. Once registered, you'll gain access to the admin dashboard,
              where you can manage employee access, subscriptions, and settings.
              Start providing your team with premium meditation resources in just
              a few clicks!
            </div>
          </div>
        </div>
    </div>
    
    {/* middle  */}
    <div className="mt-[10px] mb-[10px] flex flex-col md:flex-row bg-violet-50 rounded-2xl">
    
        <div className=" w-full md:w-1/2 sm:px-[20px] md:px-[10px] min-[320px]:p-[20px] max-[425px]:p-[20px] flex items-center">
          <div className="py-6 lg:ml-[10px]">
            <div className="text-xl font-semibold text-zinc-800 mb-4">
            Approve Employees
            </div>
            <div className="text-sm text-neutral-500">
            Easily grant your employees access by adding them manually or uploading a bulk list for quick approval. The admin dashboard allows you to manage employee accounts effortlessly, ensuring only authorized users can access the meditation app. Approve new employees individually or all at once, saving time and streamlining the onboarding process. Keep your team engaged with seamless access to premium meditation content.
            </div>
          </div>
        </div>
    
        <div className=" sm:p-[20px] min-[320px]:p-[20px] max-[425px]:p-[20px] sm:w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/mobile.svg"
            height={354}
            width={576}
            alt="Center"
            className="w-full h-auto max-h-[354px] object-contain"
          />
        </div>
    </div>
    
    {/* bottom  */}
    <div className="flex flex-col md:flex-row bg-violet-50 rounded-2xl">
        <div className=" sm:p-[20px] min-[320px]:p-[20px] max-[425px]:p-[20px] sm:w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/girl.png"
            height={354}
            width={576}
            alt="Center"
            className="w-full h-auto max-h-[354px] object-contain"
          />
        </div>
    
        <div className=" w-full md:w-1/2 sm:px-[20px] md:px-[10px] min-[320px]:p-[20px] max-[425px]:p-[20px] flex items-center">
          <div className="py-6">
            <div className="text-xl font-semibold text-zinc-800 mb-4">
            Employees Get Access
            </div>
            <div className="text-sm text-neutral-500">
            Once approved, your employees can log in and start enjoying guided meditation sessions instantly. They will have seamless access to a curated library of meditation content designed to reduce stress, improve focus, and enhance well-being. No complicated setup is required—just log in, browse sessions, and begin meditating anytime, anywhere. Provide your team with a simple yet powerful tool for mindfulness and relaxation.
            </div>
          </div>
        </div>
    </div>
    
    </div>
    
    
    
    {/* button  */}
    <div className=" flex justify-center items-center">
      <button  onClick={handleClick} className=" mt-[40px] px-[30px] py-[13px] bg-[#1A3F70] rounded-full inline-flex justify-center items-center gap-2.5 cursor-pointer">
        <div className="text-white text-base font-medium cursor-pointer">Login/Register</div>
      </button>
    </div>
    
    
    
    {/* faq  */}
    <div className=" mt-[50px] h-15 bg-[#1A3F70] [clip-path:polygon(0%_0%,_25%_20%,_50%_0%,_75%_20%,_100%_0%,_100%_100%,_0%_100%)]"></div>
    
    <div  className=" bg-[#1A3F70]" >
    
    <div  id="faq" className="  text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold p-4">
      Frequently Asked Questions
    </div>
    
    {/* dropdown  */}
    <div className=" mt-[30px] lg:mx-[117px] mx-[20px] md:mx-[40px]">
    
    <div>
          {faqData.map((faq, index) => (
            <div key={index}>
              <div
                className=" mb-[11px] flex justify-between items-center text-white text-base sm:text-lg md:text-xl font-semibold cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="font-semibold">{faq.question}</div>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <div className="mb-[25px] justify-start text-neutral-200 text-sm sm:text-base font-normal mt-[11px] max-w-full">
                  <p>{faq.answer}</p>
                </div>
              )}
              <div className="mt-[23px] mb-[25px] w-full border-t border-gray-500 opacity-50 "></div>
            </div>
          ))}
        </div>




{/* <div>
  <h1 className="text-2xl font-bold mb-6 text-white">FAQs</h1>

  {error && <p className="text-red-500 mb-4">{error}</p>}

  {faqData.map((faq, index) => (
    <div key={faq._id}>
      <div className="mb-[11px] flex justify-between items-center text-white text-base sm:text-lg md:text-xl font-semibold">
        <div className="font-semibold">{faq.question}</div>
        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      <div className="mb-[25px] justify-start text-neutral-200 text-sm sm:text-base font-normal mt-[11px] max-w-full">
        <p>{faq.answer}</p>
      </div>

      <div className="mt-[23px] mb-[25px] w-full border-t border-gray-500 opacity-50"></div>
    </div>
  ))}
</div> */}


    
    </div>



    <div className=" mt-[50px] bg-[#FFFFFF]" >
    <div className=" h-15 bg-[#1A3F70]  [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_75%_80%,_50%_100%,_25%_80%,_0%_100%)]"></div>
    
    
    <div className="flex justify-center items-center mt-[61px]">
      <Image
        src="/images/inscape.png"
        height={81}
        width={162}
        alt="inscape logo"
        className=""
      />
    </div>
    </div>
    
    
    </div>
    
    
    <Footers/>
    
      </>
  );
}



