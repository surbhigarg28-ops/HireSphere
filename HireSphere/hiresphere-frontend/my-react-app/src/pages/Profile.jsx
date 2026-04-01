import { useState } from "react";
import Navbar from "../components/Navbar";
import { createProfile } from "../services/api";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    education: "",
    experience: "",
    skills: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {

    try {

      const finalProfile = {
        id: Date.now().toString(),
        userId: user.id,
        education: profile.education,
        experience: Number(profile.experience),
        skills: profile.skills.split(",").map(s => s.trim())
      };

      await createProfile(finalProfile);

      alert("Profile Saved Successfully 🎉");

    } catch (error) {
      console.log(error);
      alert("Error saving profile");
    }

  };

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-container">

        <h2>Create Profile</h2>

        <input 
          name="education" 
          placeholder="Education" 
          onChange={handleChange} 
        />

        <input 
          name="experience" 
          placeholder="Experience (years)" 
          onChange={handleChange} 
        />

        <input 
          name="skills" 
          placeholder="Skills (comma separated)" 
          onChange={handleChange} 
        />

        <button className="save-btn" onClick={handleSave}>
          Save Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;