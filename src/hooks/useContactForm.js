import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useContactForm = (showAlert, hideAlert) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      VITE_APP_EMAILJS_SERVICE_ID: serviceId,
      VITE_APP_EMAILJS_TEMPLATE_ID: templateId,
      VITE_APP_EMAILJS_PUBLIC_KEY: publicKey,
    } = import.meta.env;


    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS Environment Variables are missing!', { serviceId, templateId, publicKey });
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

      showAlert({
        show: true,
        text: 'Thank you for your message!',
        type: 'success',
      });


      setTimeout(() => {
        hideAlert(false);
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      showAlert({
        show: true,
        text: "I didn't receive your message. Please try again.",
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, handleChange, handleSubmit };
};

export default useContactForm;
