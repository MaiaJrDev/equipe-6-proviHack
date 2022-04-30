import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PinkAwardPage from "../Pages/AwardPages/PinkAwardPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import Shop from "../Pages/Shop/Shop";
import { InitialPage } from "../Pages/SplashPage/InitialPage";
import RedAwardPage from "../Pages/AwardPages/RedAwardPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<InitialPage />} />
                <Route path="/map" element={<LocationPage/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/award" element={<PinkAwardPage />} />
                <Route path="/noaward" element={<RedAwardPage />} />
                
            </Routes>
        </BrowserRouter>
    )
};

export default Router;
