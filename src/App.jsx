import Header from './Header'
import NewCollection from './NewCollection'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import ShoesData from './ShoesData'
import { useEffect, useState } from 'react'
import Categories from './Categories'
import SpecialOffers from './SpecialOffers'
import Running from './Running'
import Sneakers from './Sneakers'
import About from './About'
import Contact from './Contact'
import RandomItems from './RandomItems'
import Subtitle from './Subtitle'
import Footer from './Footer'



function App() {


const [cartItems , setCartItems] = useState( ()=> {
  return JSON.parse(localStorage.getItem("cart")) || [] ;
}) ;
const handleAddToCart = (item) => {
  setCartItems(prev => {
    const exists = prev.some(i=> i.id === item.id) ;
    if (exists) return prev ; 
    const updatedCart = [...prev, item ] ; 
    localStorage.setItem("cart" , JSON.stringify(updatedCart)) ;
    return updatedCart
  }) ;
}



const handleDelete = (id) => {
  setCartItems(prev => {
    const updatedCart = prev.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};

 
  return (
<> 


<Header cartItems={cartItems} onDelete={handleDelete} />

<div className=' hidden md:block  md:static absolute  -ml-1.5 w-full md:w-5/6 h-0.5
 bg-black md:ml-auto md:mr-auto mt-0   bg-gradient-to-b from-white to-blue-800'></div>
 
 <div className='md:flex hidden' ><Subtitle /></div>


<Routes>
<Route
    path="/" element={ <> <NewCollection products={ShoesData}  onAddToCart={handleAddToCart} />

<div className='  w-5/6 h-0.5 bg-black ml-auto mr-auto mt-15  md:mt-25 bg-gradient-to-b from-white to-black'></div>

<Categories />
<SpecialOffers products={ShoesData} onAddToCart={handleAddToCart} />
</>  }/>




 <Route path="/Running" element={<Running products={ShoesData} onAddToCart={handleAddToCart} />} />
 <Route path="/Sneakers" element={<Sneakers products={ShoesData} onAddToCart={handleAddToCart} />} />
 <Route path='about' element={<About />} />
 <Route path='Contact' element={<Contact />} />
 <Route path='RandomItems' element={<RandomItems onAddToCart={handleAddToCart} />} />
 

 
</Routes>
<Footer />

</>)}

export default App
