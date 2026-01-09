export default function Regions() {
  const regions = [
    {
      name: 'Île-de-France',
      cities: ['Paris', 'Versailles', 'Boulogne', 'Saint-Denis'],
      color: 'from-primary-500 to-primary-600',
    },
    {
      name: 'Auvergne-Rhône-Alpes',
      cities: ['Lyon', 'Grenoble', 'Saint-Étienne', 'Annecy'],
      color: 'from-secondary-400 to-secondary-500',
    },
    {
      name: 'Provence-Alpes-Côte d\'Azur',
      cities: ['Marseille', 'Nice', 'Toulon', 'Cannes'],
      color: 'from-accent-500 to-accent-600',
    },
    {
      name: 'Nouvelle-Aquitaine',
      cities: ['Bordeaux', 'Limoges', 'Poitiers', 'Pau'],
      color: 'from-primary-600 to-primary-700',
    },
    {
      name: 'Occitanie',
      cities: ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan'],
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      name: 'Hauts-de-France',
      cities: ['Lille', 'Amiens', 'Roubaix', 'Dunkerque'],
      color: 'from-primary-400 to-primary-500',
    },
    {
      name: 'Grand Est',
      cities: ['Strasbourg', 'Reims', 'Metz', 'Nancy'],
      color: 'from-accent-400 to-accent-500',
    },
    {
      name: 'Pays de la Loire',
      cities: ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire'],
      color: 'from-secondary-300 to-secondary-400',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Notre réseau
          </span>
          <h2 className="section-title">
            Partout en{' '}
            <span className="gradient-text">France</span>
          </h2>
          <p className="section-subtitle mt-4">
            Notre réseau de plus de 300 déménageurs partenaires intervient dans toutes les régions.
          </p>
        </div>

        {/* Regions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 border border-gray-100 hover:border-primary-200 transition-all duration-300 cursor-pointer"
            >
              {/* Region indicator */}
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${region.color} mb-4 group-hover:scale-125 transition-transform duration-300`}></div>
              
              {/* Region name */}
              <h3 className="text-lg font-display font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {region.name}
              </h3>

              {/* Cities */}
              <div className="flex flex-wrap gap-2">
                {region.cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors duration-300"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map illustration */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 px-6 py-3 rounded-xl">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">+ 300 déménageurs partenaires dans toute la France</span>
          </div>
        </div>
      </div>
    </section>
  );
}
