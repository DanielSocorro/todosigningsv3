import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfilePage.css";

export const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        isAuthenticated && (
            <div 
            className="container">
            <img
            className="logoman"
            src="https://i.ibb.co/qLSjFdv/mu-logo.png"
            alt="logomu"
             />
            <img 
            typeof="png"
            className="userPicture"
             src={user.picture} alt={user.name} />
            <h2
            className="greeting"
            >Welcome <p>{user.name}</p></h2>
            </div>
        )
    );
}