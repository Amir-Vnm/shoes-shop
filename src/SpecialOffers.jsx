import AddToCart from "./AddToCart";
import { useRef } from "react"
import ScrollButtons from "./Scrollbuttons";

function SpecialOffers( { products, onAddToCart

 } )
 {
  const scrollContainerRef = useRef() ;
    return(
        <>
     <h2 className=" text-shadow-lg/30 font-title md:text-4xl text-2xl whitespace-nowrap text-blue-500 border-t-1 border-b-1    md:ml-auto md:mr-auto md:mt-18 mt-4 pt-1 md:pt-3 md:pl-6 mb-2 md:mb-10 w-full md:w-5/6 "> Special Offers 20% </h2> 

        <section className=" relative flex flex-row md:w-[85%] md:gap-x-20 justify-center md:ml-40">
                 
             


  <div ref={scrollContainerRef} className=" flex flex-row overflow-x-auto scroll-smooth z-0 overflow-y-hidden " >
    
    {products.filter(item => item.isOffer).map ( item => (
    <div key={item.id} className="border-r-1 border-b-2 md:mr-15 mr-12 md:pb-4 pb-1 z-10  border-blue-400">
     <img className="md:w-40 md:h-30 w-30 h-18 md:m-0 ml-8 z-10 " src={item.image} />
        <div className="flex flex-row mt-1">
        <h3 className="font-sans rounded text-lg underline-offset-2 underline text-white bg-gray-700 w-13 p-1 h-8">{item.price}</h3>
          <AddToCart onClick={()=> onAddToCart(item)} />
           </div>
                      
             </div>


                ))}

            </div>
             <div className="md:hidden absolute -bottom-14  right-40" >     
    <ScrollButtons scrollRef={scrollContainerRef} /></div>

        </section>  
        </>)}

export default SpecialOffers ;

