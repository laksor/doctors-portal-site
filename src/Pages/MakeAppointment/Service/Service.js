import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center">{name}</h2>
          <p className='text-center'>
          {
            slots.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red-500'>try another date</span>
          }
          </p>
          <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <div class="card-actions justify-center">
            <label 
            for="booking-modal" 
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn btn-secondary text-white uppercase">Make Appointment</label>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Service;