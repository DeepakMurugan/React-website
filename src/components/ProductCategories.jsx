const categories = ["Aerospace / Space", "Defence", "Laser", "Scientific", "Astronomy"];

export default function ProductCategories() {
  return (
    <section className="py-10 bg-white px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="text-center">
            <img src={`/images/${cat.toLowerCase().replace(/ /g, '-')}.png`} alt={cat} className="mx-auto mb-2 rounded-lg" />
            <h4 className="font-semibold">{cat}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
