import { useState } from "react";
// import images
import Bell from "../assets/img/bell.png";
import Menu from "../assets/img/hamburger.png";
import Avatar from "../assets/img/man.png";
import DownArrow from "../assets/img/down-arrow.png";
// import components
import UsersTable from "./users/UsersTable";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [sidebarIsActive, setSidebarIsActive] = useState(true);
 
  const handleClick = () => {
    setSidebarIsActive(!sidebarIsActive);
  };
  return (
    <div className={!sidebarIsActive ? "dashboard spread" : "dashboard"}>
      <header className="dashboard_header">
        <div className="h-menu c-pointer" onClick={handleClick}>
          <img src={Menu} alt="menu" className="sm-img" />
        </div>
        <div className="user_Info_section">
          <div className="bell f-center c-pointer">
            <img src={Bell} alt="Bell" className="avatar sm-img" />
          </div>
          <div className="profile c-pointer">
            <img src={Avatar} alt="user avatar" className="sm-img" />
            <span className="user_name">مهدی عطایی</span>
            <span className="down_arrow">
              <img src={DownArrow} alt="arrow" />
            </span>
          </div>
        </div>
      </header>
      <Sidebar active={sidebarIsActive} />
      <div className="main">
        <UsersTable />
      </div>
    </div>
  );
};

export default Dashboard;
