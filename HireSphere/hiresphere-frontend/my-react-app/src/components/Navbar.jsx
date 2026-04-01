import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

const handleLogout = () =>{
localStorage.removeItem("user");
navigate("/login");
}

return(

<div className="navbar">

<h2 className="logo">HireSphere</h2>

<div className="nav-links">

{!user && (

<Link to="/login" className="login-btn">
Login
</Link>

)}

{user && (

<>

<Link to="/jobs">Apply Jobs</Link>

<Link to="/applied-jobs">Applied Jobs</Link>

<Link to="/profile">Profile</Link>

<span className="profile-name">
👤 {user?.name}
</span>

<button className="logout-btn" onClick={handleLogout}>
Logout
</button>

</>

)}

</div>

</div>

)

}

export default Navbar;