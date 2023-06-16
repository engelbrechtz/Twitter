import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Explore from "./components/Explore/Explore";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";

import { useState, useEffect } from "react";
import { supabase } from "./supabase";

function App() {
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("session")) || null
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      localStorage.setItem("session", JSON.stringify(session));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      localStorage.setItem("session", JSON.stringify(session));
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/messages" element={<Messages />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/explore" element={<Explore />} />
          </Route>
          <Route
            exact
            path="/"
            element={!session ? <Navigate to={"/login"} /> : <Layout />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<p>Path not found</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
