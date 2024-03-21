"use client"
// components/Step3.js
import { useContext } from 'react';
import { FormContext } from '@/app/wholesalers/components/context/FormContext';

const Summary = ({ prevStep, handleSubmit }) => {
  const { formData } = useContext(FormContext);

  const handleEdit = () => {
    prevStep();
  };

  const form = 'rounded-md shadow-md lg:w-2/5 w-4/5  h-80 flex flex-col justify-evenly items-start';
  const hi = 'text-center font-semibold text-2xl';
  const btn ='bg-slate-950 text-slate-200 p-1 rounded-md w-24 font-semibold';
  const div = "w-full flex items-center";
  const pInfo = "w-3/5";
  const pTitle = "w-2/5";

  return (
    <form className={`${form} bg-slate-200 p-5`} onSubmit={handleSubmit}>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className={`${hi}`}>Summary</h1>
      </div>

      <div className={`${div}`}>
        <p className={`${pTitle}`}><strong>Business Name:</strong></p> 
        <p className={`${pInfo}`}>{formData.businessName}</p>
      </div>

      <div className={`${div}`}>
        <p className={`${pTitle}`}><strong>Business Email:</strong> </p> 
        <p>{formData.businessEmail}</p>
      </div>

      <div className={`${div}`}>
        <p className={`${pTitle}`}><strong>Type of Store:</strong></p> 
        <p className={`${pInfo}`}> {formData.storeType}</p>
      </div>
      <div className={`${div}`}>
        <p className={`${pTitle}`}><strong>Phone Number:</strong></p> 
        <p className={`${pInfo}`}> {formData.phoneNumber}</p>
      </div>
      <div className={`${div}`}>
          <p className={`${pTitle}`}><strong>Email:</strong></p> 
          <p className={`${pInfo}`}> {formData.email}</p>
      </div>
      <div className={`${div}`}>
        <p className={`${pTitle}`}><strong>Location Address:</strong></p> 
        <p className={`${pInfo}`}>{formData.locationAddress}</p>
      </div>
      <div className='flex flex-row w-4/5 justify-between'>
        <button className={`${btn}`} type="button" onClick={handleEdit}>Edit</button>
        <button className={`${btn}`} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Summary;
