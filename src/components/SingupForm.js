import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import {Link,  useNavigate} from 'react-router-dom';
import { useState } from "react";
import {useAuth} from "../contexts/AuthContext"

export default function SingupForm() {
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree , setAgree] = useState("");
    const [error, setError] = useState();
    const [loading , setLoading]= useState();
    const {singup} = useAuth();

   
    const navigate =  useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword){
            return setError("password don't match");
             
        }

        try {
            setError("");
            setLoading(true);
            await singup(email, password,userName);
            navigate("/");
        } catch (error) {
            console.log(error);
           
            setLoading(false);
            setError("fail to create account");
        }
    }
  return (
    <>
      <Form style={{height:'500px'}} onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="Enter name" icon="person"
        required
        value={userName} 
        onChange={(e)=> {setUserName(e.target.value)}}/>

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <TextInput type="password" placeholder="Enter password" icon="lock" 
        required
         value ={password}
         onChange={(e)=>{
           setPassword(e.target.value)
         }}
        
        />

        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_cloc"
          required
          value ={confirmPassword}
          onChange={(e)=>{
            setConfirmPassword(e.target.value)
          }}
        />
        <Checkbox text="I agree to the Terms and  Conditions" 
        required
        value={agree}
        onChange={(e)=>{setAgree(e.target.value)}}
        />
        <Button disabled={loading} type= "submit">
          <samp>Submit now</samp>
        </Button>

          {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
}
