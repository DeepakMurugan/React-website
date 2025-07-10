
export default function AboutUs() {
  return (
    <section className="py-16 bg-white px-4 md:px-12 lg:px-24">
      {/* Text Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">About US</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 1985 and headquartered in Bangalore, Optics and Allied
          Engineering Pvt. Ltd. (OPTICA) is a pioneer in precision optics and
          electro-optic system integration. With a state-of-the-art 60,000 sq. ft.
          facility dedicated to advanced fabrication, glass machining, opto-mechanical
          assembly, and testing, OPTICA specializes in high-power laser optics,
          large optics, and complex electro-optic systems. Committed to supporting
          India’s defense and aerospace programs, OPTICA continues to deliver
          innovation driven by precision, reliability, and technological excellence.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-900">40+</h3>
          <p className="text-sm text-gray-600 mt-1">Years of expertise</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-900">150+</h3>
          <p className="text-sm text-gray-600 mt-1">Employees</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-900">60000</h3>
          <p className="text-sm text-gray-600 mt-1">Square feet</p>
        </div>
      </div>
    </section>



  
  );
}
