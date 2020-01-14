import React from 'react';
import { Link } from 'react-router-dom';
import ContactListItem from '../contactListItem';

function ContactList({ contacts, loading, onDelete, onViewContact }) {

    if (loading) {
        return (
            <div>Loading data ...</div>
        )
    }

    return (
        <div>
            <Link to="/add-contact">Add new contact</Link>
            {contacts.map((contact, index) => (
                <div key={index}>
                    <ContactListItem contact={contact} onDelete={onDelete} onViewContact={onViewContact}/>
                </div>
            ))}
        </div>
    )
}

export default ContactList;
