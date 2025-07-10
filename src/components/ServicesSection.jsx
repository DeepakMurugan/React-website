const services = [
  {
    icon: "🛠️", // you can replace this with SVG or an image/icon later
    title: "ADVANCED NETWORKING SOLUTIONSaa",
    description: "Our comprehensive solutions from Cisco Systems Inc offer unmatched reliability and scalability to meet the demands of your growing business.",
  },
  {
    icon: "☁️",
    title: "CLOUD & DATA CENTER EXCELLENCE",
    description: "Robust cloud services and data center solutions that ensure security, flexibility, and efficiency from Dell Inc and Backblaze.",
  },
  {
    icon: "🛡️",
    title: "ELITE SECURITY FRAMEWORKS",
    description: "Superior protection and peace of mind with Fortinet, Palo Alto Networks.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Solutions for your Business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-red-500 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl">
                  {service.icon}
                </div>
                <div className="w-10 h-[2px] bg-blue-500 mt-4 ml-2 flex-grow" />
              </div>
              <h3 className="text-blue-600 text-lg font-bold leading-snug mb-3">
                {service.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{service.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-blue-700 transition">
                Know More
                <span className="ml-2">➜</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
