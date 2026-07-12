import {
  ShieldCheck,
  FileCheck,
  AlertTriangle
} from "lucide-react";


const policies = [
  {
    name:"Data Privacy Policy",
    accepted:"90%"
  },
  {
    name:"Employee Safety Policy",
    accepted:"85%"
  },
  {
    name:"Environmental Policy",
    accepted:"95%"
  }
];


const issues = [
  {
    issue:"Fire Exit Blocked",
    owner:"Facility Manager",
    due:"20 July",
    status:"Open"
  },
  {
    issue:"Safety Training Pending",
    owner:"HR Manager",
    due:"25 July",
    status:"Pending"
  },
  {
    issue:"Waste Management Issue",
    owner:"Operations",
    due:"15 July",
    status:"Overdue"
  }
];



export default function Governance(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold text-gray-800">
Governance Management
</h1>




{/* Top Cards */}

<div className="grid md:grid-cols-3 gap-5">


<Card
title="Policies"
value="12"
icon={<FileCheck/>}
/>


<Card
title="Audits Completed"
value="8"
icon={<ShieldCheck/>}
/>


<Card
title="Compliance Issues"
value="5"
icon={<AlertTriangle/>}
/>


</div>







{/* Policies */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="text-xl font-bold mb-5">
ESG Policies
</h2>



<div className="
grid
md:grid-cols-3
gap-5
">


{
policies.map((item,index)=>(


<div
key={index}
className="
border
rounded-xl
p-5
"
>


<h3 className="font-bold">
{item.name}
</h3>


<div className="
mt-4
w-full
bg-gray-200
h-3
rounded-full
">


<div
className="
bg-green-500
h-3
rounded-full
"
style={{
width:item.accepted
}}
>

</div>


</div>


<p className="mt-2 text-green-600 font-semibold">
{item.accepted} Accepted
</p>


</div>


))
}



</div>


</div>







{/* Compliance Table */}



<div className="
bg-white
rounded-2xl
shadow
p-6
">


<div className="
flex
justify-between
mb-5
">


<h2 className="text-xl font-bold">
Compliance Issues
</h2>


<button
className="
bg-red-500
text-white
px-5
py-2
rounded-xl
"
>

+ Raise Issue

</button>


</div>





<table className="w-full">


<thead>

<tr className="border-b text-gray-500">

<th className="text-left py-3">
Issue
</th>

<th className="text-left">
Owner
</th>

<th className="text-left">
Due Date
</th>

<th className="text-left">
Status
</th>

</tr>

</thead>




<tbody>


{
issues.map((item,index)=>(


<tr
key={index}
className="border-b"
>


<td className="py-3">
{item.issue}
</td>


<td>
{item.owner}
</td>


<td>
{item.due}
</td>


<td>


<span
className={`
px-3
py-1
rounded-full
text-sm

${
item.status==="Open"
?
"bg-red-100 text-red-600"
:
item.status==="Overdue"
?
"bg-orange-100 text-orange-600"
:
"bg-yellow-100 text-yellow-600"
}

`}
>

{item.status}

</span>


</td>


</tr>


))
}



</tbody>


</table>



</div>



</div>


)

}




function Card({title,value,icon}){


return (

<div className="
bg-white
rounded-2xl
shadow
p-5
flex
justify-between
items-center
">


<div>

<p className="text-gray-500">
{title}
</p>


<h2 className="text-3xl font-bold">
{value}
</h2>


</div>


<div className="
bg-blue-100
text-blue-600
p-3
rounded-xl
">

{icon}

</div>


</div>

)

}