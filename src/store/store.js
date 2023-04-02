import { defineStore } from "pinia";

export const useContactStore = defineStore("ContactStore", {
    state: () => ({
        contacts: []    }),
    actions: {
        useContactStoring (payload) {
            this.contacts = payload.contacts.length
             ? payload.contacts
             : ''
        },
    }
})
