import { Route,Routes } from "react-router-dom";
import Home from "../home";
import Pizza from "../pizza";
import Cart from "../cart";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pizza/:id" element={<Pizza/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}