import React from 'react';

const PickupLine = ({ pickupLine }) => {
  return (
    <div className="quote">
      <div className="anime" title={pickupLine.anime}>
        {pickupLine.anime}
      </div>
      <blockquote>{pickupLine.quote}</blockquote>

      <div className="character" title={pickupLine.character}>
        {pickupLine.character}
      </div>
    </div>
  );
};

export default PickupLine;
