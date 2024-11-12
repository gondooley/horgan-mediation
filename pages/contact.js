import Navigation from "@/components/menu/Navigation";
import PageWithMenu from "@/components/menu/PageWithMenu";
import { useEffect, useState } from "react";
import MIIWithNavFooter from "@/components/footer/MIIWIthNavFooter";
import { LandscapeView, PortraitView } from "@/utilities/viewportSizeHook";
import MIIApprovedImage from "@/components/branding/MIIApproved";

const Contact = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  const Narrow = () => {
    return (
      <div style={{
        minHeight: '100vh',
      }}>
        <Navigation />
        <div style={{
          textAlign: 'center',
          margin: '0 5vh 0 5vh',
        }}>
          <h1 style={{
            marginTop: '20vh',
          }}>Contact Horgan Mediation Solutions</h1>
          <div style={{
            fontSize: '24px',
            marginTop: '24px',
          }}>
            <p style={{
              margin: '64px 0 64px 0'
            }}>
              <a href="mailto:info@horganmediation.ie" target="_top">
                info@horganmediation.ie
              </a>
            </p>
            <p>
              <a href="tel:+353851817886" target="_top">
                (085) 181 7886
              </a>
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
    );
  }

  const Wide = () => {
    return (
      <div style={{
        minHeight: '100vh',
      }}>
        <Navigation />
        <div style={{
          textAlign: 'center',
          margin: '0 5vh 0 5vh',
        }}>
          <h1 style={{
            marginTop: '20vh',
          }}>Contact Horgan Mediation Solutions</h1>
          <div style={{
            fontSize: '24px'
          }}>
            <p style={{
              margin: '32px 0 32px 0'
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
        <MIIApprovedImage style={{
          position: 'absolute',
          top: '2vh',
          left: '2vh',
          width: '100px',
          height: '100px'

        }} />
      </div>
    );
  }

  useEffect(() => {
    setClientSideLayout(
      <PageWithMenu>

        <PortraitView>
          <Narrow />
        </PortraitView>
        <LandscapeView>
          <Wide />
        </LandscapeView>
      </PageWithMenu>
    );
  }, []);

  return (<>{clientSideLayout}</>);
}

export default Contact;

