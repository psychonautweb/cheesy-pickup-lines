import React, { useState, useEffect } from 'react';
import PickupLine from './components/PickupLine';

//https://rest-api-pickup-lines.herokuapp.com/message

const App = () => {
  const [pickupLine, setPickupLine] = useState({
    title: 'Cheesy',
    id: null,
    message: null,
  });

  const fetchPickupLine = async () => {
    return await fetch(
      'https://rest-api-pickup-lines.herokuapp.com/message/random'
    ).then((response) => response.json());
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
