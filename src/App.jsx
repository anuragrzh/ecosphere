import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Environmental from "./pages/Enviromental";
import Social from "./pages/Social";
import Governance from "./pages/Gamification";
import Gamification from "./pages/Gamification";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import Login from "./pages/Login";


function App(){

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>
          <Route 
path="/login" 
element={<Login/>}
/>

          <Route 
            path="/" 
            element={<Dashboard/>}
          />

          <Route 
            path="/environmental" 
           element={<Environmental/>}
          />

          <Route 
            path="/social" 
            element={<Social/>}
          />

          <Route 
            path="/governance" 
            element={<Governance/>}
          />

          <Route 
            path="/gamification" 
            element={<Gamification/>}
          />

          <Route 
            path="/reports" 
            element={<Reports/>}
          />

          <Route 
            path="/settings" 
            element={<Settings/>}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  )

}


export default App;