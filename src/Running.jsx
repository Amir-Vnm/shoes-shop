import AddToCart from "./AddToCart";

function Running( { products , onAddToCart  } ) {

const runningShoes = products.filter(item=> item.type === "running")

    return(
        <>
        <div className=" grid md:grid-cols-4 grid-cols-2 md:mt-0 mt-10">
             {runningShoes.map(item=>(
                  <div key={item.id} className="border-2 border-purple-900 relative md:p-0 py-7  m-4 rounded">
                    <img src={item.image} alt={item.image || "default"} 
                    className="md:w-60 md:h-48 w-45 h-25 ml-auto mr-auto " />
                    <p className=" md:h-10 absolute md:left-2 md:bottom-1 top-0 font-sans rounded text-2xl m-1 md:  w-20 underline-offset-2 underline text-white bg-gray-700  p-1">{item.price} </p>
                         <div className=" absolute right-2 bottom-2">
                    <     AddToCart onClick={()=> onAddToCart(item)}  />
                        </div>
                 </div>


             ) )}
        
        </div>
        
        
        </>
    )
}

export default Running ;