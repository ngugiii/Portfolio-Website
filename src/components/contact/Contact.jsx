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
    
        emailjs.sendForm('service_pzdd12n', 'template_2zobbhm', form.current, '-2NiGoWckwPEeBx6j')
          .then((result) => {
              toast.success("Email has been sent successfully. Thank you!");
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
    <section className="container sm:h-full h-[73vh] flex justify-center items-center myContact" id="contact" data-theme={props.myTheme}>
        {/* <h3 className="myHeadings">Contact Me</h3> */}
        <div className="form">
        <div className="form-container shadow">
            <img src={contactImg} alt="" width="600px" data-aos="fade-down"/>
            <form ref={form} action="" data-aos="fade-up" onSubmit={sendEmail}>
                <h2 className='sm:text-[5rem] text-[3rem]'>Send me an email</h2>
                <input type="text" required placeholder='Name' name='user_name' />
                <input type="email" required placeholder='Email Address' name='user_email'/>
                <input type="text" required placeholder='Subject' name='subject'/>
                <textarea required placeholder='Enter your message here...' name="message" cols="30" rows="3"></textarea>
                <div className="submits w-full">
                <button className='submit-btn ml-28' type='submit'>Submit</button>
                </div>
                <ToastContainer/>
            </form>
        </div>

        </div>
        
    </section>
  )
}

export default Contact