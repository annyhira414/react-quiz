import { Route,Navigate, Outlet  } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet/> : <Navigate to={'/login'}/>
//   return currentUser ? (
//     <Route {...rest}>{(props) => <Element {...props} />}</Route>
//   ) : 
//   (
//       <Route
  
//         Element={<Navigate to="/login" replace />} //this is a way to redirect
//       />
//     );
}


//App.js e 29, 30 line sumit korse &  PrivateRouter e 9-17 line sumit korse 
// App.js e 24,26  & PrivateRouter e 8 no line debashis korse 


// aigula 24-37 line dekher doker nai tomar 

// 9 line pethe vtore componet ta k diye dibo . quiz app thke je props gula asbe ai gula ai bane pass korte hoy (jodi ai jaiya nai , but tao ai vabei kore hobe )
// 38 number video t onk importent pore ber dekbo .
// jodi amr kono link e more secure korte hoy tahoel ai vabe
// korte hobe , child hisabe ami jokhon compont dibo tokhon ami asoly render props pattern flow korbo


// 