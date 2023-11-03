import React from "react";
import "../Css/home.css"
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div className="home box">
            <div className="home--left">
                <h3 className="home__h3">SO, YOU WANT TO TRAVEL TO</h3> 
                <h1 className="home__h1">SPACE</h1>  
                <p className="home__p"> Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because well give you a truly out of this world experience!</p>
            </div>  
            <div className="home--right">
                <NavLink to="/destination" className="home__h4"><h4>Explore</h4></NavLink>
            </div>
        </div>
    )
}
export default Home;