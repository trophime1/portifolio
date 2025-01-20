import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_2y6e6qb";
    const TEMPLATE_ID = "template_o1ooqak";
    const PUBLIC_KEY = "pdt0VO-rXGvI-1y_s";

    // Validate form inputs
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setModalMessage("Invalid email format. Please check and try again.");
      setModalOpen(true);
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        () => {
          setModalMessage("Your message has been sent successfully!");
          setModalOpen(true);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setModalMessage("Failed to send your message. Please try again later.");
          setModalOpen(true);
        }
      );
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="400"
      className="bg-gray-900 text-white py-16"
    >
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center">
          Contact Me
        </h2>
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-8">
            {/* Email */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-orange-500 text-3xl mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <p className="text-lg font-semibold">Email</p>
              <a
                href="mailto:trophime3@gmail.com"
                className="text-orange-400 hover:underline"
              >
                trophime3@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-orange-500 text-3xl mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <p className="text-lg font-semibold">Phone</p>
              <a
                href="tel:+250786866091"
                className="text-orange-400 hover:underline"
              >
                +250 786 866 091
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="text-orange-500 text-3xl mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p className="text-lg font-semibold">Location</p>
              <p>Kigali, Rwanda</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto text-center">
            <p className="text-gray-900 text-lg">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
