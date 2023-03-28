import { defineStore } from "pinia";

export const useContactStore = defineStore("ContactStore", {
    state: () => ({
        contacts: [],
        status: 'idle'
    }),
    actions: {
        loading () {
            this.status = 'loading'
        },
        useContactStoring (payload) {
            console.log('action pinia payload', payload)
            this.contacts = payload.contacts
            this.status= 'successful'
        },
        error () {
            this.status = 'error'
        }
    }
})

