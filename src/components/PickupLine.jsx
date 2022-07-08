import React from 'react';

const PickupLine = ({ pickupLine }) => {
  return (
    <div className="quote">
      <div className="anime" title={pickupLine.title}>
        {pickupLine.title}
      </div>
      <blockquote>{pickupLine.message}</blockquote>

      <div className="character" title={pickupLine.id}>
        {pickupLine.id}
      </div>
    </div>
  );
};

export default PickupLine;
