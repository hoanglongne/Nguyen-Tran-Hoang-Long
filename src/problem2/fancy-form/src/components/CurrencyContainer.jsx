import React from 'react'

function CurrencyContainer({children}) {
  return (
    <div className='flex flex-col gap-3 h-full relative'>{children}
    <img className='cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[40px] w-[40px]' src='/swapicon.svg' alt="" />
    </div>
  )
}

export default CurrencyContainer