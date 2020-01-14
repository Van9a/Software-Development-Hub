import { ActionTypes } from './constants';

const initialState = {
    contactList: [],
    loading: true,
    redirect: true,
};

const appReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.GET_CONTACTS:
            return {
                ...state,
                contactList: payload,
                loading: false,
            };
        case ActionTypes.GET_CONTACT:
            return {
                ...state,
                contact: payload,
                loading: false,
            };
        case ActionTypes.ADD_CONTACT:
            return {
                ...state,
                redirect: false,
            };
        case  ActionTypes.DELETE_CONTACT:
            return {
                ...state,
                contactList: state.contactList.filter(contact => contact.id !== payload)
            };
        case ActionTypes.CHANGE_CONTACT: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
};

export default appReducer;
