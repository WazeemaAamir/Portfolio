// src/components/Contact.tsx
"use client";

import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_l1wk01i", // 🔁 Replace with your EmailJS Service ID
    //     "template_dmjfsrm", // 🔁 Replace with your Template ID
    //     form.current!,
    //     "OVrx6hHQmADHZeK8k"   // 🔁 Replace with your Public Key
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       alert("Message sent successfully! ✅");
    //       form.current?.reset(); // Clear form after success
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Failed to send message ❌");
    //     }
      // );
  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-16 px-4 md:px-20">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400">
        Let’s Connect
      </h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="bg-transparent border border-gray-600 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white py-2 rounded-md font-semibold" >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/wazeema-amir-5335bb2ba/" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
              LinkedIn
             </a>
             <a href="https://github.com/WazeemaAamir" target="_blank" rel="noopener noreferrer" className="text-white mx-4">
              GitHub
            </a>
              <a href="https://x.com/A54154Amir" target="_blank" rel="noopener noreferre" className="text-white mx-4">
              Twitter
            </a>
        </div>
    </section>
  );
};

export default Contact;