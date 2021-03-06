import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from 'react/cjs/react.development';
import {firebaseConfig} from './firebase.config';
import { UserContext } from '../../App';

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            setLoggedInUser(user);
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage);
        });
    }
    return (
        <div>
            {
                user.email && <h1>You are logged In as {user.displayName}</h1>
            }
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;