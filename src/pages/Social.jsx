import {
  Users,
  HeartHandshake,
  Award
} from "lucide-react";


const activities = [
  {
    title:"Tree Plantation",
    category:"Environment",
    employees:45,
    points:100
  },
  {
    title:"Blood Donation Camp",
    category:"Health",
    employees:25,
    points:150
  },
  {
    title:"Teaching Program",
    category:"Education",
    employees:30,
    points:120
  }
];


const participation = [
  {
    name:"Rahul",
    activity:"Tree Plantation",
    status:"Approved",
    points:100
  },
  {
    name:"Aman",
    activity:"Blood Donation",
    status:"Pending",
    points:150
  },
  {
    name:"Neha",
    activity:"Teaching Program",
    status:"Approved",
    points:120
  }
];



export default function Social(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold text-gray-800">
Social Responsibility
</h1>




{/* Cards */}

<div className="grid md:grid-cols-3 gap-5">


<Card
title="CSR Activities"
value="18"
icon={<HeartHandshake/>}
/>


<Card
title="Employees Joined"
value="245"
icon={<Users/>}
/>


<Card
title="Total Points"
value="5400 XP"
icon={<Award/>}
/>



</div>






{/* CSR Activities */}


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
CSR Activities
</h2>


<button className="
bg-green-600
text-white
px-5
py-2
rounded-xl
">

+ Add Activity

</button>


</div>



<div className="
grid
md:grid-cols-3
gap-5
">


{
activities.map((item,index)=>(


<div
key={index}
className="
border
rounded-xl
p-5
hover:shadow-md
transition
">


<h3 className="font-bold text-lg">
{item.title}
</h3>


<p className="text-gray-500 mt-2">
Category: {item.category}
</p>


<p className="mt-3">
👥 {item.employees} Employees
</p>


<p className="
text-green-600
font-bold
mt-2
">
+{item.points} XP
</p>


</div>


))
}



</div>



</div>







{/* Participation Table */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="text-xl font-bold mb-5">
Employee Participation
</h2>




<table className="w-full">


<thead>

<tr className="border-b text-gray-500">

<th className="text-left py-3">
Employee
</th>


<th className="text-left">
Activity
</th>


<th className="text-left">
Status
</th>


<th className="text-left">
Points
</th>


</tr>


</thead>




<tbody>


{
participation.map((item,index)=>(

<tr
key={index}
className="border-b"
>


<td className="py-3">
{item.name}
</td>


<td>
{item.activity}
</td>


<td>

<span
className={`
px-3
py-1
rounded-full
text-sm

${
item.status==="Approved"
?
"bg-green-100 text-green-700"
:
"bg-yellow-100 text-yellow-700"
}

`}
>

{item.status}

</span>


</td>


<td className="font-bold text-green-600">
{item.points}
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
bg-green-100
text-green-600
p-3
rounded-xl
">

{icon}

</div>


</div>

)

}