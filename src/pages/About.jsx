import React from 'react';
import './About.css';

const About = () => {
return (
<div className="about-container">

<section className="about-hero">
<div className="about-hero-text">
<h1>Drive Your Journey with Confidence</h1>
<p>We make renting a car easy, accessible, and affordable — for everyone, everywhere.</p>
</div>
<img
src="img_3536.JPG"
alt="Drive with confidence"
className="about-hero-img"
/>
</section>

<section className="about-mission">
<h2>Our Mission</h2>
<p>
At Premium Car Rentals, we’re redefining the car rental experience by offering flexible, affordable, and reliable self-drive car rentals. Whether it's a weekend getaway or daily commute, we make transportation seamless.
</p>
</section>

<section className="about-values">
<h2>Why Choose Us?</h2>
<div className="value-cards">
<div className="value-card">
<img src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png" alt="Convenience" />
<h3>Convenience</h3>
<p>Book your car in minutes from any device, any time.</p>
</div>
<div className="value-card">
<img src="https://cdn-icons-png.flaticon.com/512/2620/2620995.png" alt="Affordable" />
<h3>Affordable Rates</h3>
<p>Flexible pricing with no hidden charges.</p>
</div>
<div className="value-card">
<img src="https://cdn-icons-png.flaticon.com/512/1046/1046861.png" alt="Delivery" />
<h3>Doorstep Delivery</h3>
<p>We deliver cars to your location for ultimate convenience.</p>
</div>
<div className="value-card">
<img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="Support" />
<h3>24/7 Support</h3>
<p>Our team is here to help — anytime, anywhere.</p>
</div>
</div>
</section>

</div>
);
};

export default About