import Start from "pages/Start";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
