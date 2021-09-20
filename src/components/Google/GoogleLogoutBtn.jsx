import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = `${process.env.GOOGLE_CLIENT_ID}`;

function GoogleLogoutBtn() {
    const onSuccess = () => {
        alert("Logout Successful!");
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default GoogleLogoutBtn;
