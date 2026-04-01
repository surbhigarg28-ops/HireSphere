import { useState } from "react";
import Navbar from "../components/Navbar";
import { createJob } from "../services/api";

function CreateJob() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [job, setJob] = useState({
    title: "",
    description: "",
    recruiterId: user?.id || "",
    salary: "",
    requiredSkills: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {

      const finalJob = {
        ...job,
        id: Date.now().toString(),
        salary: Number(job.salary),
        requiredSkills: job.requiredSkills.split(",").map(s => s.trim())
      };

      await createJob(finalJob);

      alert("Job Created Successfully 🎉");

    } catch (error) {
      console.log(error);
      alert("Error creating job");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="main-content create-job-container">

        <h2>Create Job</h2>

        <div className="create-job-form">

          <input name="title" placeholder="Title" onChange={handleChange} />

          <input name="description" placeholder="Description" onChange={handleChange} />

          <input name="salary" placeholder="Salary" onChange={handleChange} />

          <input name="requiredSkills" placeholder="Skills (comma separated)" onChange={handleChange} />

          <button className="post-btn" onClick={handleSubmit}>
            Create Job
          </button>

        </div>

      </div>
    </div>
  );
}

export default CreateJob;