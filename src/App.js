import "./App.css";
import Header from './components/Header.jsx'
import HeroSec from './sections/HeroSec.jsx'
import PerformanceSec from './sections/PerformanceSec.jsx'
import AlbumSec from './sections/AlbumSec.jsx'
import Footer from "./components/Footer.jsx";


function App() {
   return (
      <>
         <Header />
         <HeroSec />
         <PerformanceSec />
         <AlbumSec />
         <Footer />
      </>
   );
}

export default App;
