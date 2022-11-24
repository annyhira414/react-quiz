import classes from "../styles/Button.module.css";
export default function Button({ className, children , ...rest }) {
  return (
    <>
      <div className={`${classes.button} ${classes.next}`} {...rest}>
        
        {children}</div>
    </>
  );
}

// import classes from "../styles/Button.module.css";

// export default function Button({ className, children, ...rest }) {
//   return (
//     <button className={`${classes.button} ${className}`} {...rest}>
//       {children}
//     </button>
//   );
// }