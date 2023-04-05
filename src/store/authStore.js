import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
   state: () => ({
      auth: { token: "" },
   }),
   actions: {
      setAuth(payload) {
         this.auth.token = payload.token;
      },
   },
});
