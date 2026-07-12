import {
Bell,
User
} from "lucide-react";


export default function Navbar(){


return (

<div className="
h-16
bg-white
shadow
flex
justify-between
items-center
px-6
">


<h2 className="font-bold text-xl">
ESG Management Platform
</h2>



<div className="
flex
items-center
gap-5
">


<Bell
className="text-gray-600"
/>


<div className="
flex
items-center
gap-2
bg-green-100
px-4
py-2
rounded-xl
">


<User size={18}/>

Admin


</div>



</div>


</div>

)

}