import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = event =>{
    event.preventDefault();
    setTreatment(null);

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center mb-5 font-bold text-xl text-secondary">
            Appointment for : {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot} >{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
