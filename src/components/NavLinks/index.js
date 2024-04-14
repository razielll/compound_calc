import { Link } from "react-router-dom";

function NavLinks() {

    return (
        <div className="nav-links">
            <ul>
                <Link to="/">
                    <li>Simple Compound Calc</li>
                </Link>
                <Link to="/policy" style={{ marginLeft: '42px', marginRight: '42px'}}>
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/terms">
                    <li>Terms of Service</li>
                </Link>
                <Link to="/feature">
                    <li>Suggest feature</li>
                </Link>
                <Link to="/support">
                    <li>Help & Support</li>
                </Link>
            </ul>
        </div>
    );
};

export default NavLinks;