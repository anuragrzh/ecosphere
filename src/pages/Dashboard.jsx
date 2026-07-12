import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import {
  Leaf,
  Users,
  ShieldAlert,
  Trophy
} from "lucide-react";


const scoreData = [
  {
    name: "Environment",
    value: 40
  },
  {
    name: "Social",
    value: 30
  },
  {
    name: "Governance",
    value: 30
  }
];


const carbonData = [
  {
    month: "Jan",
    emission: 400
  },
  {
    month: "Feb",
    emission: 300
  },
  {
    month: "Mar",
    emission: 500
  },
  {
    month: "Apr",
    emission: 250
  },
  {
    month: "May",
    emission: 350
  }
];


const leaders = [
  {
    name: "Rahul",
    xp: 1200
  },
  {
    name: "Aman",
    xp: 950
  },
  {
    name: "Neha",
    xp: 700
  }
];


const activities = [
  "🌱 Tree Plantation completed",
  "📜 Policy accepted",
  "🏆 Badge unlocked",
  "♻ Carbon report generated"
];



export default function Dashboard() {

  return (

    <div className="space-y-6">


      <h1 className="text-3xl font-bold text-gray-800">
        🌍 ESG Performance Dashboard
      </h1>


      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


        <Card
          title="ESG Score"
          value="82%"
          icon={<Leaf size={25}/>}
        />


        <Card
          title="Carbon Emission"
          value="2600 Kg"
          icon={<Leaf size={25}/>}
        />


        <Card
          title="CSR Activities"
          value="18"
          icon={<Users size={25}/>}
        />


        <Card
          title="Compliance Issues"
          value="5"
          icon={<ShieldAlert size={25}/>}
        />


      </div>



      {/* Charts */}

      <div className="grid md:grid-cols-2 gap-6">


        <div className="bg-white rounded-2xl shadow p-5">

          <h2 className="font-bold text-lg mb-4">
            ESG Distribution
          </h2>


          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={scoreData}
                dataKey="value"
                outerRadius={100}
              >

                {
                  scoreData.map((item,index)=>(

                    <Cell
                      key={index}
                      fill={
                        [
                          "#22c55e",
                          "#2563eb",
                          "#facc15"
                        ][index]
                      }
                    />

                  ))
                }

              </Pie>

            </PieChart>

          </ResponsiveContainer>


        </div>




        <div className="bg-white rounded-2xl shadow p-5">

          <h2 className="font-bold text-lg mb-4">
            Carbon Emission Trend
          </h2>


          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={carbonData}>


              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>


              <Bar
                dataKey="emission"
                fill="#16a34a"
              />


            </BarChart>

          </ResponsiveContainer>


        </div>


      </div>




      {/* Bottom Section */}


      <div className="grid md:grid-cols-2 gap-6">


        {/* Leaderboard */}

        <div className="bg-white rounded-2xl shadow p-5">


          <h2 className="font-bold text-lg mb-4 flex gap-2 items-center">

            <Trophy size={22}/>

            Leaderboard

          </h2>



          {
            leaders.map((user,index)=>(

              <div
                key={index}
                className="
                flex
                justify-between
                border-b
                py-3
                "
              >

                <span>
                  {index+1}. {user.name}
                </span>


                <span className="text-green-600 font-bold">

                  {user.xp} XP

                </span>


              </div>


            ))
          }



        </div>





        {/* Activity */}

        <div className="bg-white rounded-2xl shadow p-5">


          <h2 className="font-bold text-lg mb-4">
            Recent Activity
          </h2>



          {
            activities.map((item,index)=>(

              <p
                key={index}
                className="
                py-3
                border-b
                text-gray-600
                "
              >

                {item}

              </p>

            ))
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
hover:scale-105
transition
duration-300
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