import {BrowserRouter,Routes,Route} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Jobs from "./pages/Jobs";
import Users from "./pages/Users";
import CreateJob from "./pages/CreateJob";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import './App.css';

// ✅ NEW Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Login />;
};

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<LandingPage/>} />

<Route path="/login" element={<Login />} />

{/* ✅ PROTECTED ROUTES (FIXED) */}
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

<Route path="/jobs" element={
  <ProtectedRoute>
    <Jobs />
  </ProtectedRoute>
} />

<Route path="/applied-jobs" element={
  <ProtectedRoute>
    <AppliedJobs />
  </ProtectedRoute>
} />

<Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />

<Route path="/create-job" element={
  <ProtectedRoute>
    <CreateJob />
  </ProtectedRoute>
} />

<Route path="/recruiter-dashboard" element={
  <ProtectedRoute>
    <RecruiterDashboard />
  </ProtectedRoute>
} />

{/* optional */}
<Route path="/users" element={<Users/>} />
<Route path="/create-user" element={<CreateUser/>} />

</Routes>

</BrowserRouter>

);

}

export default App;