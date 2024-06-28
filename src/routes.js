import Favoritos from "pages/favoritos";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import NotFound from "pages/Player/NotFound";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>

        </BrowserRouter >
    )
}

export default AppRoutes