

function ScrollButtons( { scrollRef } ) {

         const scrollLeft = ()=> {
            scrollRef.current.scrollBy ( {left: -175, behavior: 'smooth'})
         }; 
         const scrollRight = ()=> {
            scrollRef.current.scrollBy ({ left:175 , behavior : 'smooth' })
         } ;


    return (
        <>   
<div className="flex flex-row gap-x-10 justify-center mr-4 space-y-2 ">
      <button 
        onClick={scrollLeft}
        className="cursor-pointer bg-gray-600 hover:bg-amber-300 hover:text-black hover:scale-115 transition text-amber-300 text-4xl text-center h-8 pb-11 w-16 rounded"
      >
        ←
      </button>
      <button
        onClick={scrollRight}
        className="cursor-pointer bg-gray-600  hover:bg-amber-300 hover:text-black hover:scale-115 transition text-amber-300 text-4xl text-center h-8 pb-11 w-16  rounded"
      >
        →
      </button>
    </div>
        </>)}

export default ScrollButtons ;