import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
// import ReportLogs from "./pages/ReportLogs/ReportLogs";
import ClaimLogs from "./pages/ClaimLogs/ClaimLogs";
// import UserLogs from "./pages/UserLogs/UserLogs";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
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
                        element={
                            <Protect>
                                <HomePage />
                            </Protect>
                        }
                    >
                        <Route path="logs" element={<Navigate to="logs?page=1" replace />} />
                        <Route path="logs/*" element={<Logs />} />
                        {/*<Route path="logs/item/:id" element={<ItemDetail />} />*/}
                        <Route path="foundreport" element={<FoundReport />} />
                        <Route path="lostreport" element={<LostReport />} />
                        <Route path="account" element={<MyAccount />} />
                        {/*<Route path="report-logs" element={<ReportLogs />} />*/}
                        <Route path="claim-logs" element={<ClaimLogs />} />
                        {/*<Route path="user-logs" element={<UserLogs />} />*/}
                    </Route>
                </Routes>
            </motion.div>
        </AnimatePresence>
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