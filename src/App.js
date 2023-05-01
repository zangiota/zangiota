import React from "react";
import { Routes, Route } from "react-router-dom";

import UzPage from "./components/UzPage";
import EnPage from "./components/EnPage";
import RuPage from "./components/RuPage";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UzPage />} />
            <Route path="/en" element={<EnPage />} />
            <Route path="/ru" element={<RuPage />} />
        </Routes>
    )
}

export default App;