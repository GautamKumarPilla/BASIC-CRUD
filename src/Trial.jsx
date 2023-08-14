import React, { useState, useRef } from 'react';

function MapComponent() {
  const [inp1, setInp1] = useState('Jailer');
  const [inp2, setInp2] = useState('Bhola');
  const mapRef = useRef(null);


  const handleSwitchPlaces = () => {
    const tempPlace = inp1;
    setInp1(inp2);
    setInp2(tempPlace);
    console.log(inp1);
    console.log(inp2);
  };

  return (
    <div>
      <button ref={mapRef} onClick={handleSwitchPlaces}>Switch Places</button>
      <div style={{ width: '100%', height: '400px' }}>
        <input type="text" value={inp1}></input>
        <input type="text" value={inp2}></input>
      </div>
    </div>
  );
}

export default MapComponent;
