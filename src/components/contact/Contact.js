import React,{useEffect, useRef} from 'react'
import contactImg from "../../assets/contact.jpg"
import "./Contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = (props) => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pzdd12n', 'template_2zobbhm', form.current, 'SnATEpVyQT-Ixt93L')
          .then((result) => {
              toast.success("Email has been sent successfully, Thank you!");
          }, (error) => {
              toast.error("Email not sent. Please try again");
          });
          e.target.reset();
      };
    useEffect(()=>{
        AOS.init({
          duration: 1000,
        });
      },[])
  return (
    <section className="container myContact" id="contact" data-theme={props.myTheme}>
        <h3 className="myHeadings">Contact Me</h3>
        <div className="form">
        <div className="form-container">
            <img src={contactImg} alt="" width="600px" data-aos="fade-down"/>
            <form ref={form} action="" data-aos="fade-up" onSubmit={sendEmail}>
                <h2>Send me an Email</h2>
                <input type="text" placeholder='Name' name='user_name' required/>
                <input type="email" placeholder='Email Address' name='user_email' required/>
                <input type="text" placeholder='Subject' name='subject' required/>
                <textarea placeholder='Enter your Message Here' name="message" cols="30" rows="3"></textarea>
                <button type='submit'>Submit</button>
                <ToastContainer/>
            </form>
        </div>

        </div>
        
    </section>
  )
}

export default Contact