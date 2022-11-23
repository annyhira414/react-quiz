import classes from "../styles/TextInput.module.css";

export default function TextInput({icon , ...rest}){
 return(
    <>
     <div className={classes.textInput}>
              {/* <input type="text" placeholder="Enter name" /> */}
              <input {...rest}/>
              <span className="material-icons-outlined"> {icon} </span>
            </div>
    </>
 );
}


// 32 video 18 min thke dekho . 