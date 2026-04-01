import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../services/api";

function Login(){

const navigate = useNavigate();

const [loginData,setLoginData] = useState({
email:"",
password:""
});

const handleChange = (e)=>{
setLoginData({
...loginData,
[e.target.name]: e.target.value
});
};

const handleSubmit=async(e)=>{
e.preventDefault();

try {

  // ✅ backend users fetch
  const users = await getUsers();

  const foundUser = users.find(
    (u)=>u.email === loginData.email && u.password === loginData.password
  );

  if(!foundUser){
    alert("Invalid email or password");
    return;
  }

  // ✅ store logged in user
  localStorage.setItem("user", JSON.stringify(foundUser));

  alert("Login Successful!");

  if(foundUser.role === "RECRUITER"){
    navigate("/recruiter-dashboard");
  }else{
    navigate("/dashboard");
  }

} catch (error) {
  console.log(error);
  alert("Server error");
}

};

return(

<div className="login-page">

<div className="login-card">

<h2 className="login-title">Welcome Back</h2>
<p className="login-subtitle">Login to continue your journey</p>

<form onSubmit={handleSubmit}>

<div className="input-group">
<span className="input-icon">📧</span>
<input
type="email"
name="email"
placeholder="Email Address"
value={loginData.email}
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
value={loginData.password}
onChange={handleChange}
required
/>
</div>

<button type="submit" className="login-btn">
Login
</button>

</form>

<div className="divider">
<span>OR</span>
</div>

<button className="google-btn">
<img 
src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
alt="google"
/>
Login with Google
</button>

<p className="signup-link">
Don't have an account? <Link to="/">Sign up</Link>
</p>

</div>

</div>

)

}

export default Login;