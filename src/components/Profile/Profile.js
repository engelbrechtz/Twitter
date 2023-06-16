import "./profile.css";
import { supabase } from "../../supabase";
import { useState, useRef, useEffect } from "react";

const Profile = () => {
  // const [session, setSession] = useState(null);

  // const session = supabase.auth.session();

  // if (error) throw error;

  return (
    <>
      <div className="profile">
        <div className="profile_content">
          <div className="profile_banner">test</div>
          <div className="users_profile">
            <button>Edit profile</button>
          </div>
          <h2>Declan</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
