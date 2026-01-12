import React, { useState } from 'react';
import './App.css';
// Fix 1: Naming consistent honi chahiye (NavBar)
import Navbar from './Components/NavBar'; 
import ProgressBar from './Components/ProgressBar';

// Step Components
import Address from './features/Step1_Address';
import Vehicle from './features/Step2_Vehicle';
import Summary from './features/Step3_Summary';
import Checkout from './features/Step4_Checkout';
import Confirmation from './features/Step5_Confirmation';

function App() {
  const [step, setStep] = useState(1);
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
      if (newData.pickup || newData.drop) {
        if (updated.pickup && updated.drop) {
          const mockDistance = Math.floor(Math.random() * 20) + 1;
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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Fix 2: Return statement ke andar JSX structure
  return (
    <div className="App">
      <Navbar /> 

      <div className="container">
        {/* Progress Bar hamesha same position par rahega consistency ke liye */}
        <ProgressBar currentStep={step} />

        {/* Fix 3: Wrapper for consistent box size */}
        <div className="step-content">
          {step === 1 && (
            <Address data={formData} updateData={updateData} onNext={nextStep} />
          )}
          
          {step === 2 && (
            <Vehicle data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
          )}

          {step === 3 && (
            <Summary data={formData} onNext={nextStep} onBack={prevStep} />
          )}

          {step === 4 && (
            <Checkout data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
          )}

          {step === 5 && (
            <Confirmation onReset={() => setStep(1)} />
          )}
        </div>
      </div>
    </div>
  );
} // Closing brace added here

export default App;