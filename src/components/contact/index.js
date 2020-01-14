import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import './styles.scss';

class Contact extends Component {

    redirectToMainPage = () => {
        this.props.history.push('/');
    };

    redirectToEditContact = () => {
        this.props.history.push('/add-contact');
    };

    render() {
        const { contact, onDelete } = this.props;
        const { id, first_name, last_name, birth_date, gender, biography, job, is_active } = contact;

        if (!contact) {
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <div className="contact">
                <div className="contact__item">
                    First name:
                    <div className="contact__item-info">{first_name}</div>
                </div>
                <div className="contact__item">
                    Last name:
                    <div className="contact__item-info">{last_name}</div>
                </div>
                <div className="contact__item">
                    Birth date:
                    <div className="contact__item-info">{birth_date}</div>
                </div>
                <div className="contact__item">
                    Gender:
                    <div className="contact__item-info">{gender}</div>
                </div>
                <div className="contact__item">
                    Biography:
                    <div className="contact__item-info">{biography}</div>
                </div>
                <div className="contact__item">
                    Job:
                    <div className="contact__item-info">{job}</div>
                </div>
                <div className="contact__item">
                    IsActive:
                    <div className="contact__item-info">{is_active ? 'online' : 'offline'}</div>
                </div>
                <Link to='/add-contact' onClick={()=>this.redirectToEditContact()}>Edit contact</Link>
                <button onClick={() => {
                    onDelete(id);
                    this.redirectToMainPage();
                }}>Delete</button>
            </div>
        )
    }
}

export const ContactRouter = withRouter(Contact);
