import React from 'react';

import ContactForm from './contactForm';
import contactPhoto from '../../img/contactPhoto.png';
import './styles.css';

const ContactMain = ({ renderConfirmation }) => {
    return (
        <div className="page-container">
            <p className="contact-main-text-top">
                Do you like free stuff?
            </p>
            <p className="contact-main-text-bottom">
                Enter your email below to get my FREE guide to my FIVE FAVORITE AZ CITIES - and learn which city has the BEST bagels in AZ!
            </p>

            <div className="contact-photo-wrapper">
                <img src={contactPhoto} alt="Sam smiling with thumbs up" />
            </div>
            <ContactForm renderConfirmation={renderConfirmation} />

            <p className="quote contact-quote">
                "LOVE YOUR CHANNEL SAM! KEEP DOING YOU - YOUR TRUE FANS APPRECIATE YOUR HONEST NO BS STYLE." C.C.
            </p>
        </div>
    );
};

export default ContactMain;