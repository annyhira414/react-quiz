import { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handerChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? ( <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handerChange(e, index)}
        />
        ) : (
          <Checkbox
          className={`${classes.answer} ${
            option.correct ? 
            classes.correct 
            : option.checked ?
            classes.wrong :
            null 
          }`}
          text={option.title}
          defaultChecked={option.checked}
          disabled
        />
        )}

        </Fragment>
      ))}
    </div>
  );
}


// 23.13 sec 41 no video oi jai ami kisoi buji nai 