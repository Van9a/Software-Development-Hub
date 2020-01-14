import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

export interface IProps {
    className?: string,
    contact?: any
}

export function ContactForm(props:any,{onSubmit}: any) {
    //const {first_name, last_name, birth_date, gender, biography, job} = contact;

    return (
        <form className="contact" name="login" onSubmit={props.handleSubmit}>
            <div className="contact__item">
                <Field className="contact__item-info" name="first_name" component="input" type="text"
                       placeholder="First Name"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="last_name" component="input"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="birth_date" component="input" type="date"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="gender" component="input"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="biography" component="input"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="job" component="input"/>
            </div>
            <div className="contact__item">
                <Field className="contact__item-info" name="is_active" component="input" type="checkbox"/>
            </div>
            <button >Add new contact</button>

        </form>
    )

}

export const AddNewUserReduxForm = reduxForm({form: 'contact'})(ContactForm);
