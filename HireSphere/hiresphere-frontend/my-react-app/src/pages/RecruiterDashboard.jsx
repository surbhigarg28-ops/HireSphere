import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function RecruiterDashboard(){

  const user = JSON.parse(localStorage.getItem("user"));

  return(

    <div>
      <Navbar/>

      <div className="main-content recruiter-dashboard">

        <h1>Welcome Recruiter {user?.name}</h1>

        <p>Manage and post new jobs</p>

        <div className="recruiter-actions">

          <Link to="/create-job" className="action-card">
            ➕ Post New Job
          </Link>

          <Link to="/jobs" className="action-card">
            📋 View Jobs
          </Link>

        </div>

      </div>

    </div>
  )
}

export default RecruiterDashboard;