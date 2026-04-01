import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

function LandingPage(){

const user = JSON.parse(localStorage.getItem("user"));

return(

<div>

<Navbar/>

<section className="hero">
   <video autoPlay loop muted className="hero-video">
<source src="/video/job.mp4" type="video/mp4"/>
</video> 

<h1>Find Your Dream Job</h1>

<p>Discover thousands of opportunities with top companies</p>

</section>

{/* show signup only if not logged in */}

{!user && (

<section className="signup-section">

<SignupForm/>

</section>

)}

<section className="features">

<div className="feature-card">
<h3>Top Companies</h3>
<p>Work with leading companies</p>
</div>

<div className="feature-card">
<h3>High Salary</h3>
<p>Get high paying jobs</p>
</div>

<div className="feature-card">
<h3>Remote Work</h3>
<p>Work from anywhere</p>
</div>

<div className="feature-card">
<h3>Career Growth</h3>
<p>Build your career</p>
</div>

</section>

<Footer/>

</div>

)

}

export default LandingPage;