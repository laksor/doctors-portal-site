import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class=" w-100 md:w-90 lg:w-90 rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;