
import { Link } from "react-router-dom"
import RandomItems from "./RandomItems"
import RunningIcon from "./images/runningicon.png"
import SneakersIcon from "./images/sneakersicon.png"
import Oxford from "./images/oxfordicon.png"

function Categories() {
    return(
        <section className=" flex flex-row md:w-5/6 md:h-20 md:gap-x-24 justify-center mt-6 md:mt-8 md:ml-27">
<h2 className="text-xl md:font-normal   md:text-5xl text-blue-950 font-title border-t-1 border-b-1 md:mt-2 pt-8  md:pt-2 text-shadow-lg/20 text-shadow-sky-300  ">Categories</h2>
<Link className=" hover:scale-110 transition text-sm md:text-lg text-white md:w-38 md:h-31 border-gray-600 border p-2 text-center " to="/Running"> <img className=" md:w-19 md:h-19 w-12 h-12 ml-auto mr-auto" src={RunningIcon} alt="running shoes" />
 <p className=  " bg-gray-600 text-amber-300 rounded">Running Shoes</p></Link>


<Link  className=" hover:scale-110 transition text-sm md:text-lg text-white md:w-38 md:h-31 border-gray-600 border  p-2 text-center " to="/Sneakers"><img className="md:w-19 md:h-19 w-12 h-12 ml-auto mr-auto" src={SneakersIcon} alt="Sneakers" />
 <p className="bg-gray-600 mt-4 md:mt-0 text-amber-300 rounded">Sneakers</p></Link>
<Link  className="hover:scale-110 transition text-sm md:text-lg text-white md:w-38 md:h-31 border-gray-600 border  p-2 text-center " to="/Oxfords"> <img className="md:w-19 md:h-19 w-12 h-12 mr-auto ml-auto" src={Oxford} alt="Oxford" />
 <p className="bg-gray-600 text-amber-300 rounded">Oxford-( soon )</p></Link>

<Link  className=" hover:scale-110 transition text-[14px] md:text-lg text-white md:w-38 md:h-31 border-gray-600 border  p-2 text-center " to="/RandomItems">
 <p className=" bg-gray-600 text-amber-300 rounded mt-2 ">(random items from fake api)</p></Link>


        </section> )}
export default Categories ;