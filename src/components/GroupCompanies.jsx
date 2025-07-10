export default function GroupCompanies() {
  return (
    <section className="bg-blue-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Group Of Companies</h2>
      <div className="flex justify-center flex-wrap gap-8 items-center">
        <img src="/logos/guardatec.png" alt="GUARDATEC" className="h-10 object-contain" />
        <img src="/logos/optica.png" alt="OPTICA" className="h-10 object-contain" />
        <img src="/logos/caggion.png" alt="CAGGION" className="h-10 object-contain" />
      </div>
    </section>
  );
}
