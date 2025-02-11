import { ThemeProvider } from "@mui/material/styles";
import TuffxTheme from "./components/TuffxTheme";
import "./App.css";

import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";
import Chart from "./components/Chart";
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Challenges from "./components/Challenges/Challenges";
import HelpDesk from "./components/HelpDesk";
import Payment from "./components/Payment";
import WithDrawal from "./components/WithDrawal";
import AffiliateProgram from "./components/AffiliateProgram";

import Login from "./pages/authentication/Login";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import RegistrationDetails from "./components/RegistrationDetails";

import "./App.css";
import ContestProgram from "./components/ContestProgram";
import Certifications from "./components/Certifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmailVerification from "./components/EmailVerification";

import PrivateRoute from "./components/PrivateRoute"; // Import du composant PrivateRoute
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";

const queryClient = new QueryClient(); // Crée une instance de QueryClient

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={TuffxTheme}>
          <Router>
            <Routes>
              {/* Routes publiques */}
              <Route path="/forgot-password" element={<Forget />} />
              <Route path="/login" element={
                  <RedirectIfAuthenticated>
                    <Login />
                  </RedirectIfAuthenticated>
              } />
              <Route path="/sign-up" element={
                <RedirectIfAuthenticated>
                  <Register />
                </RedirectIfAuthenticated>
              } />
              <Route
                path="/registration-details/:id"
                element={<RegistrationDetails />}
              />
              <Route
                path="/email-verification"
                element={<EmailVerification />}
              />

              {/* Routes protégées */}
              <Route
                path="/*"
                element={
                  <PrivateRoute>
                    <Sidebar>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<Add />} />
                        <Route path="/edit" element={<Edit />} />
                        <Route path="/view" element={<View />} />
                        <Route path="/chart" element={<Chart />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/challenges" element={<Challenges />} />
                        <Route path="/help" element={<HelpDesk />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/withdrawals" element={<WithDrawal />} />
                        <Route path="/portal" element={<AffiliateProgram />} />
                        <Route
                          path="/certification"
                          element={<Certifications />}
                        />
                        <Route
                          path="/contest-programs"
                          element={<ContestProgram />}
                        />
                      </Routes>
                    </Sidebar>
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
