import albumVid from "../vids/mixkit-luxury-sports-car-in-nature-35205-large.webm"
import fireIcon from "../img/fire.png"
import albumImg1 from '../img/albumImg1.jpg'
import albumImg2 from '../img/albumImg2.jpg'
import { Card2 } from "../components/cards/card2"

export default function CarAlbum (){
   return (
      <section className="carAlbum">
         <div className="albumLeft">
            <Card2 img={fireIcon} text={"Power and Speed unleashed"} bg="#57a6d7"/>
            <img src={albumImg1} alt="White Moving Car"/>
            <img src={albumImg2} alt="Black Car"/>
            <Card2 img={fireIcon} text={"Respectful To Environment"} bg="#777"/>
         </div>
         <div className="albumRight">
            <video autoPlay loop muted>
               <source src={albumVid} type="video/webM" />
               <source src="movie.ogg" type="video/ogg" />
               Your browser does not support the video tag.
            </video>
         </div>
      </section>
   )
}