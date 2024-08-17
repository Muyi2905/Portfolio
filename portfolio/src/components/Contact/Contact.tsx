import './Contact.css';

interface ContactProps {
  email: string;
}

const Contact = () => {
  const email = 'obaremimuyiwa@gmail.com'; 

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${email}`}>
        <button type="button" className="btn btn--outline">
          Email me
        </button>
      </a>
    </section>
  );
};

export default Contact;