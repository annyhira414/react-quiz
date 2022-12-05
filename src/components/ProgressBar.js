import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";


export default function ProgressBar( {next , prev , progress, submit}) {
  return (
    <>
      <div className={classes.progressBar}  onClick={prev}>
        <div className={classes.backButton} >
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip} >{progress}% Cimplete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
         <Button className={classes.next} 
          onClick={ progress === 100 ? submit : next} 
          >
            <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </Button> 
           
     
      </div>
    </>
  );
}
