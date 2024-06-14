import { Card1 } from "../components/cards/card1"
// Images 
import agilityIcon from "../img/agility.png"
import voltIcon from "../img/volt.png"
import speedometerIcon from "../img/Speedometer.png"
import bgcar from "../img/BGCar.png"
import { useState } from "react"


function PerformanceSec() {

  const [spec, setSpec] = useState('engine')

  const features1 = [
    {
      img: agilityIcon,
      heading: "AGILITY",
      text: "Built for speed with a 5.2-per V10 engine"
    },
    {
      img: voltIcon,
      heading: "AGILITY",
      text: "Built for speed with a 5.2-per V10 engine"
    },
    {
      img: speedometerIcon,
      heading: "AGILITY",
      text: "Built for speed with a 5.2-per V10 engine"
    },
  ];

  const specs = [
    ["Engine Diaplacement", "5204"], 
    ["Maximum Torque", "6014bhp @ 8250 pgm"],
    ["Maximum Power", "590Nm @ 6500 pgm"],
    ["Turning Radius", "5.9 m"],
    ["No. of Cylinders", "10"],
    ["Drive Types", "AWD"],
    ["Turbo Charges", "No"],
    ["Super Charges", "Yes"],
    ["Fuel Supply", "Direct Injection"]
  ];

  return (
    <section className='carPerformance'>

      <div className='para-1'>
        <h1>Take a journey,<br />bend space</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga earum cum unde eaque rem porro vel, et dolorum cumque aspernatur repellendus architecto!
        </p>
      </div>

      <div className='features-1'>
        {features1.map((feat, i) => (
          <Card1 key={i} img={feat.img} heading={feat.heading} text={feat.text} />
        ))}
      </div>

      <h1 className="bgText">FEATURES</h1>
      <div className="techSpecs">
        <header>
          <h3>Tech Specs</h3>
          <select id="specs" value={spec} onChange={(e) => setSpec(e.target.value)} >
            <option value="engine">Engine</option>
          </select>
        </header>
        <div className="featureTable">
          {specs.map((spec, i) => (
            <div key={i} className="specRow">
              <p className="specName">{spec[0]}</p>
              <p className="specValue">{spec[1]}</p>
            </div>
          ))}
        </div>
        <img className="bgcar" src={bgcar} alt="black car"/>
      </div>
    </section>
  )
}

export default PerformanceSec