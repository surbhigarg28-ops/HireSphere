import { useEffect, useState } from "react";
import { getJobs } from "../services/api";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h2>Jobs</h2>

      {jobs.map(j => (
        <div key={j.id}>
          <h3>{j.title}</h3>
          <p>{j.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;