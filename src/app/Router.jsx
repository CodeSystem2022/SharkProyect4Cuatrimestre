import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import CheckoutPage from '../components/CheckoutPage';
const Router = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/checkout-page" element={<CheckoutPage/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default Router