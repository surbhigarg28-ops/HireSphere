import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getApplications, getJobs } from "../services/api";

function AppliedJobs() {

  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    getApplications().then(data => {
      const userApps = data.filter(app => app.candidateId === user.id);
      setApplications(userApps);
    });

    getJobs().then(setJobs);

  }, [user.id]);

  return (
    <div>
      <Navbar />

      <div className="main-content container">

        <h2>📌 Applied Jobs</h2>

        <div className="jobs-grid">
          {applications.map(app => {

            const job = jobs.find(j => j.id === app.jobId);

            return (
              <div key={app.id} className="job-card">

                <h3>{job?.title}</h3>

                <p className="salary">₹{job?.salary}</p>

                <p><b>Match:</b> {app.matchPercentage}%</p>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default AppliedJobs;