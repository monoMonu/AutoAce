import Navbar from './Navbar'
import logo from './../img/logo.png'
import { useState } from 'react';

function Header(){

   const [openNav, setOpenNav] = useState(false);

   return (
      <header className='app-header'>
         <div>
            <a href='#'>
               <img className='app-logo' src={logo} alt="Logo" />
            </a>
            <p>AutoAce</p>
         </div>
         {/* Navigation Controls */}
         <div className={`toggler ${openNav ? 'cross' : ''}`} onClick={()=>setOpenNav(!openNav)}>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <Navbar open={openNav} />
      </header>
   );
}

export default Header