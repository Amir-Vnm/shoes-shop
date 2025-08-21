import DeleteButton from './DeleteButton'
import shopping from './images/shopping.gif'
import { useEffect, useState } from 'react'


function ShoppingCart( {cartItems, onDelete} ) {

   const [isOpen, setIsOpen ] = useState(false)
   const toggleCart = () => {
    setIsOpen (!isOpen)
   }
   
   const [showMessage, setShowMessage ] = useState(false)
   useEffect ( ()=> {
    if (cartItems.length > 0 ) {
        setShowMessage(true)
        const timer = setTimeout (()=> {
            setShowMessage(false)
        }, 2500 ) 
        return ()=> clearTimeout(timer)
    } else {
        setShowMessage(false)
    }
 }, [cartItems] )


    return(
        <section className=' relative'>
        <button onClick={toggleCart}>
     <img className="h-7.5 mb-1 cursor-pointer hover:scale-130 transition " src={shopping} alt="shopping logo" />   
        
        </button>
        {cartItems.length > 0  && (
            <span className=' absolute w-8 h-8 text-center text-xl  text-white rounded-full bg-red-400  '> {cartItems.length} </span>
        )}
             
             {showMessage && ( <p className=' text-lg text-amber-100 bg-red-400 w-40 h-9 overflow-hidden text-center rounded absolute top-10 -right-20'> 😍 item Added * </p> )}



{isOpen && (
    
        <div className=' h-80 overflow-y-scroll flex flex-col bg-gradient-to-b from-black to-violet-950 absolute -right-40 top-10 border-4 border-amber-300  rounded text-2xl z-40 ' >
            <button className='  fixed md:top-2 md:left-16 left-34 top-84 px-1 text-2xl text-red-600 bg-white z-50 rounded' onClick={()=> setIsOpen(false)} > close </button>
            { cartItems.length === 0 ? (<p className='w-40 rounded-2xl h-20 text-center bg-gradient-to-b from-violet-950 to-black text-2xl text-white z-50'>Empty...</p>)  : (
                cartItems.map(
                    (item, index)=> 
                        <div key={index} className='flex flex-row w-50 text-center bg-black z-40 space-y-5'>
                        <img className='w-20 h-14 z-50  object-center border-1 border-violet-700 ' src={item.image}  />
                        <p className=' h-10 w-20 text-white text-lg z-50'>{item.price}</p>
                        <DeleteButton onClick={()=> onDelete(item.id)} />
                              </div>
                ))}


        </div>
        
        
        
            )}
       </section> )}


export default ShoppingCart ;