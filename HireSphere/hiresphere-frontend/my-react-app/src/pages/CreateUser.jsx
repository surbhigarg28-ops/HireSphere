import { useState } from "react";
import Navbar from "../components/Navbar";
import { createUser } from "../services/api";

function CreateUser() {

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await createUser(user);
    alert("User Created");
  };

  return (
    <div>
      <Navbar />

      <h2>Create User</h2>

      <input name="id" placeholder="ID" onChange={handleChange} />
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />

      <button onClick={handleSubmit}>Create</button>

    </div>
  );
}

export default CreateUser;