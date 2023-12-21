

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="Images/brand_logo.png" alt="logo" />
            </div>

            <nav className="navbar">
              <ul>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
              </ul>
            </nav>
            <button className="login_btn">Login</button>
        </div>
    );
};

export default Header;