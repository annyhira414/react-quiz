import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Singup from "./pages/Singup";
import { AuthProvidert } from "../contexts/AuthContext";
import PrivateOutlet from "./PrivateOutlet";
//import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvidert>
        <Layout>
          <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvidert>
    </Router>
  );
}

export default App;
