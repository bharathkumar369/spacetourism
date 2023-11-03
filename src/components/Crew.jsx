import React from "react";
import "../Css/crew.css"
import Json from "../data.json"


const Crew = () => {

    const [data,setData] = React.useState([]);

    const [name,setName] = React.useState("Douglas Hurley");

    const douglas = () => {
        setName("Douglas Hurley")
    }
    const mark = () => {
        setName("Victor Glover")
    }
    const victor = () => {
        setName("Mark Shuttleworth")
    }
    const anousheh = () => {
        setName("Anousheh Ansari")
    }

    React.useEffect( () => {
        setData(Json.crew)
    },[])

    const selected = data.find((item) => item.name === name)

    return(    
        <div className="box">
            <h3 className="crew__h3">
                <span className="gray">02</span> MEET YOUR CREW
            </h3>
            <div className="crew" >
                <div className="crew--left">
                    <div className="crew--text ">
                        <h4 className="crew__h4">{selected?.role}</h4>
                        <h1 className="crew__h1">{selected?.name}</h1>
                        <p className="crew__p">{selected?.bio}</p>
                        <div className="crew--ul">
                            <div className="crew--ul-container">
                                <ul className="crew__ul">
                                    <li className="crew__li " onClick={douglas}></li>
                                    <li className="crew__li" onClick={mark}></li>
                                    <li className="crew__li" onClick={victor}></li>
                                    <li className="crew__li" onClick={anousheh}></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crew--right">
                    <img src={`../../../images/${selected?.images.webp}`} alt="traveller" className="crew__traveller"/>
                </div>
            </div>
            
        </div>
    )
}
export default Crew;


// const Crew = () => {

//     const [data,setData] = React.useState([])

//     React.useEffect(()=>{
//         setData(Json.crew)
//     },[])
//     console.log(data)
//     return(
//         <div>
//             <div className="crew box">
//                 <div className="crew--left">
//                     <h4 className="crew__h4">{data.role}</h4>
//                     <h1 className="crew__h1">{data[0].name}</h1>
//                     <p className="crew__p">{data[0].bio}</p>
//                 </div>
//                 <div className="crew--right">
//                     <img src={`../../../images/${data[0].images.png}`} alt="traveller" className="crew__traveller"/>
//                 </div>
//             </div>

//             <div className="crew box">
//                 <div className="crew--left">
//                     <h4 className="crew__h4">{data[1].role}</h4>
//                     <h1 className="crew__h1">{data[1].name}</h1>
//                     <p className="crew__p">{data[1].bio}</p>
//                 </div>
//                 <div className="crew--right">
//                     <img src={`../../../images/${data[1].images.png}`} alt="traveller" className="crew__traveller"/>
//                 </div>
//             </div>

//             <div className="crew box">
//                 <div className="crew--left">
//                     <h4 className="crew__h4">{data[2].role}</h4>
//                     <h1 className="crew__h1">{data[2].name}</h1>
//                     <p className="crew__p">{data[2].bio}</p>
//                 </div>
//                 <div className="crew--right">
//                     <img src={`../../../images/${data[2].images.png}`} alt="traveller" className="crew__traveller"/>
//                 </div>
//             </div>

//             <div className="crew box">
//                 <div className="crew--left">
//                     <h4 className="crew__h4">{data[3].role}</h4>
//                     <h1 className="crew__h1">{data[3].name}</h1>
//                     <p className="crew__p">{data[3].bio}</p>
//                 </div>
//                 <div className="crew--right">
//                     <img src={`../../../images/${data[3].images.png}`} alt="traveller" className="crew__traveller"/>
//                 </div>
//             </div>
//         </div>  
//     )
// }
// export default Crew;


