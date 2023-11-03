import React from "react";
import "../Css/destination.css"
import Json from "../data.json"

const Destination = () => {

   const [name,setName] = React.useState("Moon")



   const moon = () => {
    setName("Moon")
   }
   const mars= () => {
    setName("Mars")
   }
   const europa = () => {
    setName("Europa")
   }
   const titan = () => {
    setName("Titan")
   }

    const [data,setData] = React.useState ([]);

    React.useEffect(()=>{
        setData(Json.destinations)
    },[])

    const selected = data.find((item) => item.name === name)
  

  return (
  <div>
    <h3 className="destination__h3 box"><span className="gray">01</span> PICK YOUR DESTINATION</h3>
    <div className="destination-list">
        <div className="destination box">
          <div className="destination--left">
              <img
                src={`../../../images/${selected?.images.webp}`}
                alt={selected?.name}
                className={`destination__${selected?.name.toLowerCase()}`}                   
              />
          </div>
          <div className="destination--right">
              <ul className="destination__ul box ">
                <li className="destination__item " onClick={moon}>
                  <button className="destination__btn ">Moon</button>
                </li>
                <li className="destination__item" onClick={mars}>
                  <button className="destination__btn">Mars</button>
                </li>
                <li className="destination__item" onClick={europa}>
                  <button className="destination__btn">Europa</button>
                </li>
                <li className="destination__item" onClick={titan}>
                  <button className="destination__btn">Titan</button>
                </li>
              </ul>
            <div className="destination--descrip " >
                <h1 className="destination__h1 animate slideInLeft animate--fast">
                  {selected?.name}
                </h1>
                <p className="destination__p animate slideInLeft animate--delay-1s">
                  {selected?.description}
                </p>
                <p className="animate slideInLeft animate--slow">
                  AVG. Distance: <span className="destination__distance">{selected?.distance}</span>
                </p>
                <p className="animate slideInLeft animate--slow">
                  EST. Travel Time: <span className="destination__travel">{selected?.travel}</span>
                </p>               
            </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Destination;