import axios from "axios";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";





function RandomItems( { onAddToCart } ) {

const [randomProduct , setRandomProduct] = useState([]) ;

useEffect (()=> {
  async function fetchProduct() {
    const {data} =  await axios.get("https://fakestoreapi.com/products")
    setRandomProduct(data)
  }
  fetchProduct() ;
} , [])










  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:mt-0 mt-12">
            
{randomProduct.map(  (item)=> (
    <div key={item.id} className="border-2 border-purple-900 relative md:p-0 md:py-1  m-4 rounded-2xl">
        
        <p className=" md:h-10 absolute md:left-0 top-0  font-sans rounded text-2xl m-1  underline-offset-2 underline text-white bg-gray-700  p-1">{item.price}</p>
        <img src={item.image} alt=""  className="md:w-60 md:h-48 w-45 h-24 md:ml-26 mx-auto mt-12 pb-4 px-2   md:p-0  " 
        loading="lazy" />
        <AddToCart onClick={()=> onAddToCart(item)} />
         <h3 className="font-sans text-lg px-2 pb-1  underline" >{item.title}</h3>
         </div>
) )}
        
        
        
        
        </div>
  )
}
export default RandomItems ;