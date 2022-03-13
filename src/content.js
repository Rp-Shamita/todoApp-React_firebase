import Navbar from "./Navbar"
import { addDoc,  onSnapshot,  orderBy,  query,  serverTimestamp, where } from "firebase/firestore";
import { colRef } from "./firebase";
import { useEffect, useState } from "react";
import Tasks from "./Tasks";


export default function Content(props){
    const [presentTask, setPresentTask] = useState({"user-id": "","task": "", "date": ""});
    const [tasklist, setTaskList] = useState([]);
    const[flag, setFlag] = useState(false);
    const getTasks=()=>{
        const q = query(colRef, where("user-id","==",localStorage.getItem("uid")), orderBy("date", "desc"));
        onSnapshot(q, (snapshot)=>{
            let tasks=[]
            snapshot.docs.forEach(doc => {
                tasks.push({...doc.data(), id: doc.id})
            })
            setTaskList(tasks);
        })
        console.log(tasklist);
    }
    useEffect(() => {
         getTasks();
    },[flag])
    function handleChange(event){
        setPresentTask({
            "user-id": localStorage.getItem("uid"),
            "task": event.target.value,
            "date": serverTimestamp()
        })
    }
    function handleClick(event){
       addDoc(colRef, presentTask).then(()=>{
           setPresentTask(prevState => ({
               ...prevState,
               task: ""
           }))
           setFlag(prevState => !prevState)
       })
    }
    return(
        <div className="content">
            <Navbar image={localStorage.getItem("profile")}/>
            <h1>Hey {localStorage.getItem("name")}</h1>
            <h1>Enter your task here:- </h1>
            <input type="text" placeholder="attend a meeting at 3:30pm" value={presentTask.task} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            <Tasks array={tasklist}/>
        </div>
    )
}