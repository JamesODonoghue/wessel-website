import React from 'react';
import { Formik, Field, Form } from 'formik';

const SignupForm = () => (
    <section className="form__container">
        <div className="form__header">
            <h1>Volunteer Signup</h1>
        </div>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
            render={() => (
                <Form className="form-container">
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" placeholder="Jane" />
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" placeholder="Doe" />
                    <label htmlFor="email">Email</label>
                    <Field name="email" placeholder="jane@acme.com" type="email" />
                    <label htmlFor="email">Phone</label>
                    <Field name="phone" placeholder="123-345-6789" type="phone" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        />
    </section>
);

export default SignupForm;