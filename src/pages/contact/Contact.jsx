import React from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.user_name.value.trim()
    const email = form.user_email.value.trim()
    const message = form.message.value.trim()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (message.length < 20 || message.length > 500) {
      toast.warn('Message must be between 20 and 500 characters')
      return
    }-

    emailjs
      .sendForm(
        'service_q6dt0jn',
        'template_fxq73ip',
        form,
        'Wk7sD1tF_oFU2xQxM'
      )
      .then(() => {
        toast.success('Message sent successfully')
        form.reset()
      })
      .catch(() => {
        toast.error('Something went wrong, please try again')
      })
  }

  return (
    <>
      <section className="about-big-title pd-y">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="send-msg pd-y">
        <div className="container">
          <div className="send-msg-content">

            
            <div className="send-msg-item">
              <div className="send-msg-map">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.3158382054435!2d7.09005387488464!3d35.47172864145566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f6d9828debba5b%3A0x483d09e19b6d8290!2sUniversit%C3%A9%20Abbes%20Laghrour%20Khenchela!5e0!3m2!1sen!2sdz!4v1744572525747!5m2!1sen!2sdz"
                  width="600"
                  height="450"
                  loading="lazy"
                  title="University Location"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="send-msg-item">
              <h4 className="send-msg-title">Have a Question? Get in Touch</h4>
              <p className="send-msg-desc">
                If you would like more information about the PhD competition platform, please contact us using the form below or through our official channels.
              </p>
              <form id="myForm" className="myform" noValidate onSubmit={sendEmail}>
                <input name="user_name" type="text" placeholder="Full Name *" required />
                <input name="user_email" type="email" placeholder="Email Address *" required />
                <textarea name="message" placeholder="Your Message *" required></textarea>
                <input type="submit" value="Send" />
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
