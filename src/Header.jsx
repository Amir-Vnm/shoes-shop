import Navbar from "./Navbar"
import LoginButton from "./LoginButton"
import ShoppingCart from "./ShoppingCart"


function Header({ cartItems, onDelete }) {

return(

<header className="flex  md:relative fixed md:pt-2 md:-top-2 top-0 text-center w-full md:w-auto md:border-0 border-b-1 h-14 flex-row gap-x-50  justify-center md:gap-x-80   mt-2 z-50 bg-white ">
<h2 className="text-md md:static whitespace-nowrap absolute text-2xl italic font-mono md:text-lg animate-pulse "><span className=" text-2xl text-gray-600 mr-1 ">W</span>shoes Shop</h2>

<Navbar />
<LoginButton />

<div className=" absolute md:top-2 md:translate-x-350 z-50  top-0 left-12 "> <ShoppingCart cartItems={cartItems} onDelete={onDelete} /> </div>




</header>)}

export default Header