import "./Contact.css";

interface ContactProps {
  email: string;
}

const Contact = () => {
  const email = "obaremimuyiwa@gmail.com";
  const phoneNumber = "+2348135752549"; // Replace with your phone number

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__links">
        <a href={`mailto:${email}`}>
          <button type="button" className="btn btn--outline">
            Email me
          </button>
        </a>
        <a href={`https://wa.me/${phoneNumber}`}>
          <button type="button" className="btn btn--outline">
            WhatsApp me
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
