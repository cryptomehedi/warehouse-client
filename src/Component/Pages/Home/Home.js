import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Feature from './Feature';
import StockHome from './StockHome';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - WareHouse</title>
            </Helmet>
            <Banner/>
            <Feature/>
            <StockHome/>
        </div>
    );
};

export default Home;