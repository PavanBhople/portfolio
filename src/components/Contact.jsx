// // src/components/Contact.jsx
// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     const templateParams = {
//       from_name: form.name,
//       from_email: form.email,
//       message: form.message,
//     };

//     emailjs
//       .send(
//         "service_zffcqhp", // 🔥 Your EmailJS SERVICE ID
//         "template_18uft1i", // 🔥 Your EmailJS TEMPLATE ID
//         templateParams,
//         "NXntEQBDqkmuvocSz" // 🔥 Your EmailJS PUBLIC KEY
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setForm({ name: "", email: "", message: "" });
//           setLoading(false);
//         },
//         (error) => {
//           console.error("Email JS Error:", error);
//           setStatus("Failed to send message. Please try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
//     >
//       <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">
//         Contact Me
//       </h2>

//       <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
//         {/* Left: Form */}
//         <form
//           onSubmit={sendEmail}
//           className="flex-1 space-y-5 bg-black/40 p-8 rounded-2xl backdrop-blur-md border border-white/20"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="6"
//             value={form.message}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
//           ></textarea>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded-xl transition text-white font-semibold ${
//               loading
//                 ? "bg-gray-600"
//                 : "bg-purple-600 hover:bg-purple-700"
//             }`}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {status && (
//             <p
//               className={`text-center mt-3 ${
//                 status.includes("successfully")
//                   ? "text-green-400"
//                   : "text-red-400"
//               }`}
//             >
//               {status}
//             </p>
//           )}
//         </form>

//         {/* Right: Image */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="/contact.jpg"
//             alt="Contact"
//             className="w-full h-auto max-h-[450px] rounded-2xl shadow-xl object-cover border border-white/20 animate-float"
//           />
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="mt-12 flex justify-center gap-6 text-2xl text-white">
//         <a href="mailto:pavanbhople147@gmail.com" className="hover:text-purple-400 transition">
//           <FiMail />
//         </a>
//         <a
//           href="https://wa.me/917620689529"
//           target="_blank"
//           className="hover:text-green-400 transition"
//         >
//           <FaWhatsapp />
//         </a>
//         <a
//           href="https://github.com/PavanBhople"
//           target="_blank"
//           className="hover:text-purple-400 transition"
//         >
//           <FiGithub />
//         </a>
//         <a
//           href="https://linkedin.com/in/pavan-bhople"
//           target="_blank"
//           className="hover:text-purple-400 transition"
//         >
//           <FiLinkedin />
//         </a>
//         <a
//           href="https://www.instagram.com/pavan_bhople_patil"
//           target="_blank"
//           className="hover:text-purple-400 transition"
//         >
//           <FiInstagram />
//         </a>
//       </div>

//       {/* Floating Animation Tailwind */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }
//           .animate-float {
//             animation: float 4s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// }


// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        "service_zffcqhp", // 🔥 Your EmailJS SERVICE ID
        "template_18uft1i", // 🔥 Your EmailJS TEMPLATE ID
        templateParams,
        "NXntEQBDqkmuvocSz" // 🔥 Your EmailJS PUBLIC KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Email JS Error:", error);
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
    >
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Left: Form */}
        <form
          onSubmit={sendEmail}
          className="flex-1 space-y-5 bg-black/40 p-8 rounded-2xl backdrop-blur-md border border-white/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/60 border border-white/20 text-white outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl transition text-white font-semibold ${
              loading
                ? "bg-gray-600"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center mt-3 ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/contact.jpg"
            alt="Contact"
            className="w-full h-auto max-h-[450px] rounded-2xl shadow-xl object-cover border border-white/20 animate-float"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-6 text-2xl text-white">
        <a href="mailto:pavanbhople147@gmail.com" className="hover:text-purple-400 transition">
          <FiMail />
        </a>
        <a
          href="https://wa.me/917620689529"
          target="_blank"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/PavanBhople"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FiGithub />
        </a>
        <a
          href="https://linkedin.com/in/pavan-bhople"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/pavan_bhople_patil"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          <FiInstagram />
        </a>
      </div>

      {/* Floating Animation Tailwind */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
