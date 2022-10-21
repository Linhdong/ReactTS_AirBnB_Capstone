import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { createBrowserHistory } from "history";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import RoomList from "./pages/RoomList/RoomList";
import Room from "./pages/Room/Room";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="roomlist">
            <Route path=":locationId" element={<RoomList />}></Route>
          </Route>
          {/* <Route path="roomdetail">
            <Route path=":roomId" element={<RoomDetail />}></Route>
          </Route> */}
        </Route>
        <Route>
          <Route path="roomdetail">
            <Route path=":roomId" element={<Room />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="" />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
