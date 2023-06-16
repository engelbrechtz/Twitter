import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "../supabase";

const PrivateRoutes = ({ children }) => {
  const [session, setSession] = useState(
    localStorage.setItem("session", JSON.stringify(session)) || null
  );

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      localStorage.setItem("session", JSON.stringify(session));
    });
  }, []);

  return <>{session ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoutes;
