import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Care = () => {
    return (
        <div className='mb-20'>
        <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt=""/>
          <div className='mx-20'>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Care;