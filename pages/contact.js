import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import MIIApprovedImage from "@/components/MIIApproved";
import PageWithMenu from "@/components/PageWithMenu";
import { useEffect, useState } from "react";
import MIIWithNavFooter from "@/components/MIIWIthNavFooter";

const Contact = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>
        <div style={{
          minHeight: '100vh',
        }}>
          <Navigation />
          <div style={{
            textAlign: 'center',
            margin: '0 5vh 0 5vh',
          }}>
            <h1 style={{
              marginTop: '32px',
            }}>Contact Horgan Mediation Solutions</h1>
            <div style={{
              fontSize: '24px',
              marginTop: '24px',
            }}>
              <p style={{
                margin: '64px 0 64px 0'
              }}>
                <a href="mailto:info@horganmediation.ie">info@horganmediation.ie</a>
              </p>
              <p>
                <a href="tel:+353851817886">(085) 181 7886</a>
              </p>
            </div>
            {/* <p style={{
            marginTop: '24px',
            fontSize: '20px'
          }}>
            Alternatively you can send a message directly with this form:
            </p> */}
            {/* <ContactForm /> */}
          </div>
          <MIIWithNavFooter style={{
            position: 'absolute',
            bottom: '50px',
          }} />
        </div>
      </PageWithMenu>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Contact;

