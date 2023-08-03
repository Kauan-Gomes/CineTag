
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Favoritos from "pages/Favoritos";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Start />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}
