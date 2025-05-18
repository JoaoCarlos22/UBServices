import React from "react";
import {BrowserRouter as Router,
    Route, Routes} from 'react-router-dom'
import { Home } from "./pages/Home";
import { Visitas } from "./pages/Visitas";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cadVisita" element={<Home />} />
                <Route path="/visitas" element={<Visitas />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;