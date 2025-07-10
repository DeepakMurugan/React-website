export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[80vh] flex items-center justify-center" style={{ backgroundImage: 'url(/your-hero-image.jpg)' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="relative z-10 text-white text-center">
        <h2 className="text-2xl font-semibold font-mono">»» Areas of expertise</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 ">Dee - Optics Assembly</h1>
      </div>
    </section>
  );
}
