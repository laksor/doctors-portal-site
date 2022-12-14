import React from "react";

const Review = ({ review }) => {
  return (
    <div className="">
      <div className="hover:bg-sky-700 card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5 my-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
            <h4 className="text-xl font-bold uppercase">{review.name}</h4>
            <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
