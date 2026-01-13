import { useState } from 'react';

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    lastName: '',
    firstName: '',
    phoneFixe: '',
    phonePortable: '',
    email: '',
    departureAddress: '',
    departurePostalCode: '',
    departureCity: '',
    departureFloors: '',
    departureElevator: '',
    departureInfo: '',
    arrivalAddress: '',
    arrivalPostalCode: '',
    arrivalCity: '',
    arrivalFloors: '',
    arrivalElevator: '',
    volume: '',
    surface: '',
    date: '',
    formule: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Merci ! Votre demande de devis a été envoyée. Vous serez contacté sous 24h.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-700 to-primary-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-32 right-20 opacity-20 float-element hidden lg:block">
        <svg className="w-20 h-20 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V5.5C16 4.12 14.88 3 13.5 3h-3C9.12 3 8 4.12 8 5.5V7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h-4V5.5zM19 19H5V9h14v10z"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 float-element-delayed hidden lg:block">
        <svg className="w-16 h-16 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19.5 9.5L21 12h-3v-2.5h1.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM6.5 9.5H15V12H6.5V9.5zM4 9.5V17c0 1.1.9 2 2 2h1.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5h3c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5H22c1.1 0 2-.9 2-2v-5l-3-4h-4V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4.5z"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">+300 Déménageurs partenaires</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
              Votre Devis
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-secondary-300 to-primary-300">
                Déménagement
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Obtenez en <strong className="text-white">24h</strong> votre devis de déménagement professionnel.
              Service <strong className="text-white">gratuit</strong> et <strong className="text-white">sans engagement</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {[
                { icon: '✓', text: 'Devis en moins de 24h' },
                { icon: '✓', text: '+300 Déménageurs' },
                { icon: '✓', text: 'Demande en 2 min' },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <span className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {badge.icon}
                  </span>
                  <span className="text-white/90 text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { value: '15k+', label: 'Clients satisfaits' },
                { value: '300+', label: 'Partenaires' },
                { value: '40%', label: 'D\'économies' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }} id="devis">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 mb-2">
                  Votre devis en 2 minutes
                </h2>
                <div className="flex justify-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gratuit
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sans engagement
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-12 h-1 mx-2 transition-all duration-300 ${
                            currentStep > step ? 'bg-primary-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: VOS INFORMATIONS */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">VOS INFORMATIONS</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Vous êtes un
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="particulier">Particulier</option>
                      <option value="entreprise">Entreprise</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Téléphone Fixe
                    </label>
                    <input
                      type="tel"
                      name="phoneFixe"
                      value={formData.phoneFixe}
                      onChange={handleChange}
                      placeholder="Ex: 01 23 45 67 89"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Téléphone Portable <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phonePortable"
                      value={formData.phonePortable}
                      onChange={handleChange}
                      placeholder="Ex: 06 12 34 56 78"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Votre email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: exemple@email.com"
                      className="input-field"
                      required
                    />
                  </div>
                  </div>
                )}

                {/* Step 2: INFORMATIONS DE DÉPART */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">INFORMATIONS DE DÉPART</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Adresse de départ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="departureAddress"
                      value={formData.departureAddress}
                      onChange={handleChange}
                      placeholder="Votre adresse de départ"
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Code Postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="departurePostalCode"
                        value={formData.departurePostalCode}
                        onChange={handleChange}
                        placeholder="Ex: 75001"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="departureCity"
                        value={formData.departureCity}
                        onChange={handleChange}
                        placeholder="Ex: Paris"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre d'étages <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="departureFloors"
                        value={formData.departureFloors}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="0">Rez-de-chaussée</option>
                        <option value="1">1er étage</option>
                        <option value="2">2ème étage</option>
                        <option value="3">3ème étage</option>
                        <option value="4+">4ème étage et plus</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ascenseur
                      </label>
                      <select
                        name="departureElevator"
                        value={formData.departureElevator}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Informations complémentaires pour votre déménagement: exemple: volume, démontage, Piano
                    </label>
                    <textarea
                      name="departureInfo"
                      value={formData.departureInfo}
                      onChange={handleChange}
                      placeholder="Exemple: volume, démontage, Piano"
                      rows={3}
                      className="input-field resize-none"
                    />
                  </div>
                  </div>
                )}

                {/* Step 3: INFORMATIONS D'ARRIVÉE + Additional Fields */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">INFORMATIONS D'ARRIVÉE</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Adresse d'arrivée <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="arrivalAddress"
                      value={formData.arrivalAddress}
                      onChange={handleChange}
                      placeholder="Votre adresse d'arrivée"
                      className="input-field"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Code Postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="arrivalPostalCode"
                        value={formData.arrivalPostalCode}
                        onChange={handleChange}
                        placeholder="Ex: 69001"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="arrivalCity"
                        value={formData.arrivalCity}
                        onChange={handleChange}
                        placeholder="Ex: Lyon"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre d'étages <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="arrivalFloors"
                        value={formData.arrivalFloors}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="">Sélectionner...</option>
                        <option value="0">Rez-de-chaussée</option>
                        <option value="1">1er étage</option>
                        <option value="2">2ème étage</option>
                        <option value="3">3ème étage</option>
                        <option value="4+">4ème étage et plus</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ascenseur
                      </label>
                      <select
                        name="arrivalElevator"
                        value={formData.arrivalElevator}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                      </select>
                    </div>
                  </div>

                    {/* Volume et Surface */}
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Volume (m³)
                        </label>
                        <input
                          type="text"
                          name="volume"
                          value={formData.volume}
                          onChange={handleChange}
                          placeholder="Ex: 30"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Ou Superficie du logement m²
                        </label>
                        <input
                          type="text"
                          name="surface"
                          value={formData.surface}
                          onChange={handleChange}
                          placeholder="Ex: 50"
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Date et Formule */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Date Prévue de déménagement
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Formule
                        </label>
                        <select
                          name="formule"
                          value={formData.formule}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Choisir votre formule</option>
                          <option value="economique">Économique</option>
                          <option value="standard">Standard</option>
                          <option value="premium">Premium</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-300 transition-all duration-300"
                    >
                      Précédent
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => {
                        // Validate current step before proceeding
                        if (currentStep === 1) {
                          if (!formData.lastName || !formData.firstName || !formData.phonePortable || !formData.email) {
                            alert('Veuillez remplir tous les champs obligatoires');
                            return;
                          }
                        }
                        if (currentStep === 2) {
                          if (!formData.departureAddress || !formData.departurePostalCode || !formData.departureCity || !formData.departureFloors) {
                            alert('Veuillez remplir tous les champs obligatoires');
                            return;
                          }
                        }
                        setCurrentStep(currentStep + 1);
                      }}
                      className="flex-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all duration-300 text-lg flex items-center justify-center gap-2 group"
                    >
                      <span>VALIDER MA DEMANDE</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  )}
                </div>

                <p className="text-xs text-center text-gray-400 mt-3">
                  En soumettant ce formulaire, vous acceptez d'être contacté par nos partenaires déménageurs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
