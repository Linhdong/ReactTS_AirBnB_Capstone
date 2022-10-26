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

const Home = React.lazy(() => import("./pages/Home/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const RoomList = React.lazy(() => import("./pages/RoomList/RoomList"));
const Room = React.lazy(() => import("./pages/Room/Room"));

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
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
          <Route path="roomlist">
            <Route
              path=":locationId"
              element={
                <React.Suspense fallback={<Loading />}>
                  <RoomList />
                </React.Suspense>
              }
            ></Route>
          </Route>
          {/* <Route path="roomdetail">
            <Route path=":roomId" element={<RoomDetail />}></Route>
          </Route> */}
        </Route>
        <Route>
          <Route path="roomdetail">
            <Route
              path=":roomId"
              element={
                <React.Suspense fallback={<Loading />}>
                  <Room />
                </React.Suspense>
              }
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="" />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
