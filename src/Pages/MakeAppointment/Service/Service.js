import React from 'react';


const Service = ({service, setTreatment}) => {
    const {name, slots, price} = service;
    
    
    return (
        <div>
        
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p className='text-center'>
          {
            slots.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red-500'>try another date</span>
          }
          </p>
          <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <p className='text-center'><small>Price: ${price}</small></p>
          <div className="card-actions justify-center">
            <label 
            for="booking-modal" 
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Service;