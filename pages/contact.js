import ContactForm from "@/components/ContactForm";
import MIIApprovedImage from "@/components/MIIApproved";
import { LandscapeView, PortraitView } from "@/components/ViewportSizeHook";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

const ContactBrowserLayout = () => {
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

const Contact = () => {
  const [clientSideLayout, setClientSideLayout] = useState(null);

  useEffect(() => {
    setClientSideLayout(
      <>
        <MobileView>
          <PortraitView>
            Mobile portrait view
          </PortraitView>
          <LandscapeView>
            Mobile landscape view
          </LandscapeView>
        </MobileView>
        <BrowserView>
          <ContactBrowserLayout />
        </BrowserView>
        <MIIApprovedImage />
      </>
    );
  }, []);

  return (<>{ clientSideLayout }</>);
}

export default Contact;

