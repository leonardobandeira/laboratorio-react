import { Routes, Route } from "react-router-dom";

import { Inicial } from "./pages/Inicial";
import { SobreNos } from "./pages/SobreNos";
import { LayoutPadrao } from "./Layouts/LayoutPadrao/LayoutPadrao";
import { NotFound } from "./pages/NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Router };
