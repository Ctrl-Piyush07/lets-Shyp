import React, { useEffect, useState } from 'react';

const Confirmation = () => {
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    // Requirement: Generated booking reference (e.g., LS-XXXXXX)
    const randomRef = "LS-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setBookingId(randomRef);
  }, []);

  return (
    <div className="step-content success-screen" style={{ textAlign: 'center', padding: '40px 20px' }}>
      <div className="success-icon" style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
      
      <h2 style={{ color: '#28a745' }}>Booking Confirmed!</h2>
      <p>Thank you for choosing <strong>Lets Shyp</strong>. Your order has been placed successfully.</p>

      <div className="ref-container" style={{ 
        background: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        margin: '25px 0',
        border: '1px dashed #ccc' 
      }}>
        <p style={{ margin: 0, color: '#666' }}>Booking Reference Number</p>
        <h3 style={{ margin: '10px 0', fontSize: '24px', letterSpacing: '2px' }}>{bookingId}</h3>
      </div>

      <div className="next-steps-info" style={{ textAlign: 'left', fontSize: '14px', color: '#555' }}>
        <h4>What's next?</h4>
        <ul>
          <li>A delivery partner will be assigned shortly.</li>
          <li>You will receive a real-time tracking link via SMS.</li>
          <li>For support, quote your reference ID: <strong>{bookingId}</strong></li>
        </ul>
      </div>

      <button 
        className="next-btn" 
        style={{ marginTop: '30px', backgroundColor: '#007bff' }}
        onClick={() => window.location.reload()} // Restart the flow
      >
        Place a New Booking
      </button>
    </div>
  );
};

export default Confirmation;