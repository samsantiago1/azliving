import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './home';
import Move from './move';
import Videos from './videos';
import Contact from './contact';
import About from './about';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/move" component={Move} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
            </Layout>
        </BrowserRouter>
    );
};

export default App;