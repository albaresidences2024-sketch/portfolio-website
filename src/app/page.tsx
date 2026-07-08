import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

// Static Imports of Images
import profileImg from "../../public/profile.jpeg";
import albaLogo from "../../public/ALBA_logo.png";
import swapLogo from "../../public/swap_logo.png";
import westminsterLogo from "../../public/university-of-westminster.png";
import johnCabotLogo from "../../public/john_cabot.png";
import pierceLogo from "../../public/pierce.png";
import knowcrunchLogo from "../../public/knowcrunch.png";
import unicLogo from "../../public/unic.png";


export default function Home() {
  return (
    <>
      {/* Scroll Reveal Script Injector */}
      <ScrollReveal />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100dvh] flex items-center pt-16 md:pt-20 overflow-hidden">
        {/* Abstract background mesh glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-gold/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4 bg-gold-muted border border-border-gold px-3.5 py-1.5 rounded-full">
              ESTABLISHED ENTREPRENEUR
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 bg-gradient-to-r from-text-primary via-white to-gold bg-clip-text text-transparent">
              Claire Ponirou
            </h1>
            <p className="text-gold text-lg md:text-xl font-medium tracking-wide mb-4">
              Property Investor &bull; Luxury Resale Expert &bull; Digital Strategist
            </p>
            <p className="text-gray-400 text-sm md:text-base max-w-[50ch] mb-8 leading-relaxed">
              Driven by a love for quality, aesthetics, and sustainable business models across Athens, London, and Rome.
            </p>
            <div className="flex flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#ventures" 
                className="cursor-pointer bg-gold text-[#07090e] font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded transition-all duration-300 hover:bg-gold-hover active:scale-[0.98] active:translate-y-[1px] hover:shadow-[0_8px_20px_rgba(223,186,107,0.15)] text-center w-full sm:w-auto"
              >
                Explore Ventures
              </a>
              <a 
                href="#contact" 
                className="cursor-pointer border border-border-gold bg-transparent text-text-primary font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded transition-all duration-300 hover:bg-gold-muted active:scale-[0.98] active:translate-y-[1px] text-center w-full sm:w-auto"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative border border-border-gold rounded-lg p-2.5 bg-bg-secondary/40 backdrop-blur shadow-2xl hover:scale-[1.02] hover:border-gold transition-all duration-500 group">
              <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded overflow-hidden">
                <Image 
                  src={profileImg} 
                  alt="Claire Ponirou" 
                  fill
                  priority
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-bg-secondary py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 relative">
            About Me
            <span className="block w-12 h-[1px] bg-gold mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p className="font-serif text-lg md:text-xl text-text-primary leading-relaxed font-medium">
                Passionate about business, branding, and innovation, I bring over two decades of experience across luxury retail, technology, real estate, and hospitality.
              </p>
              <p>
                My career spans multiple industries and cities — from Athens to London and Rome. Whether co-founding SWAP (a curated second-hand designer boutique in Athens) or directing ALBA RESIDENCES (high-end short-term rentals), my work is driven by a deep love for quality, aesthetics, and sustainable design.
              </p>
              <p>
                As a lifelong learner, I am currently exploring blockchain, the metaverse, and digital innovation, thinking about how new technologies can enhance traditional business sectors.
              </p>
              
              <div className="mt-6 p-6 bg-bg-primary/50 border border-border-light rounded-lg">
                <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["Greek (Native)", "English (Bilingual)", "Italian (Professional)", "Spanish (Conversational)"].map((lang) => (
                    <span key={lang} className="text-xs bg-bg-secondary border border-border-light px-3 py-1.5 rounded text-gray-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-bg-card border border-border-light p-6 rounded-lg backdrop-blur flex gap-5 items-center hover:border-border-gold transition-colors duration-300">
                <div className="text-3xl w-14 h-14 bg-gold-muted border border-border-gold rounded-full flex justify-center items-center shrink-0 text-gold">🌍</div>
                <div>
                  <h4 className="font-serif text-base text-gold font-semibold mb-1">Avid Traveler</h4>
                  <p className="text-xs md:text-sm text-gray-400">Visited 46 countries, bringing an open, global mindset to my local business models.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border-light p-6 rounded-lg backdrop-blur flex gap-5 items-center hover:border-border-gold transition-colors duration-300">
                <div className="text-3xl w-14 h-14 bg-gold-muted border border-border-gold rounded-full flex justify-center items-center shrink-0 text-gold">🤝</div>
                <div>
                  <h4 className="font-serif text-base text-gold font-semibold mb-1">Mindvalley Ambassador</h4>
                  <p className="text-xs md:text-sm text-gray-400">Serving as a local host and Greece country ambassador, hosting personal growth events.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border-light p-6 rounded-lg backdrop-blur flex gap-5 items-center hover:border-border-gold transition-colors duration-300">
                <div className="text-3xl w-14 h-14 bg-gold-muted border border-border-gold rounded-full flex justify-center items-center shrink-0 text-gold">💡</div>
                <div>
                  <h4 className="font-serif text-base text-gold font-semibold mb-1">Web3 & Tech Innovator</h4>
                  <p className="text-xs md:text-sm text-gray-400">Active member of Apofasizo and The Game of Money NFT Club, exploring the future of digital assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Current Ventures
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 text-sm md:text-base">
            Active leadership roles in high-end real estate developments and sustainable fashion boutiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ALBA RESIDENCES Card */}
            <div className="bg-bg-card border border-border-light rounded-lg overflow-hidden flex flex-col hover:border-border-gold hover:translate-y-[-4px] transition-all duration-300 shadow-xl group">
              <a 
                href="https://www.alba-residences.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-36 bg-white flex justify-center items-center p-4 border-b border-border-light relative overflow-hidden group/logo"
              >
                <div className="absolute inset-0 bg-gold/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-52 h-24">
                  <Image 
                    src={albaLogo} 
                    alt="ALBA RESIDENCES Logo" 
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Hospitality & Development</span>
                <h3 className="font-serif text-2xl font-semibold mb-4">ALBA RESIDENCES</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A high-end real estate and renovation agency based in Athens. We focus on acquiring, beautifully renovating, and managing premium short-term rental properties that blend design excellence with high investment yields.
                </p>
                <div className="flex flex-col gap-2.5 text-xs text-gray-500 font-medium mt-auto mb-6">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Property Renovation & Redesign
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Central Athens Apartment Portfolio
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Luxury Hospitality Management
                  </span>
                </div>
                <a 
                  href="https://www.alba-residences.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-semibold hover:text-gold-hover transition-colors"
                >
                  Visit alba-residences.com 
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* SWAP Card */}
            <div className="bg-bg-card border border-border-light rounded-lg overflow-hidden flex flex-col hover:border-border-gold hover:translate-y-[-4px] transition-all duration-300 shadow-xl group">
              <a 
                href="https://www.swapshop.gr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-36 bg-white flex justify-center items-center p-4 border-b border-border-light relative overflow-hidden group/logo"
              >
                <div className="absolute inset-0 bg-gold/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-52 h-24">
                  <Image 
                    src={swapLogo} 
                    alt="SWAP Logo" 
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Sustainable Luxury Retail</span>
                <h3 className="font-serif text-2xl font-semibold mb-4">SWAP Designer Resale</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A curated boutique in Glyfada, Athens co-founded in 2010. SWAP connects conscious luxury buyers with certified authentic pre-owned designer wear, advocating circular economy fashion.
                </p>
                <div className="flex flex-col gap-2.5 text-xs text-gray-500 font-medium mt-auto mb-6">
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Partnerships with global resale platforms
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Designer fashion consignment & authentication
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold rounded-full"></span> Circular economy advocate
                  </span>
                </div>
                <a 
                  href="https://www.swapshop.gr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold uppercase tracking-wider font-semibold hover:text-gold-hover transition-colors"
                >
                  Visit swapshop.gr 
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-bg-secondary py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 relative">
            Professional Journey
            <span className="block w-12 h-[1px] bg-gold mx-auto mt-4"></span>
          </h2>

          <div className="max-w-3xl mx-auto relative border-l border-border-light pl-6 md:pl-10 ml-4 md:mx-auto">
            {/* Entry 1 */}
            <div className="relative mb-12 last:mb-0">
              {/* Dot */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-gold rounded-full border-[3px] border-bg-secondary shadow-[0_0_10px_rgba(223,186,107,0.5)]"></span>
              
              <span className="font-serif text-sm font-semibold text-gold mb-1 block">2019 - Present</span>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">Founder & Owner</h3>
              <h4 className="font-serif text-base text-gold-hover font-medium mb-1">ALBA RESIDENCES MON IKE</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Athens, Greece</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Managing a portfolio of fully refurbished apartments in central Athens. Directing property acquisitions, luxury structural renovations, guest relations protocols, and digital branding assets.
              </p>
            </div>

            {/* Entry 2 */}
            <div className="relative mb-12 last:mb-0">
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-gold rounded-full border-[3px] border-bg-secondary shadow-[0_0_10px_rgba(223,186,107,0.5)]"></span>
              
              <span className="font-serif text-sm font-semibold text-gold mb-1 block">2010 - Present</span>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">Co-Founder & Director of Sales</h3>
              <h4 className="font-serif text-base text-gold-hover font-medium mb-1">SWAP – Designer Resale Boutique</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Glyfada, Athens, Greece</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Co-founded and scaled a boutique store for second-hand designer wear. Curated premium designer collections and built marketing partnerships with global resale platforms.
              </p>
            </div>

            {/* Entry 3 */}
            <div className="relative mb-12 last:mb-0">
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-gold rounded-full border-[3px] border-bg-secondary shadow-[0_0_10px_rgba(223,186,107,0.5)]"></span>
              
              <span className="font-serif text-sm font-semibold text-gold mb-1 block">2000 - 2020</span>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">Managing Director</h3>
              <h4 className="font-serif text-base text-gold-hover font-medium mb-1">Futuregate – Web Development Agency</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Athens, Greece</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Led one of Greece's early web development companies. Delivered e-commerce setups, SEO, digital branding strategies, and client project management for over 18 years.
              </p>
            </div>

            {/* Entry 4 */}
            <div className="relative mb-12 last:mb-0">
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-gold rounded-full border-[3px] border-bg-secondary shadow-[0_0_10px_rgba(223,186,107,0.5)]"></span>
              
              <span className="font-serif text-sm font-semibold text-gold mb-1 block">1996 - 2000</span>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">Founder & Agent</h3>
              <h4 className="font-serif text-base text-gold-hover font-medium mb-1">Independent Real Estate Agency</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">London, UK & Athens, Greece</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Focused on buying, renovating, and upgrading residential properties in both key metropolitan markets.
              </p>
            </div>

            {/* Entry 5 */}
            <div className="relative mb-12 last:mb-0">
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 bg-gold rounded-full border-[3px] border-bg-secondary shadow-[0_0_10px_rgba(223,186,107,0.5)]"></span>
              
              <span className="font-serif text-sm font-semibold text-gold mb-1 block">1990 - 1993</span>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary">Marketing & Sales Assistant</h3>
              <h4 className="font-serif text-base text-gold-hover font-medium mb-1">Bravo Coffee Company (Family Business)</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Athens, Greece</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gained early hands-on business experience in accounting, merchandising, and marketing for Greece's #1 packaged coffee brand, prior to its acquisition by Sara Lee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section id="education" className="py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Education column */}
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-10 pl-4 border-l-2 border-gold tracking-tight">
                Education
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={westminsterLogo}
                      alt="University of Westminster Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">M.Sc. in International Finance & Trade</h4>
                    <p className="text-xs md:text-sm text-gray-400">University of Westminster &bull; 1995 - 1996</p>
                  </div>
                </div>

                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={johnCabotLogo}
                      alt="John Cabot University Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">Bachelor in Business Administration & Management</h4>
                    <p className="text-xs md:text-sm text-gray-400">John Cabot University &bull; 1995</p>
                  </div>
                </div>

                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={pierceLogo}
                      alt="Pierce College Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">High School Diploma</h4>
                    <p className="text-xs md:text-sm text-gray-400">Pierce – The American College of Greece &bull; June 1990</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications column */}
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-10 pl-4 border-l-2 border-gold tracking-tight">
                Specialized Certifications
              </h3>

              <div className="flex flex-col gap-6">
                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={knowcrunchLogo}
                      alt="Knowcrunch Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">Digital Marketing Masterclass</h4>
                    <p className="text-xs md:text-sm text-gray-400">Knowcrunch</p>
                  </div>
                </div>

                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={knowcrunchLogo}
                      alt="Knowcrunch Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">Metaverse & AI for Business</h4>
                    <p className="text-xs md:text-sm text-gray-400">Knowcrunch</p>
                  </div>
                </div>

                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={unicLogo}
                      alt="UNIC Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">Blockchain & Digital Currencies</h4>
                    <p className="text-xs md:text-sm text-gray-400">University of Nicosia (UNIC)</p>
                  </div>
                </div>

                <div className="bg-bg-card border border-border-light p-6 rounded-lg hover:border-border-gold transition-colors duration-300 flex gap-4 items-center">
                  <div className="relative w-12 h-12 bg-white rounded p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={unicLogo}
                      alt="UNIC Logo"
                      fill
                      unoptimized
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-text-primary font-semibold mb-1">Metaverse & NFTs</h4>
                    <p className="text-xs md:text-sm text-gray-400">University of Nicosia (UNIC)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-bg-secondary py-24 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16 text-sm md:text-base">
            Interested in real estate ventures, luxury fashion resale, or technology integrations? Send me a message directly.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-gold-muted border border-border-gold rounded flex justify-center items-center text-gold shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Email</h4>
                  <a href="mailto:claireponirou@gmail.com" className="text-base text-text-primary hover:text-gold transition-colors font-medium">
                    claireponirou@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-gold-muted border border-border-gold rounded flex justify-center items-center text-gold shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/claire-ponirou-0778862/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base text-text-primary hover:text-gold transition-colors font-medium"
                  >
                    linkedin.com/in/claire-ponirou
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-gold-muted border border-border-gold rounded flex justify-center items-center text-gold shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">GitHub Workspace</h4>
                  <a 
                    href="https://github.com/albaresidences2024-sketch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base text-text-primary hover:text-gold transition-colors font-medium"
                  >
                    github.com/albaresidences2024-sketch
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="w-12 h-12 bg-gold-muted border border-border-gold rounded flex justify-center items-center text-gold shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Location</h4>
                  <p className="text-base text-text-primary font-medium">Athens, Attiki, Greece</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-light py-10 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Claire Ponirou. All Rights Reserved.</p>
          <p className="font-serif italic text-gold">Designed with quality and sustainability in mind</p>
        </div>
      </footer>
    </>
  );
}
