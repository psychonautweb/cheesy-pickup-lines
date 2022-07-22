import React, { useState } from 'react';

const PickupLine = ({ pickupLine }) => {
  const [text, setText] = useState('');

  const copy = async () => {
    setText(document.querySelector('blockquote').textContent);
    await navigator.clipboard.writeText(text);
    alert('Text copied');
  };

  return (
    <div className="quote">
      <div className="title" title="Cheesy Pick Up Lines">
        Cheesy Pick Up Lines
      </div>
      <blockquote>
        {!pickupLine.message ? 'Loading...' : pickupLine.message}
      </blockquote>

      <div className="id" title={pickupLine.id}>
        #{pickupLine.id}
      </div>

      <button onClick={copy}>Copy</button>
    </div>
  );
};

export default PickupLine;
