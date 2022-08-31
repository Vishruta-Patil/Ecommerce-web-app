import { Contact } from "pages/contact";
import { Store } from "pages/store";
import { Routes, Route } from "react-router-dom";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}