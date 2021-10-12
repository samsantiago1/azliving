import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Button = ({ secondary, internal, href, text }) => {
    const renderButton = <button className={`btn-default ${secondary ? 'btn-secondary' : ''}`}>{text}</button>;

    const renderInternalLink = () => {
        return (
            <Link to={href}>{renderButton}</Link>
        );
    };

    const renderExternalLink = () => {
        return (
            <div>
                <a href={href} target="_blank" rel="noreferrer">
                    {renderButton}
                </a>
            </div>
        );
    };

    return (
        internal
            ? renderInternalLink()
            : renderExternalLink()
    );
};

export default Button;