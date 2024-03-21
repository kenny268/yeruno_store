"use client"
// components/Step2.js
import { useContext } from 'react';
import { FormContext } from '@/app/wholesalers/components/context/FormContext';

const ContactDetails = ({ nextStep,prevStep }) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const form = 'rounded-md shadow-md lg:w-2/5 w-4/5  h-80 flex flex-col justify-evenly items-start';
  const div = "flex flex-row justify-between items-start sm:w-4/5 md:w-4/5";
  const hi = 'text-center font-semibold text-2xl'
  const label='pr-1 text-l lg:w-2/5 md:bg-slate'
  const input = 'pl-1 rounded-sm p-1 border-gray-300 focus:border-orange-500 lg:w-3/5 md:1/5 pl-1';
  const btn ='bg-slate-950 text-slate-200 p-1 rounded-md w-24 font-semibold'

  return (
    <form onSubmit={handleSubmit} className={`${form} bg-slate-200 p-5`}>

        <div className='flex flex-col items-center justify-center w-full' >
            <h1 className={`${hi}`}>Contact Details</h1>
        </div>

        <div className={`${div}`}>
          <label className={`${label}`}>
            Phone Number:
          </label>
          <input
            className={`${input}`}
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className={`${div} `}>
        <label className={`${label} `}> 
        Email:
        </label>
        <input
          className={`${input}`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
      
      <div className={`${div}`}>
        <label className={`${label}`}>
          Location Address:
        </label>
        <input
          className={`${input}`}
          type="text"
          name="locationAddress"
          value={formData.locationAddress}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Add more fields for physical locations if needed */}

      <div className='flex flex-row w-4/5 justify-between'>
        <button type="button" onClick={prevStep} className={`${btn}`}>Previous</button>
        <button type="submit" className={`${btn}`}>Next</button>
      </div>

    </form>
  );
};

export default ContactDetails;
