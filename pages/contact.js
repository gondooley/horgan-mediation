import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import MIIApprovedImage from "@/components/MIIApproved";
import PageWithMenu from "@/components/PageWithMenu";
import { useEffect, useState } from "react";

const Contact = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>
        <div>
          <h1>Contact Us</h1>
          <p>Email: <a href="mailto:info@horganmediation.ie">info@horganmediation.ie</a></p>
          <p>Phone: <a href="tel:+353851817886">(085) 181 7886</a></p>
          <p>Alternatively you can send a message directly with the form below:</p>
          <ContactForm />
        </div>
        <div style={{
          textAlign: 'center'
        }}>
          <MIIApprovedImage />
        </div>
        <Navigation />
      </PageWithMenu>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Contact;

