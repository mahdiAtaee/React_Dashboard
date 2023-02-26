import Bell from "../assets/img/bell.png";
import Menu from "../assets/img/hamburger.png";
import Avatar from "../assets/img/man.png";
import DownArrow from "../assets/img/down-arrow.png";
import UsersTable from "./users/UsersTable";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard_header">
        <div className="h-menu c-pointer">
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
      <div className="main">
        <UsersTable />
      </div>
    </div>
  );
};

export default Dashboard;
