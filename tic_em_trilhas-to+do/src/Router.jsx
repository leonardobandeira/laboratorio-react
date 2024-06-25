import { Routes, Route } from "react-router-dom";

import { Inicial } from "./pages/Inicial";
import { SobreNos } from "./pages/SobreNos";

const Router = () => {
  return (
  <Routes>
    <Route path="/" element={<Inicial />} />
    <Route path="/sobre-nos" element={<SobreNos />} />
  </Routes>
  )
};

export { Router };
