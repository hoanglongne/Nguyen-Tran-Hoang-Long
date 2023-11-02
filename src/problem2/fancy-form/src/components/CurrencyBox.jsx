import React, { useEffect } from 'react'
import DropdownWithIcons from './Dropdown'
import { useState } from "react";

function CurrencyBox({outputBox, outputPrice, setOutputPrice, price, setPrice, outputAmount, setOutputAmount}) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('BLUR');
  const [selectedOutputOption, setSelectedOutputOption] = useState('USDC');
  const [amount, setAmount] = useState(0)

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }
  
  useEffect(() => {
    setOutputAmount(amount * price / outputPrice);
  },[amount])


  return (
    <div className='p-3 flex-1 w-[100%] bg-[#222015] rounded-md flex justify-between'>
      <DropdownWithIcons className="flex-1" options={options} selectedOutputOption={selectedOutputOption} setSelectedOutputOption={setSelectedOutputOption} setOptions={setOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption} price={price} setPrice={setPrice} setOutputPrice={setOutputPrice} outputPrice={outputPrice} outputBox={outputBox} />
      <div className='flex-1 font-bold text-2xl flex flex-col justify-center items-end gap-1'>
        <div>
        <input type="number" value={amount} 
                  onChange={handleChange} 
                  className={`bg-transparent max-w-[100px] text-right outline-none mr-1 ${!outputBox ? '' : 'hidden'}`}
                />
        <span className={`mr-1 ${outputBox ? '' : 'hidden'}`}>{outputAmount.toFixed(3)}</span>
        <span className=''>coin</span>
        </div>

        {outputBox ? 
        <p className='font-light text-sm'>
          ≈&#160;
          {
            (outputPrice * outputAmount).toFixed(3)
          }
          &#160;$USD
        </p>      
        : 
        <p className='font-light text-sm'>
          ≈&#160;
          {
            (price * amount).toFixed(3)
          }
          &#160;$USD
        </p>
        }
      </div>
    </div>
  )
}

export default CurrencyBox