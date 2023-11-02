import React from 'react'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#4c4c4c] text-[#191811] bg-opacity-70">
        <div className="bg-[#f2eed5] w-1/3 h-1/3 rounded-lg p-6">
          <h2 className="text-xl font-semibold">Your transaction is successful</h2>
          <p className='mt-2 leading-6 tracking-wide'>Congratulations on completing your transaction! To access your transaction history, simply navigate to the 'Account' or 'Profile' section on our platform. You'll find a link to view your transaction history and track all your past activities. Thank you for choosing our services!</p>
          <div className='w-full flex justify-center items-end'>
            <button
                className="mt-4 bg-[#e4515b] font-medium text-[#f2eed5] rounded-full py-2 px-4 hover:bg-[#ec838a] duration-200"
                onClick={onClose}
            >
                Close Modal
            </button>
          </div>
        </div>
      </div>
  
    );
  }

export default Modal
