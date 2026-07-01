import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiArrowUp } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import ContactCard from "./ContactCard";
import portfolio from "../data/portfolio";
import toast from "react-hot-toast";


function Contact() {
  
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // alert("Message sent successfully!");
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
      // alert("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-bg py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

          <h2 className="text-3xl font-bold text-heading">
            Let's Build Something Amazing Together 🚀
          </h2>

            <p className="text-muted mt-4 leading-8 mb-3">
            Whether you have a project, full-time opportunity, or just want to connect,
            I'd love to hear from you. Fill out the form and I'll get back to you as soon
            as possible.
            </p>

            <div className="space-y-5">
       
              <ContactCard
                icon={MdEmail}
                title="Email"
                value={portfolio.contact.email}
              />

              <ContactCard
                icon={MdPhone}
                title="Phone"
                value={portfolio.contact.phone}
              />

              <ContactCard
                icon={MdLocationOn}
                title="Location"
                value={portfolio.contact.location}
              />

            </div>

          </div>

          {/* Right */}

          <form className="space-y-6"  ref={form}
  onSubmit={sendEmail}>
            
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="
              w-full
            bg-card
              border
            border-border
              rounded-card
              px-5
              py-4
            text-heading
            placeholder:text-muted
              outline-none
              transition-all
              duration-300
            focus:border-primary
              focus:shadow-[0_0_15px_var(--color-primary)]
              "
            />

            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="
              w-full
            bg-card
              border
            border-border
              rounded-card
              px-5
              py-4
            text-heading
            placeholder:text-muted
              outline-none
              transition-all
              duration-300
            focus:border-primary
              focus:shadow-[0_0_15px_var(--color-primary)]
              "
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="
              w-full
            bg-card
              border
            border-border
              rounded-card
              px-5
              py-4
            text-heading
            placeholder:text-muted
              outline-none
              transition-all
              duration-300
            focus:border-primary
              focus:shadow-[0_0_15px_var(--color-primary)]
              "
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="
              w-full
            bg-card
              border
            border-border
              rounded-card
              px-5
              py-4
            text-heading
            placeholder:text-muted
              outline-none
              transition-all
              duration-300
            focus:border-primary
              focus:shadow-[0_0_15px_var(--color-primary)]
              "
            />

           <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-primary
              text-white
              py-4
              rounded-card
              font-semibold
              transition-all
              duration-300
              hover:bg-secondary
              hover:-translate-y-1
              hover:shadow-[0_0_20px_var(--color-primary)]
              cursor-pointer
            "
          >
             {loading ? "Sending..." : "Send Message"}
          </button>

          </form>

        </div>

      </div>

  {/* Scroll Up */}
      
     <div className="flex justify-center mt-20 animate-bounce">
      
                <a
                  href="#home"
                  className="text-text hover:text-primary transition"
                >
                  <HiArrowUp size={35} />
                </a>
      
     </div>
    </section>
  );
}

export default Contact;