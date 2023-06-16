import { useState, useRef } from "react";
import { supabase } from "../../supabase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TwitterLogo from "../../images/logo.png";

import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error.status === 400) {
        alert("user already exists");
      } else {
        alert("signup successful");
        navigate("/login");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="auth">
        <div className="auth_content">
          <img src={TwitterLogo} alt="twitter icon" />
          <h1>signup</h1>
          <div className="input_boxes">
            <form onSubmit={handleSignup}>
              <input
                type="email"
                placeholder="Enter email "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">signup</button>

              <h2>or</h2>
              <p>
                have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
