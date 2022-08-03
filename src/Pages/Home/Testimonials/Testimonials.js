import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id : 1,
            name: 'newton',
            review: '',
            img: people1,
            location: 'california'
        },
        {
            _id : 2,
            name: 'clara',
            review: '',
            img: people2,
            location: 'california'

        },
        {
            _id : 3,
            name: 'sogin',
            review: '',
            img: people3,
            location: 'california'

        },
    ]
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
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    > 
                    </Review>)
            }
            </div>
        </section>
    );
};

export default Testimonials;