import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function UserLogin(){
    let[data,setData]=useState({});
    let email=useRef();
    let pass=useRef();
    let move=useNavigate();
    let a=useParams();
    console.log(a);
    useEffect(()=>{
let x=fetch(`https://jsonplaceholder.typicode.com/users/${a.id}`);
let y=x.then((p)=>{
return p.json();

})
y.then((q)=>{
console.log(q);
setData(q);

});
    },[a.id]);
    console.log(data);
    function f1(e){
        e.preventDefault();
        let a=email.current.value;
        let b=pass.current.value;
        console.log(a,b);
        if(a===""|| b ===""){
            window.alert("please enter all the credentiles");
        }
        else if(a=== data.email && b=== data.username){
            move(`/Main/UserDetails/${data.id}`);
        }
        else{
            window.alert("wrong credentiles");
        }
        
    }

    
    
    return(
        <>
        <center>
        <h1 style={{color:"red"}}>Welcome to {data.name}</h1>
        <form action="" onSubmit={f1}>
            <input type="text" placeholder="enter email" ref={email}/>
            <br/>
            <br/>
            <input type="text" placeholder="enter password" ref={pass}/>
            <button>Login</button>
            <br/>
            <br/>


        </form>
        </center>
        </>
    )
}
export default UserLogin;
