import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Info from '../Info/Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-10  md:container md:mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;