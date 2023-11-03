import React from "react";
//import { createBrowserRouter,createRoutesFromElements,
//Route,RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Technology from "./components/Technology";



const SpaceTourism = () => {
    const images = ["background-home-desktop.jpg","background-destination-desktop.jpg","background-crew-desktop.jpg","background-technology-desktop.jpg"]
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} style={{ backgroundImage: `url(../../images/${images[0]})`}} />
                    <Route path="/destination" element={<Destination />} style={{ backgroundImage: `url(../../images/${images[1]})`}} />
                    <Route path="/crew" element={<Crew/>} style={{ backgroundImage: `url(../../images/${images[2]})`}} />
                    <Route path="/technology" element={<Technology />} style={{ backgroundImage: `url(../../images/${images[3]})`}} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default SpaceTourism;

// const router = createBrowserRouter(createRoutesFromElements(

//     <Route element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/destination" element={<Destination />} />
//         <Route path="/crew" element={<Crew/>} />
//         <Route path="/technology" element={<Technology />} />
//     </Route>
// ))
// const SpaceTourism = () => {
//     return (
//         <RouterProvider router={router}/>
//     )
// }
// export default SpaceTourism;