import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <div>
            <section  style={{
                background: `url(${appointment})`
            }} className='flex justify-center items-center'>
                <div className='flex-1'>
                    <img className='lg:mt-[-100px]' src={doctor} alt=""/>
                </div>
                <div className='flex-1'>
                    <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                    <h2 className='text-3xl text-white'>Make an appointment today</h2>
                    <p className='text-white mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque qui vel commodi? Alias rem, sequi debitis ipsa fuga nihil amet! Nesciunt impedit quisquam quod aperiam accusamus veritatis debitis unde velit.</p>
                    <PrimaryButton>Make an appointment</PrimaryButton>
                    </div>
            </section>
        </div>
    );
};

export default Appointment;