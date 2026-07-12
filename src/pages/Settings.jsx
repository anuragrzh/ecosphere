import {
  Settings as SettingIcon,
  Bell,
  Leaf,
  Award,
  FileCheck
} from "lucide-react";


const settings=[
  {
    title:"Auto Emission Calculation",
    desc:"Automatically calculate carbon from operations",
    icon:<Leaf/>
  },
  {
    title:"Evidence Requirement",
    desc:"Proof required for CSR approval",
    icon:<FileCheck/>
  },
  {
    title:"Badge Auto Award",
    desc:"Automatically unlock employee badges",
    icon:<Award/>
  },
  {
    title:"Notifications",
    desc:"Receive alerts and reminders",
    icon:<Bell/>
  }
];


export default function Settings(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold text-gray-800 flex gap-3">

<SettingIcon/>

Settings

</h1>



<div className="grid md:grid-cols-2 gap-6">


{
settings.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
shadow
p-6
flex
justify-between
items-center
"
>


<div className="flex gap-4 items-center">


<div className="
bg-green-100
text-green-600
p-3
rounded-xl
">

{item.icon}

</div>



<div>

<h2 className="font-bold">
{item.title}
</h2>

<p className="text-gray-500 text-sm">
{item.desc}
</p>


</div>


</div>




<label className="relative inline-flex cursor-pointer">


<input
type="checkbox"
defaultChecked
className="sr-only peer"
/>


<div className="
w-12
h-6
bg-gray-300
rounded-full
peer
peer-checked:bg-green-600
after:content-['']
after:absolute
after:top-[2px]
after:left-[2px]
after:bg-white
after:h-5
after:w-5
after:rounded-full
after:transition
peer-checked:after:translate-x-6
">
</div>


</label>



</div>


))
}



</div>



</div>

)

}