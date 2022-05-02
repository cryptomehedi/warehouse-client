import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutArticle from './AboutArticle';
import AboutBanner from './AboutBanner';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About - WareHouse</title>
            </Helmet>
            <AboutBanner/>
            <AboutArticle/>
        </div>
    );
};

export default About;