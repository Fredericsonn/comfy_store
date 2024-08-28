import React, { useState } from 'react'
import {formatPrice} from "../utils";

const FormRange = (props) => {
  const {name, label, price, size} = props;
  const maxPrice = 100000;
  const step = 1000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  const handlePrice = (e) => {
    setSelectedPrice(e.target.value);
  }
  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input type='range' 
               name={name} 
               min={0} 
               max={maxPrice}
               value={selectedPrice}
               step={step}
               onChange={handlePrice}
               className={`range range-primary ${size}`}>
        </input>
        <div className='flex justify-between px-2 mt-2'>
            <span className='text-xs font-bold'>0</span>
            <span className='text-xs font-bold'>Max : {formatPrice(maxPrice)}</span>
        </div>
    </div>
  )
}

export default FormRange