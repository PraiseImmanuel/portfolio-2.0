import axios from "axios";
import { toast } from "react-toastify";
// Create an instance of axios with baseURL
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const handleNonAxiosError = (error: any) => {
  if (error?.request) {
    // Handle network-related error (no response received)
    toast.error("Network error. Please check your connection.", {
      toastId: "Axios Error",
    });
    return { success: false };
  }
};

export const handlOtherErrors = (error: any) => {
  // Handle other types of errors
  toast.error("An error occurred. Please try again.", {
    toastId: "other error",
  });
  return { success: false };
};
