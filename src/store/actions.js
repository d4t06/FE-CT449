import * as contactServices from '../services/contactServices'


export const getAllAndStoring = async(piniaActions) => {

    try {
        const response = await contactServices.getContacts();

        if (!response || response.status === 431) {
            
        }
        piniaActions.useContactStoring({contacts: response.data})

    } catch (error) {
        console.log("action error", error)
        piniaActions.error();
    }
}