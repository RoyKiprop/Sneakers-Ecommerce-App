import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ShopPage from "./ShopPage";

function AppNav(){
    return (
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path='contactUs' element={<ContactPage/>} />
            <Route path='shop' element={<ShopPage/>}/>
        </Routes>
    )

}

export default AppNav