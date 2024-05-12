import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WelcomeLayout from "./pages/WelcomeLayout/WelcomeLayout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

import FoundReport from "./pages/FoundReport/FoundReport";
import LostReport from "./pages/LostReport/LostReport";
import Logs from "./pages/Logs/Logs";
import MyAccount from "./pages/MyAccount/MyAccount";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Protect from "./Protect";
import HomePage from "./HomePage";
//import { Navigate } from "react-router-dom";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    // <TransitionGroup>
    // {<CSSTransition key={location.key} timeout={300} classNames="fade"> */}
    <Routes location={location}>
      <Route
        index
        path="/"
        element={
          // <Protect/>
          <WelcomeLayout />
          // </Protect>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        // element={
        //   userType === "admin" ? (
        //     <AdminDashboard />
        //   ) : (
        //     <Home isLoggedIn={isLoggedIn} />
        //   )
        // }
        element={
          <Protect>
            <HomePage />
          </Protect>
        }
      >
        <Route path="logs" element={<Navigate to="logs?page=1" replace />} />
        <Route path="logs/*" element={<Logs />} />
        <Route path="logs/item/:id" element={<ItemDetail />} />
        <Route path="foundreport" element={<FoundReport />} />
        <Route path="lostreport" element={<LostReport />} />
        <Route path="account" element={<MyAccount />} />
      </Route>
    </Routes>
    // {/* </CSSTransition> */}
    // {/* </TransitionGroup> */}
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
