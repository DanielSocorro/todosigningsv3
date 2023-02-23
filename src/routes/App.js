import React from "react";
import { LoginButton } from "./aut/LoginPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditTodoPage } from "./edit/EditTodoPage";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { LogoutButton } from "./aut/LogoutPage";


function App() {
  return (
    <HashRouter>
     <LoginButton />
     <LogoutButton />
    
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
