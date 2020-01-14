import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ContactListItem({ contact, onDelete, onViewContact }) {
    const { id, first_name, last_name, birth_date, gender } = contact;

    return (
        <div className="contact-list-item"
             onClick={() => onViewContact(contact)}>
            <Link to="/contact-info" className="contact-list-item__info">
                    <div>{first_name}</div>
                    <div>{last_name}</div>
                    <div>{birth_date}</div>
                    <div>{gender}</div>
            </Link>
            <button className="contact-list-item__btn--delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default ContactListItem;
