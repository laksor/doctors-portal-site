import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h4 className='text-secondary font-bold text-center mt-10'>Available Appointment on {format(date, 'PP')}</h4>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointment;