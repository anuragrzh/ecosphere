import {
  FileText,
  Download,
  Filter
} from "lucide-react";


const reports = [
  {
    title:"Environmental Report",
    desc:"Carbon emission and sustainability analysis",
    type:"PDF"
  },
  {
    title:"Social Report",
    desc:"CSR activities and employee participation",
    type:"Excel"
  },
  {
    title:"Governance Report",
    desc:"Policies, audits and compliance report",
    type:"CSV"
  },
  {
    title:"ESG Summary Report",
    desc:"Complete organization ESG score",
    type:"PDF"
  }
];


export default function Reports(){


return (

<div className="space-y-6">


<h1 className="text-3xl font-bold text-gray-800">
Reports & Analytics
</h1>



{/* Filters */}

<div className="
bg-white
rounded-2xl
shadow
p-5
flex
flex-wrap
gap-4
items-center
">


<div className="flex gap-2 items-center font-semibold">
<Filter size={20}/>
Filters
</div>


<select className="border rounded-lg px-4 py-2">
<option>Department</option>
<option>HR</option>
<option>IT</option>
<option>Manufacturing</option>
</select>


<select className="border rounded-lg px-4 py-2">
<option>Date Range</option>
<option>This Month</option>
<option>This Year</option>
</select>


<select className="border rounded-lg px-4 py-2">
<option>Module</option>
<option>Environment</option>
<option>Social</option>
<option>Governance</option>
</select>


</div>





{/* Reports */}


<div className="grid md:grid-cols-2 gap-6">


{
reports.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
shadow
p-6
hover:shadow-lg
transition
"
>


<div className="
flex
justify-between
items-center
">


<div className="
bg-green-100
text-green-600
p-3
rounded-xl
">

<FileText/>

</div>


<button
className="
flex
items-center
gap-2
bg-green-600
text-white
px-4
py-2
rounded-xl
"
>

<Download size={18}/>

Download

</button>


</div>




<h2 className="text-xl font-bold mt-5">
{item.title}
</h2>


<p className="text-gray-500 mt-2">
{item.desc}
</p>


<span className="
inline-block
mt-4
bg-blue-100
text-blue-600
px-3
py-1
rounded-full
">

{item.type}

</span>


</div>


))
}



</div>


</div>

)

}