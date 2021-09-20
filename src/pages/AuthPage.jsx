import React from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import GoogleLoginBtn from "../components/Google/GoogleLoginBtn";
import GoogleLogoutBtn from "../components/Google/GoogleLogoutBtn";

const AuthPage = ({ setUser }) => {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
            <GoogleLoginBtn />
        </main>
    );
};

export default AuthPage;
