import * as contactServices from '../services/contactServices'

export const getAllAndStoring = async (piniaActions) => {
    try {
        piniaActions.loading();
        const response = await contactServices.getContacts();

        if (!response || response.status === 431) return;
        piniaActions.useContactStoring({
            contacts: response.data,
            status: 'successful'
        })
    } catch (error) {
        console.log("action error", error)
        piniaActions.error();
    }
}