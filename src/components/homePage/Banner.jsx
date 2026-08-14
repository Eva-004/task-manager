

const Banner = () => {
  
  const stats = [
    { label: 'Total', count: 12 },
    { label: 'Progress', count: 4 },
    { label: 'Done', count: 6 },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-wider uppercase">
          Plan. Track. Complete.
        </h1>

       
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium">
          Manage your tasks efficiently in one place.
        </p>

        
        <div className="pt-2">
          <button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            + Create New Task
          </button>
        </div>

        
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2  border-slate-300 rounded-lg p-4 flex flex-col items-center justify-center shadow-sm hover:border-blue-500 transition-colors duration-200"
            >
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-2xl font-bold text-slate-800 mt-1">
                {stat.count}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner;