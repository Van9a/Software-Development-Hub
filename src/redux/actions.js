import { ActionTypes } from './constants';

export const ActionCreators = {
    getContactData: data => ({
        type: ActionTypes.GET_CONTACT,
        payload: data
    }),
    getContactListData: data => ({
        type: ActionTypes.GET_CONTACTS,
        payload: data
    }),
    addContact: data => ({
        type: ActionTypes.ADD_CONTACT,
        payload: data
    }),
    deleteContact: data => ({
        type: ActionTypes.DELETE_CONTACT,
        payload: data
    }),
    changeContact: data => ({
        type: ActionTypes.CHANGE_CONTACT,
        payload: data
    }),
};
