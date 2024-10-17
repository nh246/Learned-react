import logo from "../assets/images/logo.png";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo"></img>

      <nav>
        <Link To="/shop" className="pages">Shop</Link>
        <Link To="/review" className="pages">Order Review</Link>
        <Link To="/manage" className="pages">Manage Inventory here</Link>
      </nav>
    </div>
  );
};

export default Header;
