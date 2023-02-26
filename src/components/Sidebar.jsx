import Logo from "../assets/img/logo.png";
import Users from "../assets/img/group.png";
import AboutUs from "../assets/img/info.png";
import Companies from "../assets/img/office-building.png";
import Orders from "../assets/img/clipboard.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo f-center-start">
        <img src={Logo} alt="logo" className="sm-img" />
        <span> Dashboard</span>
      </div>
      <ul>
        <li className="active">
          <a href="/" className="f-center-start">
            <img src={Users} alt="$" className="logo sm-img" />
            <span className="title">Users</span>
          </a>
        </li>
        <li>
          <a href="/" className="f-center-start">
            <img src={Orders} alt="" className="logo sm-img" />
            <span className="title">Orders</span>
          </a>
        </li>
        <li>
          <a href="/" className="f-center-start">
            <img src={Companies} alt="" className="logo sm-img" />
            <span className="title">companies</span>
          </a>
        </li>
        <li>
          <a href="/" className="f-center-start">
            <img src={AboutUs} alt="" className="logo sm-img" />
            <span className="title">About Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
