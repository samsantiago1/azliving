import React from 'react';

import Header from '../header';
import './styles.css';

const Home = () => {
    return (
        <div>
            <Header
                homepage={true}
                title="ARIZONA LIVING"
                subtitle="UNCENSORED TRUTH ABOUT LIFE IN THE PHOENIX VALLEY"
            />
        </div>
    );
};

export default Home;