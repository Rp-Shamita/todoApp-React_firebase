import { auth } from "./firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router"

export default function Navbar(props){
    const navigate = useNavigate()
    function handlesignOut(){
        signOut(auth).then(() => {
            localStorage.clear();   
            navigate("/");
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <div className="navbar">
            <h1>ToDo</h1>
            <img src={props.image} alt="User profile" />
            <button onClick={handlesignOut}>SignOut</button>
        </div>
    )
}