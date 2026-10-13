import { useState } from "react"
import "./App.css";

// LOGO COMPONENT
function Logo() {
  return (
    <a href="#home" className="logo">
      <span className="logo-icon">S</span>

      <span className="logo-text">
        <strong>SAGE TECH</strong>
        <small>ENTERPRISES</small>
      </span>
    </a>
  );
}

// NAVIGATION COMPONENT
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Logo />

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">
          Get Started
        </a>
      </nav>
    </header>
  );
}

// HOME COMPONENT
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="subtitle">
          WELCOME TO SAGE TECH ENTERPRISES
        </p>

        <h1>
          Building The <span>Future</span>
          <br />
          With Technology.
        </h1>

        <p className="hero-description">
          We provide innovative digital solutions to help individuals
          and businesses grow, connect, and succeed in the modern world.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="btn primary-btn">
            Explore Our Services
          </a>

          <a href="#about" className="btn secondary-btn">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="tech-circle">S</div>

        <h2>SAGE TECH</h2>

        <p>Innovation • Technology • Excellence</p>

        <div className="card-line"></div>

        <p className="card-footer">
          YOUR VISION. OUR TECHNOLOGY.
        </p>
      </div>
    </section>
  );
}

// ABOUT COMPONENT
function About() {
  const features = [
    {
      number: "01.",
      title: "Innovation",
      description: "We embrace creative ideas and modern technology.",
    },
    {
      number: "02.",
      title: "Quality",
      description: "We focus on delivering reliable digital solutions.",
    },
    {
      number: "03.",
      title: "Growth",
      description: "We help businesses move forward in the digital world.",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="subtitle">WHO WE ARE</p>
        <h2>
          About <span>Sage Tech</span>
        </h2>
      </div>

      <p className="about-text">
        Sage Tech Enterprises is a technology-focused business dedicated
        to providing modern digital solutions. We aim to help businesses,
        individuals, and organizations use technology to solve problems,
        improve productivity, and achieve their goals.
      </p>

      <div className="features">
        {features.map((feature) => (
          <div className="feature" key={feature.number}>
            <h3>{feature.number}</h3>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// SERVICES COMPONENT
function Services() {
  const services = [
    {
      icon: "</>",
      title: "Web Development",
      description:
        "Modern, responsive, and professional websites for businesses and individuals.",
    },
    {
      icon: "✦",
      title: "Graphic Design",
      description:
        "Creative logos, business branding, and digital designs that communicate your identity.",
    },
    {
      icon: "⌘",
      title: "IT Solutions",
      description:
        "Practical technology support and digital solutions for everyday business needs.",
    },
    {
      icon: "▣",
      title: "Digital Services",
      description:
        "Digital tools and online solutions that help businesses build their presence.",
    },
  ];

  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <p className="subtitle">WHAT WE DO</p>

        <h2>
          Our <span>Services</span>
        </h2>

        <p>Technology solutions designed for a digital world.</p>
      </div>

      <div className="service-container">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CALL TO ACTION COMPONENT
function CallToAction() {
  return (
    <section className="cta">
      <p className="subtitle">LET'S BUILD SOMETHING GREAT</p>

      <h2>
        Your Ideas Deserve <span>Better Technology.</span>
      </h2>

      <p>
        Ready to take your business to the next level?
        Let's discuss your next project.
      </p>

      <a href="#contact" className="btn primary-btn">
        Contact Us Today
      </a>
    </section>
  );
}

// CONTACT COMPONENT
function Contact() {
  const contacts = [
    {
      title: "Business Name",
      value: "Sage Tech Enterprises",
    },
    {
      title: "Email Address",
      value: "your-email@example.com",
    },
    {
      title: "Phone Number",
      value: "+234 XXX XXX XXXX",
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <p className="subtitle">GET IN TOUCH</p>

        <h2>
          Contact <span>Us</span>
        </h2>

        <p>
          Have a project or business idea? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-box">
        {contacts.map((contact) => (
          <div className="contact-item" key={contact.title}>
            <h3>{contact.title}</h3>
            <p>{contact.value}</p>
          </div>
        ))}
      </div>

      <p className="contact-note">
        Replace the sample email and phone number with your real
        business contact details before publishing the website.
      </p>
    </section>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer>
      <Logo />

      <p>
        © {new Date().getFullYear()} Sage Tech Enterprises.
        All rights reserved.
      </p>

      <p className="footer-tagline">
        Innovation. Technology. Excellence.
      </p>
    </footer>
  );
}

// MAIN APP COMPONENT
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

