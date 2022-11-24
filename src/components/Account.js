import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";

export default function Account(){
    
    return (
        <div>
            <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/singup">Signup</Link>
        <Link to="/login">login</Link>
        {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
      </div>
        </div>
    )
};