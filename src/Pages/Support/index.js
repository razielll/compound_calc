import { Link } from "react-router-dom";

import NavLinks from '../../components/NavLinks';

function Support() {
    return (
        <div className="App tLeftAligned">
            <h1>Support</h1>
            <p>Your Simple Compound Calc doesn't work? Contact me at the support email</p>
            <p>You have a suggestion ? Check out <Link to="/feature">Feature Suggestion.</Link></p>
            <p>For other matters, write an email to asto1387@gmail.com.</p>
            <NavLinks />
        </div>
    );
};

export default Support;




