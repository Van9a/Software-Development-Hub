import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import DataService from '../../services/DataService';

export default class ContactForm extends Component {

    data = new DataService();

    componentWillMount() {
        const { contact } = this.props;
        const { id, first_name, last_name, birth_date, gender, biography, job, is_active } = contact;

        this.props.initialize({
            first_name: first_name,
            last_name: last_name,
            birth_date: birth_date,
            gender: gender,
            biography: biography,
            job: job,
            is_active: is_active
        });
    }

    redirectToMainPage = () => {
        setTimeout(() => this.props.history.push('/'), 1000);
    };

    saveContact = () => {
        const { contact } = this.props;
        this.data.changeContact(contact.id,contact).then(()=>this.redirectToMainPage);
    };

    render() {
        if (this.props.contact) {
            const { contact, changeContact } = this.props;

            return (
                <form className="contact" name="login" onSubmit={()=>this.saveContact}>
                    <div className="contact__item">
                        First name
                        <Field className="contact__item-info" name="first_name" component="input" type="text"
                               placeholder="First Name"/>
                    </div>
                    <div className="contact__item">
                        Last name
                        <Field className="contact__item-info" name="last_name" component="input"/>
                    </div>
                    <div className="contact__item">
                        Birth date
                        <Field className="contact__item-info" name="birth_date" component="input" type="date"/>
                    </div>
                    <div className="contact__item">
                        Gender
                        <Field className="contact__item-info" name="gender" component="select">
                            <option/>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </Field>
                    </div>
                    <div className="contact__item">
                        Biography
                        <Field className="contact__item-info" name="biography" component="textarea"/>
                    </div>
                    <div className="contact__item">
                        Job
                        <Field className="contact__item-info" name="job" component="input"/>
                    </div>
                    <div className="contact__item">
                        Active
                        <Field className="contact__item-info" name="is_active" component="input" type="checkbox"/>
                    </div>
                    <button>Save contact</button>
                </form>
            )
        }

        return (
            <form className="contact" name="login" onSubmit={this.props.handleSubmit}>
                <div className="contact__item">
                    First name
                    <Field className="contact__item-info" name="first_name" component="input" type="text"
                           placeholder="First Name"/>
                </div>
                <div className="contact__item">
                    Last name
                    <Field className="contact__item-info" name="last_name" component="input"/>
                </div>
                <div className="contact__item">
                    Birth date
                    <Field className="contact__item-info" name="birth_date" component="input" type="date"/>
                </div>
                <div className="contact__item">
                    Gender
                    <Field className="contact__item-info" name="gender" component="select">
                        <option/>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </Field>
                </div>
                <div className="contact__item">
                    Biography
                    <Field className="contact__item-info" name="biography" component="textarea"/>
                </div>
                <div className="contact__item">
                    Job
                    <Field className="contact__item-info" name="job" component="input"/>
                </div>
                <div className="contact__item">
                    Active
                    <Field className="contact__item-info" name="is_active" component="input" type="checkbox"/>
                </div>
                <button onClick={this.redirectToMainPage}>Add new contact</button>
            </form>
        )
    }
}
const router = withRouter(ContactForm);

export const AddNewUserReduxForm = reduxForm({ form: 'contact' })(router);
