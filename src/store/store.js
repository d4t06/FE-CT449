import { defineStore } from "pinia";

export const useContactStore = defineStore("ContactStore", {
    state: () => ({
        contacts: [],
        status: ''    
    }),
    actions: {
        loading () {
            this.status = 'loading'
        },
        useContactStoring (payload) {
            this.contacts = payload.contacts || ''
            this.status = payload.status || ''
        },
        error() {
            this.status = 'error'
        }
    }
})
