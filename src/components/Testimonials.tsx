import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dupont',
      location: 'Paris → Lyon',
      avatar: 'MD',
      rating: 5,
      text: 'Service impeccable ! J\'ai reçu mon devis en moins de 24h. L\'équipe était ponctuelle et très professionnelle. Le déménagement s\'est déroulé parfaitement. Je recommande vivement !',
      date: 'Décembre 2025',
    },
    {
      name: 'Thomas Bernard',
      location: 'Marseille → Toulouse',
      avatar: 'TB',
      rating: 5,
      text: 'Très satisfait de mon expérience. Le formulaire est simple et rapide à remplir. L\'équipe était sérieuse et a pris soin de mes meubles. Aucune casse !',
      date: 'Novembre 2025',
    },
    {
      name: 'Sophie Martin',
      location: 'Bordeaux → Nantes',
      avatar: 'SM',
      rating: 5,
      text: 'Excellente expérience avec Docteur Déménagement ! L\'équipe a été très professionnelle, ponctuelle et soigneuse. Mon déménagement s\'est déroulé parfaitement sans aucun souci.',
      date: 'Octobre 2025',
    },
    {
      name: 'Pierre Leroy',
      location: 'Nice → Paris',
      avatar: 'PL',
      rating: 5,
      text: 'Déménagement longue distance parfaitement géré. L\'équipe était efficace et a respecté les délais. Je n\'hésiterai pas à utiliser ce service à nouveau.',
      date: 'Septembre 2025',
    },
    {
      name: 'Émilie Rousseau',
      location: 'Lille → Strasbourg',
      avatar: 'ER',
      rating: 5,
      text: 'Un service vraiment pratique qui m\'a fait gagner un temps précieux. Le devis était détaillé et sans mauvaise surprise à la fin. Très professionnel !',
      date: 'Août 2025',
    },
    {
      name: 'François Moreau',
      location: 'Rennes → Montpellier',
      avatar: 'FM',
      rating: 5,
      text: 'Excellente expérience de A à Z. L\'équipe était sympathique et a pris soin de tous mes effets personnels. Service 5 étoiles !',
      date: 'Juillet 2025',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section id="temoignages" className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl"></div>

      {/* Large quote decoration */}
      <div className="absolute top-32 left-10 text-primary-100 opacity-50">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="section-title">
            Ce que nos clients{' '}
            <span className="gradient-text">disent de nous</span>
          </h2>
          <p className="section-subtitle mt-4">
            Plus de 15 000 clients satisfaits nous font confiance pour leur déménagement.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { value: '15,000+', label: 'Clients satisfaits' },
            { value: '4.8/5', label: 'Note moyenne' },
            { value: '98%', label: 'Recommandent' },
          ].map((stat, index) => (
            <div key={index} className="text-center px-8 py-4 bg-white rounded-2xl shadow-lg shadow-gray-200/50">
              <div className="text-3xl font-display font-bold text-primary-600">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg shadow-gray-200/50 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg shadow-gray-200/50 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonials grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.slice(pageIndex * 3, pageIndex * 3 + 3).map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 border border-gray-100"
                      >
                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-600 leading-relaxed mb-6">
                          "{testimonial.text}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                          </div>
                        </div>

                        {/* Date badge */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <span className="text-xs text-gray-400">{testimonial.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
