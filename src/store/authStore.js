import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
    state: () => ({
        auth: '',
    }),
    actions: {
        setAuth (payload) {
            this.auth = actions.payload
        }
    }
})
