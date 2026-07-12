import { useState } from "react";

import {
  Trophy,
  Award,
  Gift,
  Target
} from "lucide-react";



const initialChallenges = [
  {
    title:"30 Days No Plastic",
    category:"Environment",
    xp:300,
    completed:false
  },
  {
    title:"Plant 10 Trees",
    category:"CSR",
    xp:500,
    completed:false
  },
  {
    title:"Complete Safety Training",
    category:"Governance",
    xp:200,
    completed:false
  }
];



export default function Gamification(){



const [xp,setXp] = useState(
 Number(localStorage.getItem("xp")) || 0
);



const [challenges,setChallenges] = useState(
 initialChallenges
);



const completeChallenge = (index)=>{


if(challenges[index].completed)
return;



const updated = [...challenges];


updated[index].completed = true;


setChallenges(updated);



const newXp = xp + updated[index].xp;


setXp(newXp);


localStorage.setItem(
"xp",
newXp
);



};





return (

<div className="space-y-6">


<h1 className="text-3xl font-bold text-gray-800">
Gamification Center 🎮
</h1>





{/* Cards */}

<div className="grid md:grid-cols-4 gap-5">


<Card
title="Total XP"
value={xp}
icon={<Trophy/>}
/>



<Card
title="Badges"
value={xp>=500 ? "3" : "1"}
icon={<Award/>}
/>



<Card
title="Rewards"
value="8"
icon={<Gift/>}
/>



<Card
title="Challenges"
value={challenges.length}
icon={<Target/>}
/>



</div>








{/* Challenges */}



<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="text-xl font-bold mb-5">
Challenges
</h2>





<div className="grid md:grid-cols-3 gap-5">



{
challenges.map((item,index)=>(



<div

key={index}

className="
border
rounded-xl
p-5
"

>



<h3 className="font-bold text-lg">
{item.title}
</h3>



<p className="text-gray-500 mt-2">
{item.category}
</p>



<p className="
text-green-600
font-bold
mt-3
">

+{item.xp} XP

</p>





<button

disabled={item.completed}

onClick={()=>completeChallenge(index)}

className={`

mt-4
px-4
py-2
rounded-xl
text-white

${
item.completed
?
"bg-gray-400"
:
"bg-green-600 hover:bg-green-700"
}

`}

>


{
item.completed
?
"Completed ✓"
:
"Complete Challenge"
}



</button>



</div>



))

}



</div>


</div>








{/* Badge Section */}


<div className="
bg-white
rounded-2xl
shadow
p-6
">


<h2 className="text-xl font-bold mb-4">
Unlocked Badges 🏆
</h2>




<div className="flex gap-5 flex-wrap">


{
xp>=500 &&

<div className="
bg-green-100
p-5
rounded-xl
">

🌱 Eco Warrior

</div>

}



{
xp>=1000 &&

<div className="
bg-yellow-100
p-5
rounded-xl
">

🏆 Green Champion

</div>

}




{
xp<500 &&

<p className="text-gray-500">
Complete challenges to unlock badges
</p>

}



</div>


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
bg-yellow-100
text-yellow-600
p-3
rounded-xl
">

{icon}

</div>



</div>

)

}