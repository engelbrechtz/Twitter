import TwitterLogo from "../../images/logo.png";
import "./sidebar.css";
import {
  FaHashtag,
  FaHome,
  FaList,
  FaRegBell,
  FaUserCircle,
  FaRegEnvelope,
  FaRegBookmark,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { supabase } from "../../supabase";

const Sidebar = () => {
  // const session = supabase.auth.session();

  const sidebarList = [
    { id: 1, icon: <FaHome />, name: "Home" },
    { id: 2, icon: <FaHashtag />, name: "Explore" },
    { id: 3, icon: <FaRegBell />, name: "Notifications" },
    { id: 4, icon: <FaRegEnvelope />, name: "Messages" },
    { id: 5, icon: <FaRegBookmark />, name: "Bookmarks" },
    { id: 6, icon: <FaList />, name: "Lists" },
    { id: 7, icon: <FaUserCircle />, name: "Profile" },
    { id: 8, icon: <FiMoreHorizontal />, name: "More" },
  ];

  async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  }

  return (
    <>
      <main className="sidebar">
        <div className="sidebar_content">
          <img src={TwitterLogo} draggable={false} />
          <ul className="sidebar_items">
            {sidebarList.map((item) => (
              <a href={`${item.name.toLocaleLowerCase()}`}>
                <li key={item.id}>
                  {item.icon}
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
          <button className="tweet_button">Tweet</button>
          <button className="logout_btn" onClick={logoutUser}>
            logout
          </button>
        </div>
      </main>
    </>
  );
};

export default Sidebar;
