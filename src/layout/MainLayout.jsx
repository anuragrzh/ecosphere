import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({children}){

return (

<div className="flex bg-gray-50 min-h-screen">

<Sidebar/>

<div className="flex-1">

<Navbar/>

<main className="p-6">
{children}
</main>

</div>

</div>

)

}