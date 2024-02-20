import React from "react";

const Card = ({ id, botName, email }) => {
  return (
    <div className="bg-light-green dib br3 ma2 pa3 tc grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="" />

      <div>
        <h2>{botName}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
