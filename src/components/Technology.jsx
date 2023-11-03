import React from "react";
import "../Css/technology.css"
import Json from "../data.json"

const Technology = () => {
    const [name,setName] = React.useState ("Launch vehicle")

    const launchVehicle = () => {
        setName("Launch vehicle")
    }
    const spacePort = () => {
        setName("Spaceport")
    }
    const spaceCapsule = () => {
        setName("Space capsule")
    }

    const [data,setData] = React.useState([]);

    React.useEffect( () => {
        setData(Json.technology)
    },[])

    const selected = data.find((item) => item.name === name)

    return(
        <div className="technology ">
            <div className="box">
                <h3 className="technology__h3"><span className="gray">03</span> SPACE LAUNCH 101</h3>
            </div>
            <div className="technology__main row">
                <div className="technology__left row">
                    <ul className="technology__ul">
                        <li className="technology__item" onClick={launchVehicle}>
                            <span className="technology__number">1</span></li>
                        <li className="technology__item" onClick={spacePort}>
                            <span className="technology__number">2</span></li>
                        <li className="technology__item" onClick={spaceCapsule}>
                            <span className="technology__number">3</span></li>
                    </ul>
                    <div className="technology__text">
                        <h3 className="technology__technology">THE TERMINOLOGY</h3>
                        <h1 className="technology__name">{selected?.name}</h1>
                        <p className="technology__description">{selected?.description}</p>
                    </div>
                </div>
                <div className="technology__right">
                    <img src={`../../../images/${selected?.images.portrait}`} alt="launch" className="technology__image"/>
                </div>
            </div>
        </div>
    )
}
export default Technology;