import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>

      <p>
        Ready to capture your special moments?
        Get in touch with Kanyarasi Films.
      </p>

      <div className="contact-cards">

        <div className="card">
          <h3>📞 Phone</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="card">
          <h3>📧 Email</h3>
          <p>kanyarasifilms@gmail.com</p>
        </div>

        <div className="card">
          <h3>📍 Location</h3>
          <p>Hyderabad, Telangana</p>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;