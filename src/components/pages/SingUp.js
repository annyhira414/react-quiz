import classes from "../../styles/Singup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";


export default function Singup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.singup} `}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput type="password" placeholder="Confirm name" icon="lock_cloc" />
         <Checkbox text="I agree to the Terms and  Conditions"/>
         <Button><samp>Submit now</samp></Button>
         
         <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
        </Form>
      </div>

      {/* ai khan thke r form jabe na  */}
    </>
  );
}
