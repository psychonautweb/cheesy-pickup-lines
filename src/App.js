import React, { useState, useEffect } from 'react';
import PickupLine from './components/PickupLine';

const App = () => {
  const [pickupLine, setPickupLine] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchPickupLine = async () => {
    return await fetch('https://animechan.vercel.app/api/random').then(
      (response) => response.json()
    );
  };

  const generate = async () => {
    setPickupLine(await fetchPickupLine());
  };

  useEffect(async () => {
    setPickupLine(await fetchPickupLine());
  }, []);

  return (
    <div className="App">
      <PickupLine pickupLine={pickupLine} />

      <button onClick={generate}>Generate New Line</button>
    </div>
  );
};

export default App;
