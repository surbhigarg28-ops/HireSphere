import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getJobs, getApplications } from "../services/api";

function Dashboard() {

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getJobs().then(setJobs);
    getApplications().then(setApplications);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main-content dashboard">

        <h1 className="welcome-text">
          Welcome {user?.name} 👋
        </h1>

        <p className="moving-text">Track your job journey</p>

        <h3>Total Jobs: {jobs.length}</h3>
        <h3>Total Applications: {applications.length}</h3>

      </div>
    </div>
  );
}

export default Dashboard;