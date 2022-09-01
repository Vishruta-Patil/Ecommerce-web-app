import websitelogo from "assets/websitelogo.png";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const navData = [
    { pathname: "/", navTitle: "HOME" },
    { pathname: "/journey", navTitle: "THE JOURNEY" },
    { pathname: "/team", navTitle: "TEAM" },
    { pathname: "/", navTitle: "STORE" },
    { pathname: "/contact", navTitle: "CONTACT" },
  ];

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <section className="header-container">
      <div className="logo-content">
        <Link to="/">
          <img src={websitelogo} alt="logo" className="logo" />
        </Link>
      </div>

      <div className="nav-content">
        {navData.map((item, index) => (
          <NavLink
            to={item.pathname}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav-item font-xs"
            key={index}
          >
            {item?.navTitle}
          </NavLink>
        ))}
      </div>

      <div className="profile-content flex-center">
        <span className="material-icons font-md">person</span>
        <p className="font-xs">GAGAN</p>
      </div>
    </section>
  );
};
