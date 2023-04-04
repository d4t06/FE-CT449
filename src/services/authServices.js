import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
   withCredentials: true,
});

export const register = async (data) => {
   try {
      const response = await request.post("/auth/register", data);
      return response;
   } catch (error) {
      console.log("register services error", { message: error });
   }
};
