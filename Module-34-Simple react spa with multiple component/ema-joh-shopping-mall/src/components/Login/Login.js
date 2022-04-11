import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react/cjs/react.development';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const [user, setUser] = useState({});
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, credential);
        });
    }
    return (
        <div>
            {
                user.email && <h1>You are logged In : {user.displayName}</h1>
            }
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;