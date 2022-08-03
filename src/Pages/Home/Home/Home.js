import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Info from '../Info/Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12  container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;