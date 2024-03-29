import Login from "./pages/Login";
import Coupon from "./pages/Coupon";
import { Spin } from "./pages/Spin";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import Trlogin from "./pages/Trlogin";
import TreasureHunt from "./pages/TreasureHunt";
import LaunchEvent from "./pages/LaunchEvent";
import CouponScan from "./pages/CouponScan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" exact index element={<Login />} />

          <Route
            path="/coupon"
            exact
            element={
              <PrivateRoutes>
                <Coupon />
              </PrivateRoutes>
            }
          />
          <Route
            path="/couponscan"
            exact
            element={
              <PrivateRoutes>
                <CouponScan />
              </PrivateRoutes>
            }
          />

          <Route
            path="/spin"
            exact
            element={
              <PrivateRoutes>
                {" "}
                <Spin />{" "}
              </PrivateRoutes>
            }
          />
          <Route
            path="/trlogin"
            exact
            element={
              <PrivateRoutes>
                {" "}
                <Trlogin />{" "}
              </PrivateRoutes>
            }
          />
          <Route
            path="/treasurehunt"
            exact
            element={
              <PrivateRoutes>
                {" "}
                <TreasureHunt />{" "}
              </PrivateRoutes>
            }
          />
          <Route
            path="/home"
            exact
            element={
              <PrivateRoutes>
                {" "}
                <Home />{" "}
              </PrivateRoutes>
            }
          />
          <Route
            path="/launchevent"
            exact
            element={
              <PrivateRoutes>
                {" "}
                <LaunchEvent />{" "}
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
