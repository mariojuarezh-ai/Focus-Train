/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  ChevronRight, 
  Check, 
  Calendar, 
  Users, 
  Smartphone, 
  FileText, 
  TrendingUp, 
  Clock, 
  MessageSquare,
  Zap,
  Target,
  Globe,
  Menu,
  X
} from "lucide-react";

type Language = 'es' | 'en';

const translations = {
  es: {
    nav: {
      home: "Inicio",
      programs: "Programas",
      presencial: "Presencial",
      contact: "CONTACTAR"
    },
    hero: {
      status: "[ ELIMINANDO TUS EXCUSAS ]",
      title: "YOU ALWAYS STAY",
      subtitle: "FOCUSED",
      description: "Entrenamiento táctico y acondicionamiento físico de élite inspirado en la disciplina militar. Optimiza tu rendimiento con rutinas funcionales diseñadas para superar tus límites.",
      cta_primary: "INICIAR TRANSFORMACIÓN",
      cta_secondary: "VER HORARIOS"
    },
    about: {
      vision: "Nuestra Visión",
      title: "DISCIPLINA",
      title_accent: "TÁCTICA",
      description: "Focus Box & Fitness es el estándar en entrenamiento táctico y acondicionamiento físico especializado. Nuestra metodología combina la disciplina militar con ejercicios de alto rendimiento para forjar una mentalidad y un cuerpo inquebrantables.",
      quote: "\"El foco es el arma más poderosos en el campo de batalla de tu vida diaria.\""
    },
    programs: {
      title: "MISIONES",
      title_accent: "DIGITALES",
      subtitle: "Sistemas de entrenamiento de alto rendimiento adaptados a tu entorno.",
      essential: {
        title: "ESSENTIAL",
        phase: "Phase 01: Core Systems",
        price: "$250",
        unit: "MXN / Mes",
        features: [
          "Protocolo de Valoración Inicial",
          "Plan Operativo Personalizado",
          "Acceso Total a Plataforma FOCUS",
          "Manual de Hábitos de Rendimiento",
          "Optimización de Nutrición Básica",
          "Soporte Estratégico Mensual"
        ],
        cta: "INICIAR PROTOCOLO"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$500",
        old_price: "$700 MXN",
        unit: "MXN / Mes",
        features: [
          "Todo en el Protocolo Essential",
          "Monitoreo Diario de Biométricos",
          "Análisis de Técnica Operativa",
          "Módulos Exclusivos (Hyrox/Abs)",
          "Sesión Táctica 1:1 Semanal",
          "Soporte Inmediato 24/7"
        ],
        cta: "MAXIMIZAR RENDIMIENTO"
      }
    },
    clases: {
      title: "CLASES",
      title_accent: "PRESENCIALES",
      individual_title: "Operación Individual",
      group_title: "Estrategia Grupal (Mensual)",
      items: [
        { name: "Una Inserción (1 Clase)", price: "$450", meta: "Precio Regular" },
        { name: "Refuerzo Semanal (2 Clases/Sem)", price: "$600", meta: "$300 x sesión" },
        { name: "Batallón Completo (12 Clases/Mes)", price: "$2,500", meta: "$210 x sesión" },
        { name: "Paquete \"FOCUSED\" (Individual)", price: "$3,500", meta: "Acceso total" },
        { name: "Paquete \"PARTNERS\" (Dúo)", price: "$2,500 c/u", meta: "Entrena en pareja" },
        { name: "Paquete \"THIRDS\" (Escuadrón)", price: "$2,200 c/u", meta: "Equipo de 3 personas" }
      ]
    },
    quote: {
      text: "\"La diferencia entre lo imposible y lo posible reside en la determinación de una persona.\"",
      community: "FOCUS BOX COMMUNITY"
    },
    footer: {
      description: "El primer centro de entrenamiento táctico dedicado a la transformación mental y física total.",
      map: "Mapa Base",
      contact_title: "Contacto Inmediato",
      rights: "© 2026 FOCUS BOX & FITNESS // TODOS LOS DERECHOS RESERVADOS // ALPHA DIVISION"
    }
  },
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      presencial: "On-site",
      contact: "CONTACT"
    },
    hero: {
      status: "[ ELIMINATING YOUR EXCUSES ]",
      title: "YOU ALWAYS STAY",
      subtitle: "FOCUSED",
      description: "Elite tactical training and physical conditioning inspired by military discipline. Optimize your performance with functional routines designed to exceed your limits.",
      cta_primary: "START TRANSFORMATION",
      cta_secondary: "VIEW SCHEDULE"
    },
    about: {
      vision: "Our Vision",
      title: "TACTICAL",
      title_accent: "DISCIPLINE",
      description: "Focus Box & Fitness is the standard for specialized tactical training and physical conditioning. Our methodology combines military discipline with high-performance exercises to forge an unbreakable mindset and body.",
      quote: "\"Focus is the most powerful weapon on the battlefield of your daily life.\""
    },
    programs: {
      title: "DIGITAL",
      title_accent: "MISSIONS",
      subtitle: "High-performance training systems adapted to your environment.",
      essential: {
        title: "ESSENTIAL",
        phase: "Phase 01: Core Systems",
        price: "$250",
        unit: "MXN / Month",
        features: [
          "Initial Assessment Protocol",
          "Personalized Operation Plan",
          "Full Access to FOCUS Platform",
          "Performance Habits Manual",
          "Basic Nutrition Optimization",
          "Monthly Strategic Support"
        ],
        cta: "START PROTOCOL"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$500",
        old_price: "$700 MXN",
        unit: "MXN / Month",
        features: [
          "All in Essential Protocol",
          "Daily Biometric Monitoring",
          "Operational Technique Analysis",
          "Exclusive Modules (Hyrox/Abs)",
          "1:1 Weekly Tactical Session",
          "24/7 Immediate Support"
        ],
        cta: "MAXIMIZE PERFORMANCE"
      }
    },
    clases: {
      title: "ON-SITE",
      title_accent: "CLASSES",
      individual_title: "Individual Operation",
      group_title: "Group Strategy (Monthly)",
      items: [
        { name: "One Insertion (1 Class)", price: "$450", meta: "Regular Price" },
        { name: "Weekly Reinforcement (2 Classes/Wk)", price: "$600", meta: "$300 x session" },
        { name: "Full Battalion (12 Classes/Mo)", price: "$2,500", meta: "$210 x session" },
        { name: "Package \"FOCUSED\" (Individual)", price: "$3,500", meta: "Full access" },
        { name: "Package \"PARTNERS\" (Duo)", price: "$2,500 ea", meta: "Train in pairs" },
        { name: "Package \"THIRDS\" (Squad)", price: "$2,200 ea", meta: "Team of 3 people" }
      ]
    },
    quote: {
      text: "\"The difference between the impossible and the possible lies in a person's determination.\"",
      community: "FOCUS BOX COMMUNITY"
    },
    footer: {
      description: "The first tactical training center dedicated to total mental and physical transformation.",
      map: "Base Map",
      contact_title: "Immediate Contact",
      rights: "© 2026 FOCUS BOX & FITNESS // ALL RIGHTS RESERVED // ALPHA DIVISION"
    }
  }
};

const COLORS = {
  primary: "#768455",
  black: "#0B0B0B",
  smoke: "#F2F2F2",
  accent: "#A3B18A",
};

const TopoBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-20">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M0 20C40 10 60 50 100 40C140 30 160 70 200 60" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 60C50 50 70 90 120 80C170 70 190 110 200 100" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 100C30 90 50 130 90 120C130 110 150 150 200 140" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 140C60 130 80 170 140 160C200 150 220 190 200 180" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
          <path d="M0 180C40 170 60 210 100 200" fill="none" stroke={COLORS.primary} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/50 to-[#0B0B0B]" />
  </div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="w-32 h-32 rounded-full border-4 border-[#768455] flex items-center justify-center p-2 bg-[#0B0B0B] overflow-hidden">
      <img 
        src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/LOGO%20FOCUS%20-%20SIN%20FONDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9MT0dPIEZPQ1VTIC0gU0lOIEZPTkRPLnBuZyIsImlhdCI6MTc3NzE3NTIwMywiZXhwIjoxOTM0ODU1MjAzfQ.qqm2PyEbe2Z-IqtMvuOJu1SBJHVHfccrIG-LSW1-HSE" 
        alt="Logo de Focus Box & Fitness - Entrenamiento Táctico y Acondicionamiento Físico" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const PayPalButton = ({ label, featured = false }: { label: string, featured?: boolean }) => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="6QCRB4S7A2ZEJ" />
      <input type="hidden" name="currency_code" value="MXN" />
      <motion.button
        type="submit"
        name="submit"
        whileHover={{ y: -2, boxShadow: "0 0 25px rgba(118, 132, 85, 0.6)" }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 text-sm font-black tracking-[0.3em] transition-all flex items-center justify-center gap-2 rounded-sm uppercase ${
          featured 
            ? "bg-[#768455] text-[#0B0B0B] hover:bg-[#A3B18A]" 
            : "border-2 border-[#768455] text-[#768455] hover:bg-[#768455] hover:text-black"
        }`}
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.321c.065-.405.415-.701.826-.701h9.19c.478 0 1.258.01 2.164.195 2.155.44 3.791 2.226 3.791 4.544 0 2.21-.861 3.864-2.477 4.757-.54.3-1.155.518-1.815.65-1.121.223-2.126.21-2.903.203h-2.115c-.47 0-.877.34-.963.803l-1.031 5.565c-.067.362-.38.625-.747.625h2.1l1.52-9.215h1.217c2.617 0 4.09 1.233 4.09 4.305 0 3.072-1.473 4.305-4.09 4.305H11.23a1 1 0 0 0-.985.834l-.86 5.234a.641.641 0 0 1-.631.538z"/>
        </svg>
        {label}
      </motion.button>
    </form>
  );
};export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'programas' | 'clases'>('home');
  const [language, setLanguage] = useState<Language>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Phase 1: Robust Browser Language Detection
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en') {
      setLanguage('en');
    } else if (browserLang === 'es') {
      setLanguage('es');
    }

    // Phase 2: Geographic Detection via IP (USA/Europe -> English)
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryCode = data.country_code; // e.g., 'US', 'GB', 'DE', 'FR'
        const continentCode = data.continent_code; // e.g., 'NA', 'EU'

        // If in USA or Europe continent, default to English
        if (countryCode === 'US' || continentCode === 'EU') {
          setLanguage('en');
        }
      } catch (error) {
        console.warn("Geographic detection failed, falling back to browser language:", error);
      }
    };

    detectLocation();
  }, []);

  const t = translations[language];

  const navigateTo = (view: 'home' | 'programas' | 'clases') => {
    setCurrentView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] selection:bg-[#768455] selection:text-[#0B0B0B]">
      <div className="topo-bg-pattern opacity-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-olive/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity z-50"
          >
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-olive flex items-center justify-center overflow-hidden">
                <Logo className="scale-[0.25] md:scale-[0.3]" />
             </div>
             <span className="font-stencil text-xl md:text-2xl tracking-tighter">FOCUS BOX</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-widest uppercase">
            <button 
              onClick={() => navigateTo('home')} 
              className={`hover:text-olive transition-colors ${currentView === 'home' ? 'text-olive' : ''}`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => navigateTo('programas')} 
              className={`hover:text-olive transition-colors ${currentView === 'programas' ? 'text-olive' : ''}`}
            >
              {t.nav.programs}
            </button>
            <button 
              onClick={() => navigateTo('clases')} 
              className={`hover:text-olive transition-colors ${currentView === 'clases' ? 'text-olive' : ''}`}
            >
              {t.nav.presencial}
            </button>
            
            <div className="h-4 w-px bg-olive/20 mx-2" />
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-olive transition-colors group"
            >
              <Globe size={12} className="group-hover:rotate-12 transition-transform" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block btn-tactical px-6 py-2 text-[10px] font-black tracking-widest uppercase">
              {t.nav.contact}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-olive hover:bg-olive/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#0B0B0B] z-40 flex flex-col items-center justify-center space-y-8 px-6"
            >
              <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
                <button 
                  onClick={() => navigateTo('home')} 
                  className={`stencil text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'home' ? 'text-olive' : 'text-smoke'}`}
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => navigateTo('programas')} 
                  className={`stencil text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'programas' ? 'text-olive' : 'text-smoke'}`}
                >
                  {t.nav.programs}
                </button>
                <button 
                  onClick={() => navigateTo('clases')} 
                  className={`stencil text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'clases' ? 'text-olive' : 'text-smoke'}`}
                >
                  {t.nav.presencial}
                </button>
                
                <div className="w-12 h-px bg-olive/30" />
                
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-3 stencil text-sm text-olive hover:text-accent transition-colors"
                >
                  <Globe size={18} />
                  {language === 'es' ? 'SWITCH TO ENGLISH' : 'CAMBIAR A ESPAÑOL'}
                </button>

                <button className="btn-tactical w-full py-4 stencil text-lg tracking-[0.2em]">
                  {t.nav.contact}
                </button>
              </div>

              {/* Decorative elements for mobile menu */}
              <div className="absolute top-1/4 -left-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {currentView === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section - Immersive Vertical */}
            <section id="hero" className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/VIDEO%20FONDO%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9WSURFTyBGT05ETyAxLm1wNCIsImlhdCI6MTc3NzE3NzIzMSwiZXhwIjoxOTM0ODU3MjMxfQ.g_Zu3WxZ8v3pRBDHuzHN4EChFYVDCzTjo6_6W9Dodas" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/20 to-[#0B0B0B]" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
              >
                <div className="inline-block px-3 py-1 border border-olive text-olive text-[10px] font-black tracking-[0.4em] mb-8 animate-pulse">
                  {t.hero.status}
                </div>
                <h1 className="stencil text-5xl md:text-9xl leading-[0.8] mb-10">
                  {t.hero.title}<br /> <span className="text-olive">{t.hero.subtitle}</span>
                </h1>
                <p className="text-base md:text-xl text-smoke/70 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
                  {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => navigateTo('programas')}
                    className="btn-tactical px-10 py-5 text-lg font-black tracking-[0.2em]"
                  >
                    {t.hero.cta_primary}
                  </button>
                  <button 
                    onClick={() => navigateTo('clases')}
                    className="border-2 border-smoke/20 hover:border-olive px-10 py-5 text-lg font-black tracking-[0.2em] transition-all"
                  >
                    {t.hero.cta_secondary}
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Vision / About Section */}
            <section id="about" className="py-32 px-6 bg-[#151619]">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-6">{t.about.vision}</div>
                    <h2 className="stencil text-5xl mb-8">{t.about.title} <span className="text-olive">{t.about.title_accent}</span></h2>
                    <div className="border-l-4 border-olive pl-8 space-y-6">
                      <p className="text-smoke/80 leading-relaxed font-medium">
                        {t.about.description}
                      </p>
                      <p className="text-smoke/60 text-sm italic">
                        {t.about.quote}
                      </p>
                    </div>
                  </motion.div>
                  <div className="relative">
                    <div className="aspect-[4/5] bg-olive/10 border-2 border-olive/20 overflow-hidden rounded-sm group">
                      <Logo className="absolute inset-0 m-auto scale-150 opacity-10 group-hover:opacity-30 transition-opacity" />
                      <img 
                        src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/FOTO%20FOCUS%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9GT1RPIEZPQ1VTIDEucG5nIiwiaWF0IjoxNzc3MTc1NzU3LCJleHAiOjE3Nzc2MDc3NTd9.-DgsYnnIhLYkHObs6GHIuUcwrG11t4Vz7FD1TN0QeAY" 
                        alt="Tactical Discipline" 
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-olive opacity-20" />
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {currentView === 'programas' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-20 min-h-[85vh] flex items-center justify-center relative overflow-hidden"
          >
            {/* Background Image for Programas */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/FOCUS%20FONDO%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9GT0NVUyBGT05ETyAyLnBuZyIsImlhdCI6MTc3NzE3ODg4MSwiZXhwIjoxOTM0ODU4ODgxfQ.qmblZXD7GNMVfg8MK4RWmWrBzlPEwcBtr4jaaAMM1Rs" 
                alt="Fondo de entrenamiento táctico Focus Box fitness pesas kettlebells"
                className="w-full h-full object-cover opacity-40 grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
            </div>

            {/* Background Accents */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olive/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-olive/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-32 w-full relative z-10">
              <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
                <div className="inline-block px-4 py-1 border border-olive/30 text-olive text-[10px] font-black tracking-[0.5em] uppercase mb-6 rounded-full">
                  Elite Systems
                </div>
                <h2 className="stencil text-5xl md:text-8xl mb-6">{t.programs.title} <span className="text-olive">{t.programs.title_accent}</span></h2>
                <div className="w-16 md:w-24 h-1 bg-olive mx-auto mb-8" />
                <p className="text-smoke/60 text-xs md:text-sm font-medium tracking-widest uppercase px-4">
                  {t.programs.subtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                {/* Essential Card */}
                <motion.article 
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 md:p-12 border-white/5 bg-white/[0.02] flex flex-col justify-between group hover:border-olive/40 hover:bg-white/[0.04] transition-all relative"
                >
                  <div className="hidden md:block absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-olive opacity-20 pointer-events-none" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="stencil text-4xl md:text-5xl mb-2 text-smoke group-hover:text-olive transition-colors">{t.programs.essential.title}</h3>
                        <div className="text-[10px] text-smoke/30 tracking-[0.2em] font-black uppercase">{t.programs.essential.phase}</div>
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-smoke/10 flex items-center justify-center group-hover:border-olive transition-all">
                        <Target size={24} className="text-smoke/20 group-hover:text-olive transition-colors" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-8 md:mb-12">
                      <span className="text-5xl md:text-6xl font-black text-smoke">{t.programs.essential.price}</span>
                      <span className="text-sm md:text-lg opacity-30 font-bold uppercase tracking-widest">{t.programs.essential.unit}</span>
                    </div>

                    <ul className="space-y-4 md:space-y-5 mb-12 md:mb-16 text-xs md:text-sm font-medium tracking-wide">
                      {t.programs.essential.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 md:gap-4 group/item">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-olive/30 group-hover/item:bg-olive transition-all" />
                          <span className="opacity-60 group-hover:opacity-100 transition-opacity">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <PayPalButton label={t.programs.essential.cta} />
                  </div>
                </motion.article>

                {/* Focused Card - Elite */}
                <motion.article 
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 md:p-12 border-olive bg-olive/[0.03] flex flex-col justify-between relative shadow-[0_30px_60px_-15px_rgba(118,132,85,0.15)] group hover:bg-olive/[0.06] transition-all"
                >
                  <div className="absolute top-0 right-0 bg-olive text-black text-[9px] font-black px-4 md:px-6 py-2 tracking-widest uppercase">
                    {t.programs.focused.badge}
                  </div>
                  <div className="hidden md:block absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-olive opacity-50 pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <h3 className="stencil text-4xl md:text-5xl mb-2 text-olive">{t.programs.focused.title}</h3>
                        <div className="text-[10px] text-olive/50 tracking-[0.2em] font-black uppercase">{t.programs.focused.phase}</div>
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-olive/30 flex items-center justify-center bg-olive/10">
                        <Zap size={24} className="text-olive fill-olive/20" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl md:text-6xl font-black text-olive">{t.programs.focused.price}</span>
                      <span className="text-sm md:text-lg opacity-40 font-bold uppercase tracking-widest text-olive">{t.programs.focused.unit}</span>
                    </div>
                    <div className="text-xs md:text-sm line-through opacity-20 mb-8 md:mb-12 font-black tracking-widest">{t.programs.focused.old_price}</div>

                    <ul className="space-y-4 md:space-y-5 mb-12 md:mb-16 text-xs md:text-sm font-bold tracking-wide">
                      {t.programs.focused.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 md:gap-4">
                          <Zap size={14} className="text-olive shrink-0 fill-olive" />
                          <span className="text-smoke">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <PayPalButton label={t.programs.focused.cta} featured />
                  </div>
                </motion.article>
              </div>

              <div className="mt-24 text-center">
                <p className="text-[10px] font-black tracking-[0.4em] opacity-30 flex items-center justify-center gap-3">
                  <span className="w-12 h-px bg-smoke/20" />
                  ALPHA OPERATIONAL SYSTEM V2.5
                  <span className="w-12 h-px bg-smoke/20" />
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'clases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12"
          >
            {/* Class Schedule Section */}
            <section id="classes" className="py-20 px-6">
              <div className="max-w-4xl mx-auto">
                <header className="text-center mb-20">
                  <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">Ubicación Física</div>
                  <h2 className="stencil text-5xl">{t.clases.title} <span className="text-olive">{t.clases.title_accent}</span></h2>
                </header>

                <div className="space-y-16">
                  <div>
                    <h3 className="stencil text-2xl text-olive mb-8 opacity-60">{t.clases.individual_title}</h3>
                    <div className="grid gap-4">
                      {t.clases.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-6 border border-olive/10 hover:border-olive/40 transition-all group font-stencil">
                          <div>
                            <div className="font-black tracking-widest uppercase group-hover:text-olive transition-colors">{item.name}</div>
                            <div className="text-[9px] opacity-40 uppercase tracking-widest">{item.meta}</div>
                          </div>
                          <div className="text-2xl font-black text-olive">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="stencil text-2xl text-olive mb-8 opacity-60">{t.clases.group_title}</h3>
                    <div className="grid gap-4">
                      {t.clases.items.slice(3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-6 border border-olive/10 hover:border-olive/40 transition-all group font-stencil">
                          <div>
                            <div className="font-black tracking-widest uppercase group-hover:text-olive transition-colors">{item.name}</div>
                            <div className="text-[9px] opacity-40 uppercase tracking-widest">{item.meta}</div>
                          </div>
                          <div className="text-2xl font-black text-olive">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </main>

      {/* Trust Section */}
      <section className="py-24 border-y border-olive/10 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(i => <Zap key={i} className="text-olive fill-olive" size={16} />)}
          </div>
          <blockquote className="stencil text-2xl md:text-4xl leading-tight">
            {t.quote.text}
          </blockquote>
          <div className="text-[10px] font-black tracking-[0.5em] text-olive uppercase">{t.quote.community}</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8">
            <button onClick={() => navigateTo('home')}>
              <Logo className="w-24 h-24 mb-4 hover:scale-105 transition-transform" />
            </button>
            <div className="stencil text-4xl leading-tight">FOCUS BOX<br />FITNESS</div>
            <p className="text-xs text-smoke/40 uppercase tracking-widest leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div className="space-y-6">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">{t.footer.map}</div>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><button onClick={() => navigateTo('home')} className="hover:text-olive transition-colors">{t.nav.home}</button></li>
                <li><button onClick={() => navigateTo('programas')} className="hover:text-olive transition-colors">{t.nav.programs}</button></li>
                <li><button onClick={() => navigateTo('clases')} className="hover:text-olive transition-colors">{t.nav.presencial}</button></li>
             </ul>
          </div>

          <div className="space-y-8">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">{t.footer.contact_title}</div>
             <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all">
                      <Smartphone size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-sm font-bold">+52 1 55 0000 0000</div>
                </div>
                <div className="flex items-center gap-4 group">
                   <div className="w-10 h-10 border border-olive/20 flex items-center justify-center group-hover:border-olive transition-all">
                      <MessageSquare size={18} className="text-smoke group-hover:text-olive transition-colors" />
                   </div>
                   <div className="text-sm font-bold">misiones@focusbox.fit</div>
                </div>
             </div>
             <div className="pt-6 flex gap-4">
                {['IG', 'FB', 'TW'].map(social => (
                  <button key={social} className="text-xs font-black p-2 border border-white/10 hover:border-olive hover:text-olive transition-all">
                    {social}
                  </button>
                ))}
             </div>
          </div>
        </div>
        <div className="mt-32 text-center text-[8px] opacity-20 tracking-[1em] uppercase">
          {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
