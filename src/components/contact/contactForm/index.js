import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import Button from '../../button';
import './styles.css';

const CustomForm = ({ status, onValidated, renderConfirmation }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        if (status === "success") {
            console.log('subscribed');
            renderConfirmation();
            return setValues({
                name: '',
                email: '',
            })
        }
    }, [status, renderConfirmation]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        values.name &&
            values.email &&
            values.email.indexOf('@') > -1 &&
            onValidated({
                MERGE1: values.name,
                EMAIL: values.email,
            });
    };

    return (
        <form onSubmit={event => handleSubmit(event)} className="form-container">
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
            <Button text="Send it" type="submit" formValues={[values.name, values.email]} />
        </form >
    );
}

const MailchimpForm = ({ renderConfirmation }) => {
    const subscribeUrl = `https://gmail.us5.list-manage.com/subscribe/post?u=${{secrets.REACT_APP_MAILCHIMP_U}}&id=${{secrets.REACT_APP_MAILCHIMP_ID}}`;

    return (
        <div>
            <MailchimpSubscribe
                url={subscribeUrl}
                render={({ subscribe, status }) => (
                    <CustomForm
                        status={status}
                        onValidated={formData => subscribe(formData)}
                        renderConfirmation={renderConfirmation}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpForm;
