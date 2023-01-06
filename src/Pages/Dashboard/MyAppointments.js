import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect( () =>{
      
        fetch(`https://doctor-portal-server-vqyw.onrender.com//booking?patient=${user.email}`,  {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => {
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {
          setAppointments(data);
        
      });
    
    }, [])
    return (
        <div>
            <h2>My Appointment: {appointments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name or Email</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {
        appointments.map((a, index) => <tr className='hover'>
            <th>{index + 1}</th>
            <td>{a.patient}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.treatment}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;