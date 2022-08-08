import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Care = () => {
    return (
        <div className='mb-20'>
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={treatment} className="w-100 rounded-lg shadow-2xl" alt=""/>
          <div className=''>
            <h1 className="text-5xl font-bold">Box Office News</h1>
            <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Care;