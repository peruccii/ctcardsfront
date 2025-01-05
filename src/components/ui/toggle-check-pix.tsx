'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function PIXCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      localStorage.setItem('payment_method', 'PIX');
    } else {
      localStorage.setItem('payment_method', 'STRIPE');
    }
  };

  return (
    <label
      className={`
        relative flex mb-4 items-center p-3 rounded-xl cursor-pointer
        ${isChecked ? 'bg-green-500' : 'bg-white'}
        transition-all duration-300 ease-in-out
        shadow-md hover:shadow-lg
        w-full max-w-md mx-auto
      `}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheck}
        className="sr-only"
      />
      <div
        className={`
          sm:w-12 sm:h-12 h-8 w-8 rounded-full border-4
          ${isChecked ? 'border-white bg-green-500' : 'border-gray-300 bg-white'}
          flex items-center justify-center
          transition-all duration-300 ease-in-out
        `}
      >
        <CheckCircle
          className={`
            sm:w-8 sm:h-8 text-sm
            ${isChecked ? 'text-white scale-100' : 'text-gray-300 scale-0'}
            transition-all duration-300 ease-in-out
          `}
        />
      </div>
      <span
        className={`
          ml-4 text-base font-semibold
          ${isChecked ? 'text-white' : 'text-gray-700'}
          transition-all duration-300 ease-in-out
        `}
      >
        Sim, quero pagar com PIX
      </span>
    </label>
  );
}
