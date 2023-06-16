import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import News from "./News/News";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Feed />
        <News />
      </div>

      <main>{children}</main>
    </>
  );
};

export default Layout;
