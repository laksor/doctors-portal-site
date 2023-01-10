import { useQuery } from 'react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointment = ({date}) => {
    //const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => 
         fetch(`https://doctor-portal-server-vqyw.onrender.com/available?date=${formattedDate}`).then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }

    //useEffect( () =>{
        //fetch(`https://doctor-portal-server-vqyw.onrender.com/available?date=${formattedDate}`)
        //.then(res => res.json())
        //.then(data => setServices(data));
    //}, [formattedDate])

    return (
        <div>
            <h4 className='text-secondary font-bold text-center mt-10'>Available Appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 mb-8 gap-6'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        
                        ></Service>)
                        
                }
                 
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;