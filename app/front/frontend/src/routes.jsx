import React from "react";
import {BrowserRouter as Router,
    Route, Routes} from 'react-router-dom'
import { CadVisitas } from "./pages/CadVisitas";
import { Visitas } from "./pages/Visitas";
import { Home } from "./pages/Home";
import { Servicos } from "./pages/Servicos";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/cadVisita" element={<CadVisitas />} />
                <Route path="/visitas" element={<Visitas />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;