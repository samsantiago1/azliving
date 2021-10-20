import React from 'react';

import Header from '../header';
import YoutubeEmbed from '../youtubeEmbed';
import Button from '../button';
import './styles.css';

const Videos = () => {
    return (
        <div>
            <Header title="VIDEO SHORTS" />
            <div className="page-container">
                <p className="quote videos-quote">
                    "I APPRECIATE YOUR VIDEOS. YOU ARE REAL, INFORMATIVE AND FUNNY." E.N.
                </p>

                <div className="videos-container">
                    <div className="video">
                        <YoutubeEmbed title="YouTube, Pros and Cons of Living in Phoenix" videoID="-nmvMksR4Ts" />
                    </div>
                    <div className="video">
                        <YoutubeEmbed title="YouTube, Lake Havasu City, AZ" videoID="AP-OqGkp830" />
                    </div>
                    <div className="video">
                        <YoutubeEmbed title="YouTube, Best Food In Phoenix Arizona" videoID="mfvqOBwCE5k" />
                    </div>
                </div>

                <p className="videos-subscribe-text">
                    Don't miss out on more uncensored advice! Smash the subscribe button now.
                </p>
                <Button href="https://www.youtube.com/Arizonaliving?sub_confirmation=1" text="Subscribe" />
                <p className="videos-join-text">
                    And join me on Patreon for exclusive sneak peaks and more AZ content
                </p>
                <Button href="https://www.patreon.com/arizonaliving" secondary="secondary" text="Join" />
            </div>
        </div>
    );
};

export default Videos;