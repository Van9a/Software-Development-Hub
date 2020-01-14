import { ActionTypes } from './constants';

const initialState = {
    contactList: null,
    counter: 2,
    loading: true,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { id, data } = payload || {};

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
                contactList: payload,
            };
        case  ActionTypes.DELETE_CONTACT:
            return {
                ...state,
                contactList: state.contactList.filter(contact => contact.id !== payload)
            };
        case 'inc':
            return {
                ...state,
                counter: state.counter + 4,
            };
        default:
            return state;
    }
};

export default reducer;
