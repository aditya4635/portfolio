import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS Environment Variables are missing!');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey);
      
      showAlert({
        show: true,
        text: 'Configuration Error: Missing EmailJS keys.',
        type: 'danger',
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Aditya Bhandari',
          from_email: form.email,
          to_email: 'adityarajbhandari1020@gmail.com',
          message: form.message,
        },
        publicKey
      );

      setLoading(false);
      showAlert({
        show: true,
        text: 'Thank you for your message 😃',
        type: 'success',
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error('EmailJS Error:', error);

      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: 'danger',
      });
    }
  };

  useGSAP(() => {
    gsap.from('.contact-container', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
      },
    });
  });

  return (
    <section className="c-space" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container pt-10 pb-10 px-8 bg-black-200/50 backdrop-blur-xl border border-white-800/10 rounded-2xl shadow-2xl shadow-black-200 w-full max-w-xl">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow invert" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
