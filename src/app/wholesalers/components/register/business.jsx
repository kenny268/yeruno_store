"use client"
// components/Step1.js
import { useContext } from 'react';
import { FormContext } from '@/app/wholesalers/components/context/FormContext';

const Business = ({ nextStep }) => {
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
  const divBtn = ''
  return (
    
    <form onSubmit={handleSubmit} className={`${form} bg-slate-200 lg:p-5 p-3`} >

      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className={`${hi}`}>Business Details</h1>
      </div>

      <div className={`${div}`}>
        <label className={`${label}`}>
          Business Name 
        </label>
        <input
          className={`${input}`}
          type="text"
          name="businessName"
          value={formData.businessName}
          placeholder ='Business name'
          onChange={handleChange}
          required
        />
      </div>

      <div className={`${div}`}>
        <label className={`${label}`}>
          Business Email:
        </label>
        <input
          className={`${input}`}
          type="email"
          name="businessEmail"
          value={formData.businessEmail}
          onChange={handleChange}
          required
        />
       
      </div>

      <div className={`${div}`}>

        <label className={`${label} `}>
        Type of Store:
        </label>

        <select
          className={`${input} `}
          name="storeType"
          value={formData.storeType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
        </select>
      </div>
      <div className='flex flex-row  justify-end items-center pr-3 md:w-4/5 w-full'> 
        <button className='bg-slate-950 text-slate-200 p-1 rounded-sm w-24 font-semibold' type="submit">Next</button>
      </div>
    </form>
  );
};

export default Business;
 