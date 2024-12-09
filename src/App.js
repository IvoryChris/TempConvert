import React, { useState } from 'react';

function App() {
  // Step 2: Set up state for temperature input and output
  const [temperature, setTemperature] = useState('');
  const [convertedTemp, setConvertedTemp] = useState('');

  // Step 3: Add an Input Field for Temperature
  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  // Step 4: Add Buttons for Conversion
  const convertTo = (scale) => {
    let result;
    if (scale === 'F') {
      // Convert Celsius to Fahrenheit
      result = (temperature * 9) / 5 + 32;
    } else if (scale === 'C') {
      // Convert Fahrenheit to Celsius
      result = ((temperature - 32) * 5) / 9;
    }
    setConvertedTemp(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temperature Converter</h1>
      
      {/* Step 3: Input Field */}
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Enter temperature"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <div>
        {/* Step 4: Buttons for Conversion */}
        <button onClick={() => convertTo('F')} style={{ margin: '5px' }}>
          Convert to Fahrenheit
        </button>
        <button onClick={() => convertTo('C')} style={{ margin: '5px' }}>
          Convert to Celsius
        </button>
      </div>

      {/* Step 5: Display Converted Temperature */}
      <h2>Converted Temperature: {convertedTemp}</h2>
    </div>
  );
}

export default App;
