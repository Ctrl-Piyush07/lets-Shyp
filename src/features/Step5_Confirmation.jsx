import React, { useEffect, useState } from 'react';

const Confirmation = () => {
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    // Requirement: Generated booking reference (e.g., LS-XXXXXX)
    const randomRef = "LS-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setBookingId(randomRef);
  }, []);

  return (
    <div className="step-content success-screen" style={{ textAlign: 'center', padding: '8px 10px' }}>
      
      {/* 1. ORANGE TICK BAR: Matched with Lets Shyp accent */}
      <div className="success-icon" style={{ 
        fontSize: '32px', 
        
        backgroundColor: '#F57C00', // Orange-Yellow Theme
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 14px',
        color: 'white',
        boxShadow: '0 8px 16px rgba(249, 200, 14, 0.3)'
      }}>
        ✓
      </div>
      
      <h2 style={{ color: 'var(--ls-navy)', marginBottom: '10px' }}>Booking Confirmed!</h2>
      <p style={{ color: 'var(--ls-gray)' , marginBottom:'8px'}}>
        Thank you for choosing <strong>Let's Shyp</strong>. Your order is now in our system.
      </p>

      {/* 2. ELEGANT REFERENCE CONTAINER */}
      <div className="ref-container" style={{ 
        background: 'var(--ls-blue-light)', 
        padding: '16px', 
        borderRadius: '16px', 
        margin: '18px 0',
        border: '2px dashed #D1D5DB' 
      }}>
        <p style={{ margin: 0, color: 'var(--ls-navy)', fontWeight: '600', fontSize: '0.9rem' }}>
          BOOKING REFERENCE
        </p>
        <h3 style={{ 
          margin: '10px 0 0 0', 
          fontSize: '22px', 
          letterSpacing: '2px', 
          color: 'var(--ls-navy)',
          fontWeight: '800'
        }}>
          {bookingId}
        </h3>
      </div>

      {/* 3. NEXT STEPS INFO */}
      <div className="next-steps-info" style={{ 
        textAlign: 'left', 
        fontSize: '14px', 
        color: 'var(--ls-text)',
        backgroundColor: '#fff',
        padding: '12px',
        borderRadius: '12px'
      }}>
        <h4 style={{ color: 'var(--ls-navy)', marginTop: 0 }}>What's next?</h4>
        <ul style={{ paddingLeft: '18px', lineHeight: '1.45' }}>
          <li>A delivery partner will be assigned shortly.</li>
          <li>Track your order in real time through the Track Order section or a shared link via SMS.</li>
          <li>Reference ID for support: <strong>{bookingId}</strong></li>
        </ul>
      </div>

      {/* 4. NAVY BLUE BUTTON: Matched with primary theme */}
      <button 
        className="next-btn" 
        style={{ 
          marginTop: '24px', 
          backgroundColor: 'var(--ls-navy)', // Navy Blue Theme
          boxShadow: '0 10px 20px rgba(45, 74, 138, 0.2)'
        }}
        onClick={() => window.location.reload()} // Restart the flow
      >
        Place a New Booking
      </button>
    </div>
  );
};

export default Confirmation;