import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0C1D] text-white text-sm font-[Gilroy-Regular]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10 border-b border-gray-600">
        
        {/* Logo + Disclaimer */}
        <div>
          <h2 className="text-2xl font-bold text-white">Optica <span className="text-xs italic text-red-400">Excellence In Optics</span></h2>
          <p className="text-gray-400 text-[16px] mt-4">
            Disclaimer: Optica needs you to be comfortable with how we gather, use and unveil data in our ability as a Data Controller. We need you to be responsible for how we utilize your own information and to make you mindful of your rights, and our legitimate reason for utilizing this data under the European Union General Data Protection Regulations (GDPR).
          </p>
        </div>

        {/* Enquiries + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Enquiries</h3>
          <ul className="text-gray-300 space-y-1">
            <li>📧 info@opticsindia.com</li>
            <li>📞 +91-9886545729</li>
            <li>📞 +91-9886545729</li>
          </ul>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3 text-lg text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Address + Map */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Office</h3>
          <p className="text-gray-500 text-xl mb-3">
            #93, Bommasandra Jigani Link Rd, 1st Phase,<br />
            Bommasandra Industrial Area, Bengaluru,<br />
            Karnataka, India - 560099
          </p>
          <iframe
            title="Office Map"
            src="https://maps.google.com/maps?q=Optics%20and%20Allied%20Engineering%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-32 border-0 rounded-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom copyright + CTA */}
      <div className="bg-[#0A0A1A] py-3 text-center border-t border-gray-700">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} OPTICA. All Rights Reserved.</p>
      </div>

      {/* CTA Bar */}
      {/* <div className="bg-[#12326F] text-white py-4 px-4 text-center">
        <p className="text-base font-medium">
          Request a free consultation with our specialists and find the right solution.
        </p>
        <div className="mt-2 flex justify-center gap-3">
          <img src="/icons/mail.png" alt="Mail" className="w-6" />
          <img src="/icons/location.png" alt="Location" className="w-6" />
          <img src="/icons/call.png" alt="Call" className="w-6" />
        </div>
      </div> */}
    </footer>
  );
}
