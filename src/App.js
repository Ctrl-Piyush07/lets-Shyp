import React, { useState } from 'react';
import './App.css';

// Importing our custom step components
import Address from './features/Step1_Address';
import Vehicle from './features/Step2_Vehicle';
import Summary from './features/Step3_Summary';
import Checkout from './features/Step4_Checkout';
import Confirmation from './features/Step5_Confirmation';

function App() {
  // 1. Step Tracker (Which screen are we on?)
  const [step, setStep] = useState(1);

  // 2. Main Data Store (The "Source of Truth")
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    notes: '',
    vehicle: null,
    price: 0,
    customer: { name: '', phone: '' }
  });

const updateData = (newData) => {
  setFormData((prev) => {
    let updated = { ...prev, ...newData };

    // Agar Pickup ya Drop change hua, toh naya random distance aur price calculate karo
    if (newData.pickup || newData.drop) {
      if (updated.pickup && updated.drop) {
        // Mock distance calculation (1 to 20 km)
        const mockDistance = Math.floor(Math.random() * 20) + 1;
        
        // Base rates based on vehicle (agar vehicle selected hai toh)
        const rates = { bike: 10, van: 30, truck: 100 };
        const baseRate = rates[updated.vehicle] || 50; 
        
        updated.price = baseRate * mockDistance;
      } else {
        updated.price = 0;
      }
    }
    return updated;
  });
};


  // 4. Navigation Functions
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="App">
      <div className="container">
        {/* Progress Indicator */}
        {step < 5 && (
          <div className="progress-bar">
            Step {step} of 4: {['Addresses', 'Vehicle', 'Summary', 'Checkout'][step - 1]}
          </div>
        )}

        {/* Step-by-Step Rendering */}
        {step === 1 && (
          <Address 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
          />
        )}
        
        {step === 2 && (
          <Vehicle 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 3 && (
          <Summary 
            data={formData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 4 && (
          <Checkout 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 5 && (
          <Confirmation />
        )}
      </div>
    </div>
  );
}

export default App;