import React from 'react';

const VEHICLES = [
  { id: 'bike', name: 'Bike', basePrice: 50, maxWeight: '20kg', icon: '🚲' },
  { id: 'van', name: 'Mini Van', basePrice: 150, maxWeight: '500kg', icon: '🚐' },
  { id: 'truck', name: 'Truck', basePrice: 500, maxWeight: '2000kg', icon: '🚛' },
];

const Step2Vehicle = ({ data, updateData, onNext, onBack }) => {
  
  const handleSelect = (v) => {
    // EDGE CASE: Price change after vehicle selection
    // This updates the global state in App.js immediately
    updateData({ 
      vehicle: v.id, 
      price: v.basePrice 
    });
  };

  return (
    <div className="step-content">
      <h2>2. Select Vehicle</h2>
      <p className="hint">Select a vehicle that fits your package weight.</p>

      <div className="vehicle-list">
        {VEHICLES.map((v) => (
          <div 
            key={v.id}
            className={`vehicle-card ${data.vehicle === v.id ? 'selected' : ''}`}
            onClick={() => handleSelect(v)}
          >
            <div className="vehicle-icon">{v.icon}</div>
            <div className="vehicle-info">
              <h3>{v.name}</h3>
              <p>Max Weight: {v.maxWeight}</p>
              <p className="price-tag">Base Fare: ₹{v.basePrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="back-btn" onClick={onBack}>Back</button>
        <button 
          className="next-btn" 
          onClick={onNext} 
          disabled={!data.vehicle} // Button stays disabled until a vehicle is picked
        >
          Confirm Summary
        </button>
      </div>
    </div>
  );
};

export default Step2Vehicle;