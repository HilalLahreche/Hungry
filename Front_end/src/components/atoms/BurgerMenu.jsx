import { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <>
        {/* Burger Icon */}
        <div className="full:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Icon: Open or Close */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
     

      {/* Mobile Menu   Menu Links - for desktop*/}
      <div
        className={`absolute right-0 top-full mt-2 bg-teal-600 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 block' : '-translate-y-full hidden'
        } space-y-4 w-48 p-4 shadow-lg rounded-lg`}
      >
        <a href="#1" className="block text-white">1</a>
        <a href="#2" className="block text-white">2</a>
        <a href="#3" className="block text-white">3</a>
        <a href="#4" className="block text-white">4</a>
      </div>
    </>
  );
};

export default BurgerMenu;
