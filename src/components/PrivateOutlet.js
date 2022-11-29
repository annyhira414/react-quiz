import { Outlet, Navigate  } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function PrivateOutlet() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet/>: <Navigate to='/login' />;
}


// 9 line pethe vtore componet ta k diye dibo . quiz app thke je props gula asbe ai gula ai bane pass korte hoy (jodi ai jaiya nai , but tao ai vabei kore hobe )
// 38 number video t onk importent pore ber dekbo .
// jodi amr kono link e more secure korte hoy tahoel ai vabe
// korte hobe , child hisabe ami jokhon compont dibo tokhon ami asoly render props pattern flow korbo


