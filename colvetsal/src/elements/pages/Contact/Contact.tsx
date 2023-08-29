import React from "react";
import c from './Contact.module.css';

// type CardProps = {
//     ref: React.MutableRefObject<null | HTMLDivElement>
// }

interface ContactProps {
    contactRef: React.MutableRefObject<HTMLDivElement | null>;
  }
  
  const Contact: React.FC <ContactProps> = () => {
	
	return <section
		id={c.ContCont}>
	</section>;
}
export default Contact;