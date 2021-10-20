import React from 'react';

import Header from '../header';
import YoutubeEmbed from '../youtubeEmbed';
import Button from '../button';
import aboutPhoto from '../../img/aboutPhoto.png';
import './styles.css';

const About = () => {
    return (
        <div>
            <Header title="ABOUT" />
            <div className="page-container">
                <div className="about-grid-container">
                    <h3 className="text-subheading about-text-heading">HEY!</h3>
                    <div className="about-photo-wrapper">
                        <img src={aboutPhoto} alt="headshot of Sam smiling" />
                    </div>

                    <p className="about-text-top">
                        I'm Sam Santiago. I live in Arizona but sometimes I wish I didn't.
                        <br />
                        It was 2011 when I left Jersey but since I'm still here, I share my experiences in a real way so you can learn the truth about life here: the good, the bad, and the ugly, as I say.
                    </p>

                    <p className="about-text-middle">
                        Lots of people dig my unique advice. Like in this video - things NO ONE tells you about moving to Arizona.
                    </p>
                    <div className="about-video">
                        <YoutubeEmbed title="YouTube, Things to know before moving to Phoneix Arizona" videoID="0ISp9Qu97fY" />
                    </div>

                    <p className="about-text-bottom">
                        I'm here to spread my knowledge and give you some laughs too. Join me on my adventures as I navigate the desert as an east coast transplant - you will be glad you did!
                    </p>
                </div>

                <Button href="https://www.youtube.com/Arizonaliving?sub_confirmation=1" text="Subscribe" />
                <p className="quote about-quote">
                    "INFORMATIVE, GOOD ENERGY AND DAMN FUNNY" T.J.
                </p>
            </div>
        </div>
    );
};

export default About;