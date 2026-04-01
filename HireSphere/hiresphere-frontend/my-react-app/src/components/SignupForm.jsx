import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api"; // ✅ NEW

function SignupForm(){

const navigate = useNavigate();

const [user,setUser] = useState({
name:"",
email:"",
password:"",
role:"CANDIDATE"
});

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{
e.preventDefault();

try {

  // ✅ backend ke liye user object
  const newUser = {
    ...user,
    id: Date.now().toString()
  };

  await createUser(newUser);

  alert("Signup Successful!");

  navigate("/login");

} catch (error) {
  console.log(error);
  alert("Error signing up");
}

}

const handleGoogleSignup = ()=>{
alert("Google Signup coming soon");
}

return(

<div className="signup-card">

<h3 className="signup-title">Create Account</h3>
<p className="signup-subtitle">Join us and start your career journey</p>

<form onSubmit={handleSubmit}>

<div className="input-group">
<span className="input-icon">👤</span>
<input
type="text"
name="name"
placeholder="Full Name"
value={user.name}
onChange={handleChange}
required
/>
</div>

<div className="input-group">
<span className="input-icon">📧</span>
<input
type="email"
name="email"
placeholder="Email Address"
value={user.email}
onChange={handleChange}
required
/>
</div>

<div className="input-group">
<span className="input-icon">🔒</span>
<input
type="password"
name="password"
placeholder="Password"
value={user.password}
onChange={handleChange}
required
/>
</div>

<div className="input-group">

<select
name="role"
value={user.role}
onChange={handleChange}
>

<option value="CANDIDATE">Candidate</option>
<option value="RECRUITER">Recruiter</option>

</select>

</div>

<button type="submit" className="signup-btn">
Sign Up
</button>

</form>

<div className="divider">
<span>OR</span>
</div>

<button className="google-btn" onClick={handleGoogleSignup}>
<img 
src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
alt="google"
/>
Signup with Google
</button>

</div>

)

}

export default SignupForm;