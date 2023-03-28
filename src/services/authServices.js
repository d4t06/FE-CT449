import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000",
});

export const login = async (data) => {

   try {
      const response = await request.post(`/login`, data)

   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const logout = async (data) => {
   
   try {
      await request.get(`/login`)

   } catch (error) {

      console.log("loi getProducts services", error);
   }
};