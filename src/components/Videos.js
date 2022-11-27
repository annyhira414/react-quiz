import classes from "../styles/Videos.module.css";
import { Link } from "react-router-dom";

import Video from "./Video";

export default function Videos(){
    return(
        <div>
            <div className={classes.videos}>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link>
                <Link to="/quiz"><Video /></Link> 
            </div>
        </div>
    );
}