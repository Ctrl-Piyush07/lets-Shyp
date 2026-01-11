import React from 'react';

const VEHICLES = [
  { id: 'bike', name: 'Bike', basePrice: 50, maxWeight: '20kg', icon: '🚲' },
  { id: 'van', name: 'Mini Van', basePrice: 150, maxWeight: '500kg', icon: '🚐' },
  { id: 'truck', name: 'Truck', basePrice: 500, maxWeight: '2000kg', icon: '🚛' },
];

const Vehicle = ({ data, updateData, onNext, onBack }) => {
  
  const handleSelect = (vehicle) => {
    // EDGE CASE: Price change after vehicle selection
    // We update both the vehicle ID and the base price
    updateData({ 
      vehicle: vehicle.id, 
      price: vehicle.basePrice // Mocked base price
    });
  };

  return (
    <div className="step-container">
      <h2>Select Vehicle</h2>
      <p className="hint">Choose a vehicle based on your package size.</p>

      <div className="vehicle-grid">
        {VEHICLES.map((v) => (
          <div 
            key={v.id}
            className={`vehicle-card ${data.vehicle === v.id ? 'active' : ''}`}
            onClick={() => handleSelect(v)}
          >
            <span className="icon">{v.icon}</span>
            <h3>{v.name}</h3>
            <p>Max Weight: {v.maxWeight}</p>
            <p className="price">Starting from ₹{v.basePrice}</p>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button onClick={onBack} className="back-btn">Back</button>
        <button 
          disabled={!data.vehicle} 
          onClick={onNext} 
          className="next-btn"
        >
          Next: Summary
        </button>
      </div>
    </div>
  );
};

export default Vehicle;