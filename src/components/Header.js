import logo from '../../utils/logo.png';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="logoContainer">
                    <img src={logo} alt="freshForkslogo"/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact Us</li>
                        <li>Profile</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;