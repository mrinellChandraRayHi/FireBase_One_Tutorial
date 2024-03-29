import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser]=useState(null);
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="border-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Google login</button>
            {/* <h1>User: {user?.displayName}</h1> */}
            {/* conditional RenDering */}
            {user && <h1>User : {user?.displayName}</h1>}

        </div>
    );
};

export default Login;