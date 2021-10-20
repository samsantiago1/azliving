import React from 'react';

import Header from '../header';
import Button from '../button';
import movePhoto from '../../img/movePhoto.png';
import realtorsPhoto from '../../img/realtorsPhoto.png';
import './styles.css';

const Move = () => {
    return (
        <div>
            <Header title="MOVE TO AZ" />
            <div className="page-container">
                <div className="move-intro">
                    <p className="move-intro-top">
                        As of January 2021, Arizona is the seventh most popular state to move to (move.org).
                    </p>
                    <p className="move-intro-bottom">
                        Are you considering a move to AZ? Get all the facts first.
                        <br />
                        <br />
                        Here's how:
                    </p>
                </div>

                <div className="move-steps-section">
                    <div className="move-steps-section-top">
                        <div className="move-steps">
                            <h3 className="text-subheading move-steps-heading">STEP 1</h3>
                            <p className="move-steps-text">
                                Subscribe to Sam's YouTube channel for the latest AZ tips and city tours
                            </p>
                        </div>
                        <div className="move-photo-wrapper">
                            <img src={movePhoto} alt="Sam pointing with mouth open" />
                        </div>
                        <Button href="https://www.youtube.com/Arizonaliving?sub_confirmation=1" text="Subscribe" />
                    </div>

                    <div>
                        <div className="move-steps">
                            <h3 className="text-subheading move-steps-heading">STEP 2</h3>
                            <p className="move-steps-text">
                                Check out Sam's master class (save tons of time and money)
                            </p>
                        </div>
                        <Button secondary="secondary" href="https://movetoaz.weebly.com/" text="Show me" />
                    </div>

                    <div>
                        <div className="move-steps">
                            <h3 className="text-subheading move-steps-heading">STEP 3</h3>
                            <p className="move-steps-text">
                                Join Sam on Facebook to ask questions and find others just like you
                            </p>
                        </div>
                        <Button secondary="secondary" href="https://www.facebook.com/arizonaliving.info" text="Join" />
                    </div>
                </div>

                <div className="move-realtors-section">
                    <h3 className="text-subheading">NEED A REALTOR?</h3>
                    <p className="move-realtors-text">
                        The A Team has your back. Call or text them at (602) 376-0739.
                    </p>
                    <div className="realtors-photo-wrapper">
                        <img src={realtorsPhoto} alt="Realtors Gabriela and Janet standing and smiling with arms folded" />
                    </div>
                    <Button secondary="secondary" href="https://www.azlovewhereyoulive.com/" text="Connect" />
                </div>

            </div>
        </div >
    );
};

export default Move;