import { axiosInstance } from "./axios";

export const signup = async (signupData) => {
  const response = await axiosInstancenstance.post("/auth/signup", signupData);
  return response.data;
};
