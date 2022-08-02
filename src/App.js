import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Topbar from "../src/components/topbar/Topbar"
import SignIn from "../src/pages/signin/SignIn";
import SignUp from "../src/pages/signup/SignUp";
import Home from "../src/pages/home/Home";
import LoginBar from "./pages/loginPages/login-topbar/LoginBar";
import LoginHome from "./pages/loginPages/loginHome/LoginHome";
import NewArticle from "./pages/newArticle/NewArticle";
import Settings from "./pages/settings/Settings";
import User from "./pages/user/User";
// import MyArticles from "./pages/loginPages/user/Articles/MyArticles";

function App() {
  return (
    <Router>
        <Topbar />
        <LoginBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/loginhome" element={<LoginHome />} />
        <Route path="/newartical" element={<NewArticle />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user" element={<User />} />
        <Route path="/MyArticles" element={<User />} />
        <Route path="/Favorited-Articles" element={<User />} />
      </Routes>

    </Router>
  );
}

export default App;
