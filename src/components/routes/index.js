import { Contact } from "pages/contact";
import { Journey } from "pages/journey";
import { SingleProduct } from "pages/product";
import { Store } from "pages/store";
import { Team } from "pages/team/team";
import { Routes, Route } from "react-router-dom";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
    )
}