import React, { useState } from 'react';

import Button from '../../button';
import './styles.css';

const ContactForm = ({ renderConfirmation }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        renderConfirmation();
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label>Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    className="form-input"
                />
            </div>

            <div className="form-group form-group-last">
                <label>Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    className="form-input"
                />
            </div>
            <Button text="Send it" type="submit" />
        </form>
    );
};

export default ContactForm;