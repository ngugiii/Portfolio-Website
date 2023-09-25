import React from 'react'
import Contact from "../../components/contact/Contact";
import ContactNavbar from '../../components/contactNavbar/ContactNavbar';

const Contacts = () => {
  return (
    <div>
      <ContactNavbar/>
        <Contact/>
    </div>
  )
}

export default Contacts