import React from 'react';
import SignupForm from './SignupForm';

const VolunteerForm = () => {
    return (
        <section className="volunteer-form__container">
            <div className="volunteer-form__header">
                <h2>Volunteer Signup</h2>
            </div>
            <SignupForm />
        </section>
    )
};

export default VolunteerForm
