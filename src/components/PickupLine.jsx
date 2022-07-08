import React from 'react';

const PickupLine = ({ pickupLine }) => {
  return (
    <div className="quote">
      <div className="title" title="Cheesy Pick Up Lines">
        Cheesy Pick Up Lines
      </div>
      <blockquote>{pickupLine.message}</blockquote>

      <div className="id" title={pickupLine.id}>
        #{pickupLine.id}
      </div>
    </div>
  );
};

export default PickupLine;
