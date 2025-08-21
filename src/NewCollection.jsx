import AddToCart from "./AddToCart"
import { useRef } from "react"
import ScrollButtons from "./Scrollbuttons"



function NewCollection({products, onAddToCart}) {

  const scrollContainerRef = useRef() ;
    return(
        
        <section className=" md:scale-100 scale-89 md:flex md:flex-row md:ml-52 md:mt-5 md:-mb-10 md:relative mt-13 z-10
        
        
        ">

 
 <div className="flex flex-row justify-between   md:flex-col md:border-t-1 md:border-r-1 md:mr-10 ">
  <h1 className="md:text-5xl text-2xl text-blue-950 font-title text-shadow-lg/60 text-shadow-sky-300  ">New <br />Collection</h1>
  <button className=" hidden md:block mt-16 text-2xl text-white md:self-start border-black border-2  rounded-lg 
  cursor-pointer p-1 bg-gray-600 hover:bg-gradient-to-l from-gray-500 to-white hover:text-black">
    BuyNow</button>
  </div>  


   <div ref={scrollContainerRef} className="flex flex-row md:w-[72%] md:max-w-[72%] overflow-x-auto overflow-y-hidden scroll-smooth z-0 ">
             {products.map( item => (
              <div key={item.id} className="border-r border-t md:mr-24 mr-14 pb-4 z-10" >
                <img className="md:w-50 md:h-40 w-30 h-25 z-10 md:m-0 ml-6 " src={item.image}  />
                <div className="flex flex-row mt-1">
                <h3 className="font-sans rounded text-lg underline-offset-2 underline text-white bg-gray-700 w-13 p-1 h-8">{item.price}</h3>
                <AddToCart onClick={()=> onAddToCart(item)} />
                  </div>
                </div>
             ))}
       
  </div>         
   <div className=" absolute -bottom-14 right-3/6" >     
    <ScrollButtons scrollRef={scrollContainerRef} /></div>

        </section>)}

export default NewCollection ;