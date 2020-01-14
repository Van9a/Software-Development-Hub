import React, { Component } from 'react';
import DataService from './services/DataService';
import './App.css';
import Contact from './components/contact';
import ContactForm from './components/contactForm';
import { connect } from 'react-redux';
import { ActionTypes } from './redux/constants';

class App extends Component {

    data = new DataService();

    state = {
        contact: null
    };

    componentDidMount() {
        const { getContactData } = this.props;
        this.data.getContact(591)
            .then((contact) => getContactData(contact))
    }

    render() {
        return (
            <div>
                {this.state.contact ? <Contact contact={this.state.contact}/> : null}
                {this.state.contact ? <ContactForm contact={this.state.contact}/> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        contact: state.contact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContactData: () => dispatch({
            type: ActionTypes.GET_CONTACTS
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
