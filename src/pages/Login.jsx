import { useState } from "react";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Login(){


const navigate = useNavigate();

const [email,setEmail] = useState("");



const login = ()=>{

localStorage.setItem(
"loggedIn",
"true"
);


navigate("/");

};



return (

<div className="
min-h-screen
bg-green-900
flex
items-center
justify-center
">


<div className="
bg-white
w-full
max-w-md
rounded-3xl
shadow-2xl
p-8
">


<div className="
flex
justify-center
mb-5
">

<div className="
bg-green-100
text-green-600
p-4
rounded-full
">

<Leaf size={40}/>

</div>


</div>




<h1 className="
text-3xl
font-bold
text-center
text-gray-800
">

EcoSphere

</h1>


<p className="
text-center
text-gray-500
mt-2
">

ESG Management Platform

</p>




<input

type="email"

placeholder="Enter email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
border
rounded-xl
px-4
py-3
mt-6
outline-none
focus:ring-2
focus:ring-green-500
"

/>




<input

type="password"

placeholder="Password"

className="
w-full
border
rounded-xl
px-4
py-3
mt-4
outline-none
focus:ring-2
focus:ring-green-500
"

/>




<button

onClick={login}

className="
w-full
bg-green-600
text-white
py-3
rounded-xl
mt-6
hover:bg-green-700
font-semibold
"

>

Login

</button>



</div>


</div>


)

}