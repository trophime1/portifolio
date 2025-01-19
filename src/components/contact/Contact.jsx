import React from 'react';

export default function Contact() {
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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
        </div>
      </div>
    </section>
  );
}
