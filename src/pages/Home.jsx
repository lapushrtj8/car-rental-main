import React from 'react';
import './Home.css'; // optional for styling, explained below

const Home = () => {
return (
<div className="home-page">

{/* Hero Section */}
<section className="hero-section">
<div className="hero-content">
<h1>Rent A Car In Kerala</h1>
<p>Find self-drive rental cars at affordable rates. Doorstep delivery and flexible KM packages available.</p>
<button onClick={() => window.location.href = "/cars"}>Browse Cars</button>
</div>
<div className="hero-image">
<img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg" alt="Car Hero" />
</div>
</section>

{/* How to Rent a Car Section */}
<section className="how-to-rent">
<h2>How to Rent a Car</h2>
<div className="steps">
<div className="step">
<img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Login" />
<p>Login to your account</p>
</div>
<div className="step">
<img src="https://cdn-icons-png.flaticon.com/512/741/741407.png" alt="Pick a car" />
<p>Pick a car of your choice</p>
</div>
<div className="step">
<img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Select date" />
<p>Select pickup & return date</p>
</div>
<div className="step">
<img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Confirm" />
<p>Confirm your booking</p>
</div>
</div>
</section>

</div>
);
};

export default Home;