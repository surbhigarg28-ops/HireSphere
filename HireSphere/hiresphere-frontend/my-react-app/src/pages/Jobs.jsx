import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getJobs, applyJob } from "../services/api";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [appliedIds, setAppliedIds] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getJobs().then(setJobs);

    const allApplied = JSON.parse(localStorage.getItem("appliedJobs")) || {};
    const userApplied = allApplied[user?.email] || [];

    setAppliedIds(userApplied);

  }, [user?.email]);

  const handleApply = async (job) => {

    try {
      const res = await applyJob(job.id, user.id);

      const allApplied = JSON.parse(localStorage.getItem("appliedJobs")) || {};
      const userApplied = allApplied[user.email] || [];

      if (!userApplied.includes(job.id)) {
        userApplied.push(job.id);
        allApplied[user.email] = userApplied;
        localStorage.setItem("appliedJobs", JSON.stringify(allApplied));
        setAppliedIds([...userApplied]);
      }

      alert(`Applied 🎉 Match: ${res.matchPercentage}%`);

    } catch {
      alert("Error applying job");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="main-content container">

        <h2 className="jobs-title">🚀 Available Jobs</h2>

        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">

              <h3>{job.title}</h3>
              <p>{job.description}</p>

              <p className="salary">₹{job.salary}</p>

              <div className="skills">
                {job.requiredSkills?.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>

              <button
                className="apply-btn"
                onClick={() => handleApply(job)}
                disabled={appliedIds.includes(job.id)}
              >
                {appliedIds.includes(job.id) ? "Applied ✔" : "Apply"}
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Jobs;