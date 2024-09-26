import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo"></img>

      <nav>
        <a href="/shop" className="pages">Shop</a>
        <a href="/review" className="pages">Order Review</a>
        <a href="/manage" className="pages">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Header;
