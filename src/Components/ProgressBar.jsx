import React from 'react';
import { FaTruck } from 'react-icons/fa'; // Truck icon use kar rahe hain

const ProgressBar = ({ currentStep }) => {
  const steps = ["Pickup", "Vehicle", " Order Details", "Payment", "Done"];
  
  // Truck ki position calculate karna (Percentage mein)
  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="progress-container" style={{ 
  margin: '10px 0 40px 0', 
  position: 'relative', 
  width: '100%',
  padding: '0 10px' // Side padding for labels 
  }}>
      {/* 1. Background Gray Line */}
      <div style={{ 
        height: '4px', 
        background: '#e0e0e0', 
        width: '100%', 
        position: 'absolute', 
        top: '15px', 
        zIndex: 0,
        borderRadius: '2px'
      }}></div>
      
      {/* 2. Navy Blue Progress Fill Line */}
      <div style={{ 
        height: '4px', 
        background: '#2D4A8A', 
        width: `${progressPercent}%`, 
        position: 'absolute', 
        top: '15px', 
        transition: 'width 0.8s ease-in-out', 
        zIndex: 1,
        borderRadius: '2px'
      }}></div>

      {/* 3. THE ANIMATED TRUCK ICON */}
      <div style={{ 
        position: 'absolute', 
        left: `calc(${progressPercent}% - 25px)`, 
        top: '-15px', 
        transition: 'left 0.8s ease-in-out', 
        zIndex: 2,
        color: '#2D4A8A',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
      }}>
        <FaTruck size={40} />
      </div>

      {/* 4. Step Circles & Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        {steps.map((label, index) => (
          <div key={index} style={{ textAlign: 'center', zIndex: 3 }}>
            <div style={{ 
              width: '14px', 
              height: '14px', 
              background: currentStep > index ? '#2D4A8A' : '#fff', 
              border: '3px solid #2D4A8A', 
              borderRadius: '50%', 
              margin: '8px auto',
              transition: 'background 0.4s ease'
            }}></div>
            <span style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: currentStep > index ? '#2D4A8A' : '#94A3B8',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;