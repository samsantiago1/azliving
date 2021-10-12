import React from 'react';
import './styles.css';

const Header = ({ homepage, title, subtitle }) => {
    const renderHomepageHeader = () => {
        // separate out last word in title for styling
        const splitTitle = title.split(' ');
        const titleFirst = splitTitle[0].toString();
        const titleLast = splitTitle[1].toString();

        // separate out first word in subtitle for styling
        const subtitleFirst = subtitle.slice(0, 10);
        const subtitleRemaining = subtitle.slice(10);

        return (
            <div>
                <h1 className="text-heading homepage-header-title">
                    {titleFirst}
                    <span className="homepage-header-title-last">{titleLast}</span>
                </h1>
                <p className="homepage-header-subtitle">
                    <span className="homepage-header-subtitle-first">{subtitleFirst}</span>
                    {subtitleRemaining}
                </p>
            </div>
        );
    };

    const renderHeader = () => {
        return (
            <div>
                <h1 className="text-heading header-title">{title}</h1>
            </div>
        );
    };

    return (
        <div className="header-container">
            {homepage
                ? renderHomepageHeader()
                : renderHeader()
            }
        </div>
    );
};

export default Header;