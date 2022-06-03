import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate  } from "react-router";
import { useState } from "react";

export default function SignIn(props){  
    const [pending, setPending] = useState(false)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    function handleSignIn(){
        signInWithPopup(auth, provider).then((res) => {
            localStorage.setItem("name", res.user.displayName);
            localStorage.setItem("profile", res.user.photoURL);
            localStorage.setItem("uid", res.user.uid);
            if(res.user){
                navigate('/todo');
            }
        })
        .catch((error) => {
            console.log(error)
            setPending(false)
        })
    }
    return(
        <div className="google-button">
            <button type="button" className="login-with-google-btn" onClick={handleSignIn} disabled={pending}> Sign in with Google</button>
        </div>
    )
}
