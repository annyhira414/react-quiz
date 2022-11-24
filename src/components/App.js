import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Singup from "./pages/Singup";
import {AuthProvidert} from "../contexts/AuthContext"
function App() {
  return (

    <Router>
      <AuthProvidert>
      <Layout>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/singup" element={<Singup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
    </Layout>
    </AuthProvidert>
    </Router>
  );
}

export default App;
