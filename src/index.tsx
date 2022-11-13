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
import Loading from "./components/Loading/Loading";
import AdminTemplate from "./templates/AdminTemplate";
import UserManagement from "./pages/Admin/User/UserManagement";
import LocationManagement from "./pages/Admin/LocationManagement/LocationManagement";
import RoomManagement from "./pages/Admin/Room/RoomManagement";
import BookingManagement from "./pages/Admin/BookingManagement/BookingManagement";
import UpdateInforUser from "./pages/Profile/UpdateInforUser";

const Home = React.lazy(() => import("./pages/Home/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const RoomList = React.lazy(() => import("./pages/RoomList/RoomList"));
const RoomTemplate = React.lazy(() => import("./templates/RoomTemplate"));

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        {/* home template */}
        <Route path="" element={<HomeTemplate />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="signin"
            element={
              <React.Suspense fallback={<Loading />}>
                <SignIn />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <React.Suspense fallback={<Loading />}>
                <SignUp />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <React.Suspense fallback={<Loading />}>
                <Profile />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="roomlist"
            element={
              <React.Suspense fallback={<Loading />}>
                <RoomList />
              </React.Suspense>
            }
          >
            {/* <Route
              path=":locationId"
              element={
                <React.Suspense fallback={<Loading />}>
                  <RoomList />
                </React.Suspense>
              }
            ></Route> */}
          </Route>
        </Route>
        {/* home template */}

        {/* room template */}
        <Route path="roomdetail">
          <Route
            path=":roomId"
            element={
              <React.Suspense fallback={<Loading />}>
                <RoomTemplate />
              </React.Suspense>
            }
          ></Route>
        </Route>
        {/* room template */}

        {/* admin template */}
        <Route>
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="users" element={<UserManagement />}></Route>
            <Route path="locations" element={<LocationManagement />}></Route>
            <Route path="rooms" element={<RoomManagement />}></Route>
            <Route path="bookings" element={<BookingManagement />}></Route>
          </Route>
        </Route>
        {/* admin template */}

        <Route path="*" element={<Navigate to="" />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
