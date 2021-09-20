import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = `${process.env.GOOGLE_CLIENT_ID}`;

function GoogleLoginBtn() {
    const onSuccess = res => {
        console.log("[Login Success] currentUser:", res);
    };
    const onFailure = res => {
        console.log("[Login Failed] currentUser:", res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
            />
        </div>
    );
}

export default GoogleLoginBtn
