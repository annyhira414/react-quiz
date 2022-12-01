import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

export default function Analysis ({answers}){
    return(
        <>
        
        <div class={classes.analysis}>
          <h1>Question Analysis</h1>
        </div >
        
        <Questions answers={answers}/>
        
        </>
    )
}