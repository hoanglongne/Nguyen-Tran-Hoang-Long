import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'

const DropdownWithIcons = ({options, selectedOutputOption, setSelectedOutputOption, setOptions, selectedOption, setSelectedOption, price, setPrice, setOutputPrice, outputPrice, outputBox}) => {


  useEffect(() => {
    const url = "https://interview.switcheo.com/prices.json";
    axios.get(url)
      .then(response => {
        const data = response.data;
        setOptions(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [selectedOption, selectedOutputOption, setOptions, setOutputPrice]); 

  const handleInputOptionChange = (e) => {
    setSelectedOption(e.target.value);
    const currency = options.filter(option => option.currency === e.target.value);
    setPrice(Number(currency[0].price.toFixed(3)))
  };

  const handleOutputOptionChange = (e) => {
    setSelectedOutputOption(e.target.value);
    const currency = options.filter(option => option.currency === e.target.value);
    setOutputPrice(Number(currency[0].price.toFixed(3)))
  };

  return (
    <div>
      <div className="flex gap-1 items-center">
        {outputBox?
        <div>
          <img className="h-[36px] w-[36px]" src={`/tokens/${selectedOutputOption}.svg`} alt="" />
        </div>
        : 
          <div>
            <img className="h-[36px] w-[36px]" src={`/tokens/${selectedOption}.svg`} alt="" />
          </div>
        }
        {
          outputBox ? 
          <div>
            <select value={selectedOutputOption} onChange={handleOutputOptionChange} className="w-full p-2.5 font-bold text-xl text-[#f2eed5] bg-transparent rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            {options.map((option, index)=>(
                <option key={index} value={option.currency}>
                  {option.currency}
                </option>
            ))}
        </select>
          </div> 
          :
          <div>
            <select value={selectedOption} onChange={handleInputOptionChange} className="w-full p-2.5 font-bold text-xl text-[#f2eed5] bg-transparent rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            {options.map((option, index)=>(
                <option key={index} value={option.currency}>
                  {option.currency}
                </option>
            ))}
          </select>
          </div>
        }
      </div>
        {outputBox ? 
          <p className="text-[#b5b19d] pl-1">{outputPrice}$</p>
          :
          <p className="text-[#b5b19d] pl-1">{price}$</p>
        }
    </div>
  );
};

export default DropdownWithIcons;

