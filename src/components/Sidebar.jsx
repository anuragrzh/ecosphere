import {
  LayoutDashboard,
  Leaf,
  Users,
  ShieldCheck,
  Trophy,
  FileText,
  Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";


const menu = [

{
name:"Dashboard",
path:"/",
icon:<LayoutDashboard/>
},

{
name:"Environmental",
path:"/environmental",
icon:<Leaf/>
},

{
name:"Social",
path:"/social",
icon:<Users/>
},

{
name:"Governance",
path:"/governance",
icon:<ShieldCheck/>
},

{
name:"Gamification",
path:"/gamification",
icon:<Trophy/>
},

{
name:"Reports",
path:"/reports",
icon:<FileText/>
},

{
name:"Settings",
path:"/settings",
icon:<Settings/>
}

];



export default function Sidebar(){


return (

<div className="
w-64
bg-green-900
text-white
min-h-screen
p-5
">


<h1 className="
text-2xl
font-bold
mb-8
">

🌍 EcoSphere

</h1>



<div className="space-y-3">


{
menu.map((item,index)=>(


<NavLink

key={index}

to={item.path}

className={({isActive})=>

`
flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive
?
"bg-green-600"
:
"hover:bg-green-800"
}

`

}

>


{item.icon}

<span>
{item.name}
</span>


</NavLink>


))
}


</div>



</div>

)

}