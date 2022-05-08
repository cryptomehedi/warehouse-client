import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feature from './Feature';
import StockHome from './StockHome';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - WareHouse</title>
            </Helmet>
            <Banner/>
            <Feature/>
            <StockHome/>
            <Testimonial/>
        </div>
    );
};

export default Home;