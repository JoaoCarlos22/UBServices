import React from "react";
import {BrowserRouter as Router,
    Route, Routes} from 'react-router-dom'
import { CadVisitas } from "./pages/visitas/CadVisitas";
import { Visitas } from "./pages/visitas/Visitas";
import { Home } from "./pages/Home";
import { Servicos } from "./pages/Servicos";
import { VisitasHome } from "./pages/visitas/VisitasHome";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/visita-domiciliar" element={<VisitasHome />} />
                <Route path="/cadVisita" element={<CadVisitas />} />
                <Route path="/visitas" element={<Visitas />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;