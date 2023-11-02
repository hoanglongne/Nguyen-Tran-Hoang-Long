import React from 'react'

function SwapButton({openModal}) {
  return (
    <button onClick={openModal} type="button" className='p-3 w-[30%] cursor-pointer font-bold flex justify-center ml-auto text-[#f2eed5] bg-[#e4515b] rounded-lg rounded-bl-sm hover:bg-[#ec838a] duration-200'>Swap Me!!</button>
  )
}

export default SwapButton
