import React, { useState } from 'react';

import Header from '../header';
import ContactMain from './ContactMain';
import ContactConfirmation from './ContactConfirmation';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const renderConfirmation = () => {
        setFormSubmitted(!formSubmitted);
    }

    return (
        <div>
            <Header title="CONTACT" />
            {formSubmitted
                ? <ContactConfirmation />
                : <ContactMain renderConfirmation={renderConfirmation} />
            }
        </div>
    );
};

export default Contact;