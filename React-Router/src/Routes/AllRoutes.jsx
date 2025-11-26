import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { Route, Router, Routes } from "react-router-dom"
// import { SinglePage } from "../Component/Singlepage";
// import { InfoPage } from "../Pages/Infopage";

export const AllRoutes=()=>{

    return(
        <>
        <Routes>
           <Route path="/" element = {<Home />} ></Route>
            <Route path="/about" element = {<About />} ></Route>
            <Route path="/contact" element = {<Contact />} ></Route>
            {/* <Route path="/single_page" element = {<SinglePage />} ></Route> */}
            {/* <Route path="/info_page/:userID" element = {<InfoPage />} ></Route> */}
            <Route path= "*" element ={<NotFoundPage />}></Route>
            
            </Routes>
        </>
    )
}