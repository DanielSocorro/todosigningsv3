import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./aut/LoginPage";
import { LogoutButton } from "./aut/LogoutPage";
import { Profile } from "./aut/ProfilePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditTodoPage } from "./edit/EditTodoPage";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import './App.css';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <HashRouter>
     {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
    </Routes>
   
   </HashRouter>
  );
}

export { App };
