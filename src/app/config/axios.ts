import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq`, // direct path to FAQ
  headers: {
    "Content-Type": "application/json",
    role: "admin",
  },
});

// Factory function to get a new instance (in case you want to add token later)
export const getAxiosInstance = async () => {
  return axiosInstance;
};
