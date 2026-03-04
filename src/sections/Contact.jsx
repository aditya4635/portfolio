import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useAlert from '../hooks/useAlert.js';
import useContactForm from '../hooks/useContactForm.js';
import Alert from '../components/Alert.jsx';
import FormField from '../components/FormField.jsx';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const { form, loading, handleChange, handleSubmit } = useContactForm(showAlert, hideAlert);

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

      <div className="relative min-h-screen flex items-center justify-center flex-col py-12">
        <div className="contact-container w-full max-w-xl md:max-w-2xl pt-8 sm:pt-10 pb-8 sm:pb-10 px-5 sm:px-8 md:px-10 bg-white/90 dark:bg-black-200/50 backdrop-blur-xl border border-gray-300/50 dark:border-white-800/10 rounded-2xl shadow-xl shadow-gray-300/50 dark:shadow-black-200">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I&apos;m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <FormField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="ex., Your Name"
              />

              <FormField
                label="Email address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ex., youremail@gmail.com"
              />
            </div>

            <FormField
              label="Your message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi, I'm interested in..."
              isTextArea
            />

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
