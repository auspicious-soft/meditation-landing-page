import { getAxiosInstance } from "../config/axios";

// Get all FAQs from /api/faq
export const getAllFaq = async () => {
  const axiosInstance = await getAxiosInstance();
  return axiosInstance.get(""); // hits /api/faq
};

// Add a new FAQ to /api/faq
export const addFaq = async (payload: any) => {
  const axiosInstance = await getAxiosInstance();
  return axiosInstance.post("", payload); // posts to /api/faq
};
