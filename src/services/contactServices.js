import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});

export const getContacts = async () => {
   
   try {
      const response = await request.get(`/contacts`)
      return response.data

   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const getContact = async (id) => {
   
   try {
      const response = await request.get(`/contacts/${id}`)
      return response.data

   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const updateContact = async (id, data) => {
   
   try {
      const response = await request.put(`/contacts/${id}`, data)
      return response;
   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const deleteContact = async (id) => {
   
   try {
      const response = await request.delete(`/contacts/${id}`)
      return response
   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const destroyContact = async () => {
   
   try {
      const response = await request.delete(`/contacts`)
      return response;
   } catch (error) {

      console.log("loi getProducts services", error);
   }
};

export const createContact = async (data) => {
   
   try {
      const response = await request.post(`/contacts`, data)
      return response

   } catch (error) {

      console.log("loi getProducts services", error);
   }
};