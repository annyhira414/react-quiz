import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handerChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox className={classes.answer} text={option.title} value={index} checked =
        {option.checked} onChange={(e)=>handerChange(e, index)} />
      ))}
    </div>
  );
}
