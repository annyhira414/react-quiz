import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser , logout} = useAuth();
  return (
    <div>
      {currentUser ? (
        <>
          <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span className="material-icons-outlined" title="Logout" onClick={logout}>
              {" "}
              logout{" "}
            </span>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Link to="/singup">Signup </Link>
          <Link to="/login"> login</Link>
        </>
      )}
    </div>
  );
}
