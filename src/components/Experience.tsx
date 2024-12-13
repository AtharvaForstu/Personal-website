export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-8">
          <img
            src="https://www.forstu.co/external/img/logo3.png"
            alt="Forstu Logo"
            className="max-w-[338px] h-auto"
          />
        </div>
        
        <div className="space-y-4 text-xl">
          <p>Data Analysis</p>
          <p>Data Manipulation</p>
          <p>Data Visualization</p>
          <p>AWS server</p>
          <p>Database Management System</p>
        </div>
      </div>
    </section>
  );
}