import * as contactServices from '../services/contactServices'


export const getAllAndStoring = async(piniaActions) => {

    try {
        const response = await contactServices.getContacts();
        // console.log('action res:', response)
        piniaActions.useContactStoring({contacts: response})

    } catch (error) {
        console.log("action error", error)
        piniaActions.error();
    }
}