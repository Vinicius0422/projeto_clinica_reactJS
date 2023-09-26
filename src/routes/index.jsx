import { Routes, Route } from "react-router-dom";

import Private from "./Private";
import SignIn from "../pages/signIn";
import Home from "../pages/home";
import Pacientes from "../pages/pacientes"
import Profissionais from "../pages/profissionais"
import Consultas from "../pages/consultas"
import PacientesCadastro from "../pages/pacientesCadastro";


export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/home" element={<Private><Home/></Private>}/>
            <Route path="/pacientes" element={<Private><Pacientes/></Private>}/>
            <Route path="/pacientes/cadastro" element={<Private><PacientesCadastro/></Private>}/>
            <Route path="/profissionais" element={<Private><Profissionais/></Private>}/>
            <Route path="/consultas" element={<Private><Consultas/></Private>}/>
        </Routes>
    );
}