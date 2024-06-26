import Favoritos from "pages/favoritos";
import Cabecera from "components/Cabecera/Cabecera";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes () {
    return (
        <BrowserRouter>
            <Cabecera/>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes