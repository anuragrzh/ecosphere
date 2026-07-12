import { useState } from "react";

import {
  Leaf,
  Factory,
  Target
} from "lucide-react";


const initialData = [
  {
    department:"Manufacturing",
    activity:"Diesel Usage",
    quantity:"1000 L",
    emission:"2600 Kg CO₂"
  },
  {
    department:"Transport",
    activity:"Vehicle Fuel",
    quantity:"500 L",
    emission:"1300 Kg CO₂"
  }
];



export default function Environmental(){


const [transactions,setTransactions] = useState(
  JSON.parse(localStorage.getItem("carbon")) || initialData
);



const addTransaction = ()=>{


const newData = [

...transactions,

{
department:"Office",
activity:"Electricity",
quantity:"900 kWh",
emission:"450 Kg CO₂"
}

];


setTransactions(newData);


localStorage.setItem(
"carbon",
JSON.stringify(newData)
);


};




return (

<div className="space-y-6">



<h1 className="text-3xl font-bold text-gray-800">
Environmental Management
</h1>





{/* Cards */}

<div className="grid md:grid-cols-3 gap-5">


<Card
title="Total Carbon"
value="4300 Kg"
icon={<Leaf/>}
/>



<Card
title="Transactions"
value={transactions.length}
icon={<Factory/>}
/>



<Card
title="Sustainability Goal"
value="70%"
icon={<Target/>}
/>



</div>







{/* Goal */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="font-bold text-lg mb-3">
Carbon Reduction Goal
</h2>



<div className="
w-full
bg-gray-200
rounded-full
h-4
">


<div
className="
bg-green-500
h-4
rounded-full
"
style={{
width:"70%"
}}
>


</div>


</div>



<p className="mt-3 text-gray-600">
70% completed - Target: Reduce carbon by 20%
</p>



</div>








{/* Table */}



<div className="
bg-white
rounded-2xl
shadow
p-6
">


<div className="
flex
justify-between
items-center
mb-5
">


<h2 className="font-bold text-lg">
Carbon Transactions
</h2>



<button

onClick={addTransaction}

className="
bg-green-600
text-white
px-5
py-2
rounded-xl
hover:bg-green-700
"

>

+ Add Transaction

</button>



</div>







<table className="w-full">


<thead>


<tr className="border-b text-gray-500">


<th className="text-left py-3">
Department
</th>


<th className="text-left">
Activity
</th>


<th className="text-left">
Quantity
</th>


<th className="text-left">
Emission
</th>


</tr>


</thead>





<tbody>



{
transactions.map((item,index)=>(


<tr
key={index}
className="border-b"
>



<td className="py-3">
{item.department}
</td>



<td>
{item.activity}
</td>



<td>
{item.quantity}
</td>



<td className="text-green-600 font-bold">
{item.emission}
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


<h2 className="text-3xl font-bold mt-2">
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