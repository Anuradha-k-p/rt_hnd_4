import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreCompo from "./Store";



function RouteCompo(){
    return(
        <>
        <BrowserRouter>
        <div className="main">
        <NavLink to="/" className="child">HOME</NavLink>
        <NavLink to="/student" className="child">STUDENT</NavLink>
        <NavLink to="/contact" className="child">CONTACT</NavLink>
        </div>

        <StoreCompo>

        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/student" element={ <Student/>}/>
            <Route path="/contact" element={ <Contact/> }/>
        </Routes>
        
        </StoreCompo>
        
        </BrowserRouter>
        </>
    )
}
export default RouteCompo;