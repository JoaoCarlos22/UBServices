import React from "react";
import {BrowserRouter as Router,
    Route, Routes} from 'react-router-dom'
import { CadVisitas } from "./pages/visitas/CadVisitas";
import { Visitas } from "./pages/visitas/Visitas";
import { Home } from "./pages/Home";
import { Servicos } from "./pages/Servicos";
import { VisitasHome } from "./pages/visitas/VisitasHome";
import { Login } from "./pages/Login";
import { CadastroHome } from "./pages/cadastro/CadastroHome";
import { CadastroPaciente } from "./pages/cadastro/CadAPaciente";
import { CadastroMedico } from "./pages/cadastro/CadAMedica";
import { Vacinas } from "./pages/vacinas/Vacinas";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/selecionar-area" element={<CadastroHome />} />
            <Route path="/cadastrar/paciente" element={<CadastroPaciente />} />
            <Route path="/cadastrar/medico" element={<CadastroMedico />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/visita-domiciliar" element={<VisitasHome />} />
            <Route path="/cadVisita" element={<CadVisitas />} />
            <Route path="/visitas" element={<Visitas />} />
            <Route path="/vacinas" element={<Vacinas />} />
        </Routes>
    );
}

export default AppRoutes;