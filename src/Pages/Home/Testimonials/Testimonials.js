import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                <h4 className='text-xl text-primary font-bold' >Testimonials</h4>
                <h3 className='text-3xl'>what our client say</h3>
                </div>
                <div>
                <img className='w-24 lg:w-48' src={quote} alt="q" />
                </div>
            </div>
            <div>
            </div>
        </section>
    );
};

export default Testimonials;