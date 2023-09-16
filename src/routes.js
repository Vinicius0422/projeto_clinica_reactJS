import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/signIn";
import Home from "./pages/home";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
}