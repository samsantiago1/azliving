import React from 'react';

import Header from '../header';
import Button from '../button';
import homePhoto from '../../img/homePhoto.png';
import facebookIcon from '../../img/facebookIcon.png';
import youtubeIcon from '../../img/youtubeIcon.png';
import instagramIcon from '../../img/instagramIcon.png';
import './styles.css';

const Home = () => {
    return (
        <div>
            <Header
                homepage={true}
                title="ARIZONA LIVING"
                subtitle="UNCENSORED TRUTH ABOUT LIFE IN THE PHOENIX VALLEY"
            />

            <div className="page-container">
                <div className="home-main-content">
                    <div className="home-photo-wrapper">
                        <img src={homePhoto} alt="Sam smiling with finger raised" />
                    </div>

                    <div className="home-text-section">
                        <p className="home-text">
                            Don't move to Arizona without knowing the TRUTH!
                        </p>
                        <Button
                            internal="internal"
                            href="/move"
                            text="Learn more"
                        />
                        <p className="quote home-quote">
                            "I LIKE YOUR HONESTY. YOU HELPED ME MAKE UP MY MIND TO MOVE TO ARIZONA." J.R.
                        </p>
                    </div>
                </div>

                <div className="socialmedia">
                    <a
                        href="https://www.facebook.com/arizonaliving.info"
                        target="_blank"
                        rel="noreferrer"
                        className="socialmedia-link"
                    >
                        <img src={facebookIcon} alt="Facebook icon" className="socialmedia-icon" />
                    </a>
                    <a
                        href="https://youtube.com/Arizonaliving"
                        target="_blank"
                        rel="noreferrer"
                        className="socialmedia-link"
                    >
                        <img src={youtubeIcon} alt="Youtube icon" className="socialmedia-icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/arizonaliving_phx"
                        target="_blank"
                        rel="noreferrer"
                        className="socialmedia-link"
                    >
                        <img src={instagramIcon} alt="Instagram Icon" className="socialmedia-icon" />
                    </a>
                </div>

                <p className="copyright">{`Design by `}
                    <a href="http://colleenux.com/" target="_blank" rel="noreferrer">
                        <span>Colleen Ballesteros
                        </span>
                    </a>
                    {` and `}
                    <a href="https://www.linkedin.com/in/hyun-young-lee-15a5a813a/" target="_blank" rel="noreferrer">
                        <span>
                            Hyun Young Lee
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home;