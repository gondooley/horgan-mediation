import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:info@horganmediation.ie">info@horganmediation.ie</a></p>
      <p>Phone: <a href="tel:+353851817886">(085)181 7886</a></p>
      <p>Alternatively you can send a message directly with the form below:</p>
      <ContactForm />
    </div>
  );
}

export default Contact;

