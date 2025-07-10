import { FaHandsHelping, FaLightbulb, FaBolt, FaTrophy, FaShareAlt } from 'react-icons/fa';

export default function CoreValues() {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Core Values</h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Vision and Mission Cards */}
        <div className="space-y-6">
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md relative">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>To be a leader in Electro-Optics</p>
            {/* Background icon or SVG can be added here if needed */}
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md relative">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>
              To fulfill the global photonics demand from UV (Ultraviolet) to IR (Infrared).
            </p>
          </div>
        </div>

        {/* Core Values List */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaHandsHelping className="text-blue-900 text-xl mt-1" />
            <div>
              <h4 className="font-bold">Care</h4>
              <p className="text-sm text-gray-600">
                We strive to show concern & build a foundation of trust.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaLightbulb className="text-blue-900 text-xl" />
            <h4 className="font-bold">Innovation</h4>
          </div>

          <div className="flex items-center gap-4">
            <FaBolt className="text-blue-900 text-xl" />
            <h4 className="font-bold">Speed</h4>
          </div>

          <div className="flex items-center gap-4">
            <FaTrophy className="text-blue-900 text-xl" />
            <h4 className="font-bold">Success</h4>
          </div>

          <div className="flex items-center gap-4">
            <FaShareAlt className="text-blue-900 text-xl" />
            <h4 className="font-bold">Knowledge Sharing</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
