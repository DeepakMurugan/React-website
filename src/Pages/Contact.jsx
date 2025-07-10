import ServicesSection from '../components/ServicesSection';

export default function Contact() {
  return (
    <section className="min-h-screen pt-20 px-4 bg-white text-gray-800 font-[Gilroy-Regular]">
      
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          We'd love to hear from you. Please fill out the form or contact us using the information below.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Contact Details</h2>
          <p><strong>Email:</strong> info@opticsindia.com</p>
          <p><strong>Phone:</strong> +91-9886545729</p>
          <p><strong>Address:</strong><br />
            #93, Bommasandra Jigani Link Rd, 1st Phase,<br />
            Bommasandra Industrial Area,<br />
            Bengaluru, Karnataka - 560099
          </p>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Optics%20and%20Allied%20Engineering%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-48 rounded shadow"
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Services Section */}
      <ServicesSection />

      

    </section>
  );
}
