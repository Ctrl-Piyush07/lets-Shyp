import React from 'react';

const VEHICLES = [
  { id: 'bike', name: 'Bike', basePrice: 50, maxWeight: '20kg', icon: '🚲' },
  { id: 'van', name: 'Mini Van', basePrice: 150, maxWeight: '500kg', icon: '🚐' },
  { id: 'truck', name: 'Truck', basePrice: 500, maxWeight: '2000kg', icon: '🚛' },
];

const Vehicle = ({ data, updateData, onNext, onBack }) => {
  
  const handleSelect = (v) => {
    // EDGE CASE: Price change after vehicle selection handled in global state
    updateData({ 
      vehicle: v.id, 
      price: v.basePrice 
    });
  };

  return (
    <div className="step-content">
      <h2 style={{ textAlign: 'center', color: 'var(--ls-navy)' }}>2. Select Vehicle</h2>
      <p className="hint" style={{ textAlign: 'center', marginBottom: '30px' }}>
        Select a vehicle that fits your package weight.
      </p>

      <div className="vehicle-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {VEHICLES.map((v) => (
          <div 
            key={v.id}
            className={`vehicle-card ${data.vehicle === v.id ? 'selected' : ''}`}
            onClick={() => handleSelect(v)}
            style={{
              display: 'flex',
              alignItems: 'center', // Aligns icon with text
              gap: '20px',
              padding: '20px',
              border: data.vehicle === v.id ? '2px solid var(--ls-navy)' : '2px solid #EDF0F5',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: data.vehicle === v.id ? '#F0F4FF' : '#fff'
            }}
          >
            {/* ICON ALIGNED TO THE LEFT OF TEXT */}
            <div className="vehicle-icon" style={{ fontSize: '40px' }}>{v.icon}</div>
            
            <div className="vehicle-info" style={{ textAlign: 'left' }}>
              <h3 style={{ margin: '0 0 5px 0', color: 'var(--ls-navy)' }}>{v.name}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Max Weight: {v.maxWeight}</p>
              <p className="price-tag" style={{ margin: '5px 0 0 0', fontWeight: '700', color: 'var(--ls-navy)' }}>
                Base Fare: ₹{v.basePrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTONS IN THE SAME ROW */}
      <div className="button-group" style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <button 
          className="back-btn" 
          onClick={onBack}
          style={{ 
            flex: 1, 
            padding: '16px', 
            borderRadius: '12px',
            border: '2px solid #EDF0F5',
            fontWeight: '600'
          }}
        >
          Back
        </button>
        <button 
          className="next-btn" 
          onClick={onNext} 
          disabled={!data.vehicle} 
          style={{ 
            flex: 2, 
            padding: '16px', 
            borderRadius: '12px',
            backgroundColor: !data.vehicle ? '#ccc' : 'var(--ls-navy)',
            color: 'white',
            fontWeight: '700',
            border: 'none'
          }}
        >
          Confirm Summary
        </button>
      </div>
    </div>
  );
};

export default Vehicle;