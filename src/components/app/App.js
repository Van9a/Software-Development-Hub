import React, { Component } from 'react';
import DataService from '../../services/DataService';
import { ContactRouter } from '../contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionTypes } from '../../redux/constants';
import ContactList from '../contactList';
import { AddNewUserReduxForm } from '../contactForm/';
import './App.css';

class App extends Component {

    data = new DataService();

    componentDidMount() {
        const { getContactListData } = this.props;

        this.data.getAllContacts()
            .then((contactList) => getContactListData(contactList));
    }

    onSubmitForm = (data) => {
        const { addContact } = this.props;

        this.data.addContact(data)
            .then((newContact) =>  addContact(newContact));

    };

    onDeleteContact = data => {
        const { deleteContact } = this.props;

        this.data.deleteContact(data)
            .then(() => deleteContact(data))
    };


    render() {
        const { contact, loading, contactList, getContactData, changeContact } = this.props;

        return (
            <div>
                <Router>
                    <Route exact path="/" render={() =>
                        <ContactList
                            contacts={contactList}
                            loading={loading}
                            onDelete={this.onDeleteContact}
                            onViewContact={getContactData}
                        />}
                    />
                    <Route exact path="/contact-info" render={() =>
                        <ContactRouter
                            contact={contact}
                            onDelete={this.onDeleteContact}
                        />}
                    />
                    <Route exact path="/add-contact"
                           component={() => <AddNewUserReduxForm onSubmit={this.onSubmitForm} contact={contact} changeContact={changeContact}/>}/>
                </Router>
            </div>

        );
    }
}

const mapStateToProps = ({ appReducer }) => {
    return {
        contactList: appReducer.contactList,
        contact: appReducer.contact,
        loading: appReducer.loading,
        redirect: appReducer.redirect,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContactListData: (data) => dispatch({
            type: ActionTypes.GET_CONTACTS,
            payload: data
        }),
        getContactData: (data) => dispatch({
            type: ActionTypes.GET_CONTACT,
            payload: data
        }),
        addContact: (data) => dispatch({
            type: ActionTypes.ADD_CONTACT,
            payload: data
        }),
        deleteContact: (data) => dispatch({
            type: ActionTypes.DELETE_CONTACT,
            payload: data
        }),
        changeContact: (data) => ({
            type: ActionTypes.CHANGE_CONTACT,
            payload: data
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
