import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});

export const search = async (q) => {

   try {
      const response = await request.get(`contacts/search`, {
         params: {
            ...q
         }
      });

      return response;
   } catch (error) {

      console.log("loi getProducts services", error);
   }
};
