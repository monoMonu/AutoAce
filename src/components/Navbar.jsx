
export default function Navbar({open}){
   return (
      <>
         <nav className="navbar">
            <ul>
               <li><a href="#">Orders</a></li>
               <li><a href="#">Garage</a></li>
               <li><a href="#">About</a></li>
               <li><button>Start Now</button></li>
            </ul>
         </nav>
         <div className={`mobile-nav ${open ? 'open' : ''}`}>
            <nav>
               <ul>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Garage</a></li>
                  <li><a href="#">About</a></li>
                  <li><button>Start Now</button></li>
               </ul>
            </nav>
            <p className="copyright">
               Copyright &copy;Monu, {new Date().getFullYear()} | All Rights Reserved.
            </p>
         </div>
      </>
   );
}
