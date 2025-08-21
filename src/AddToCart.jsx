import { useState } from "react"

function AddToCart({ onClick }) {

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);         
    onClick?.(e); ;
              
  };

    return (
        <>
        
        <button onClick={handleClick}
       
        className={`flex flex-row items-center justify-center text-xl ml-2 p-1  h-7 w-34 
          hover:bg-gradient-to-r from-black to-violet-900 hover:text-white 
           rounded cursor-pointer mr-1 inset-shadow-sm  inset-shadow-blue-600 shadow-sm shadow-sky-800
           hover:border-black hover:scale-104 hover:text-xl  transition
           ${ clicked ? " bg-blue-200 border-b-black text-black " : '  ' }  `}  >
               Add to Cart +
        </button>
   
        
        </>   )}

export default AddToCart