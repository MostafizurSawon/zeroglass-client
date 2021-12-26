import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ShowReview></ShowReview>

        </>
    );
};

export default Home;