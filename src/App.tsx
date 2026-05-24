/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
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
  X,
  Music,
  Minus
} from "lucide-react";
import { HyroxGuide } from "./components/HyroxGuide";
import { StenfitGuide } from "./components/StenfitGuide";
import { TransformationsCarousel } from "./components/TransformationsCarousel";

import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';

type Language = 'es' | 'en';

const translations = {
  es: {
    nav: {
      home: "Inicio",
      programs: "Programas",
      presencial: "Presencial",
      hyrox: "Hyrox Training",
      stenfit: "Stenfit",
      comunidad: "Comunidad",
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
        price: "$300",
        unit: "MXN / Mes",
        description: "El plan ESSENTIAL es ideal para gente que busca un plan personalizado con lo necesario para avanzar en sus objetivos",
        features: [
          "Valoración inicial",
          "Plan personalizado a tus objetivos",
          "Acceso ilimitado a la app",
          "PDF de regalo con conceptos básicos para tu plan",
          "Checklist de regalo \"hábitos diarios\" (formato descargable)",
          "Seguimiento y ajustes de plan 1 vez por mes",
          "Interacción vía WA solo en horario establecido (L-V de 6-8 pm)"
        ],
        cta: "INICIAR PROTOCOLO"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$500",
        old_price: "$700",
        unit: "MXN / Mes",
        description: "El plan FOCUSED no solo es entrenamiento, es acompañamiento en tiempo real que garantiza resultados",
        features: [
          "Valoración inicial + ajustes constantes",
          "Plan personalizado a tus objetivos",
          "Acceso ilimitado a la app",
          "PDF de regalo con conceptos básicos para tu plan",
          "Checklist de regalo \"hábitos diarios\" (formato descargable)",
          "Seguimiento diario y modificaciones/ajustes semanales",
          "Interacción vía WA (dudas, cambios, videos, etc...) sin restricciones de horario",
          "Revisión técnica de ejercicios",
          "Acceso prioritario a mensajes",
          "Material exclusivo (retos hyrox, rutinas abs, consejos fit)",
          "Agenda de sesión 1:1 online (videollamada 10-15 de revisión)"
        ],
        cta: "MAXIMIZAR RENDIMIENTO"
      },
      offers: {
        title: "OFERTAS ESPECIALES",
        items: [
          {
            title: "PRUÉBALO GRATIS",
            description: "Toma la decisión hoy y recibe 2 semanas de prueba del plan FOCUSED."
          },
          {
            title: "REFIERE A UN AMIGO",
            description: "Por cada referido recibe un 10% de descuento."
          }
        ]
      },
      platform: {
        disclaimer: "Todas las misiones digitales son enlazadas a través de nuestra plataforma oficial. Una vez realizada tu suscripción, se te entregará tu acceso. Para conocer más sobre el uso de la app, visita la sección STENFIT.",
        cta: "VER TUTORIAL STENFIT"
      }
    },
    clases: {
      subtitle: "Ubicación Física",
      title: "CLASES",
      title_accent: "PRESENCIALES",
      individual_title: "POR CLASE",
      individual_subtitle: "1-4 personas",
      group_title: "MENSUALIDAD",
      group_subtitle: "5 clases a la semana",
      group_promo: "*precio especial por grupo*",
      group_promo_desc: "Pregunta por las promociones grupales",
      items: [
        { name: "1 clase", subname: "", price: "$450", meta: "Precio Regular" },
        { name: "2 clases x semana", subname: "", price: "$600", meta: "$300 x clase" },
        { name: "12 clases x mes", subname: "", price: "$2,500", meta: "$210 x clase" },
        { name: "Paquete \"FOCUSED\"", subname: "1 persona", price: "$3,500", meta: "$175 x clase" },
        { name: "Paquete \"PARTNERS\"", subname: "2 personas", price: "$2,500 c/u", meta: "$125 x clase" },
        { name: "Paquete \"THIRDS\"", subname: "3 personas", price: "$2,200 c/u", meta: "$110 x clase" },
        { name: "Paquete \"GANGS\"", subname: "4-6 personas", price: "$1,800 c/u", meta: "$90 x clase" }
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
    },
    intel: {
      title: "FEED DE",
      title_accent: "INTELIGENCIA",
      subtitle: "Actividad reciente en el campo de entrenamiento.",
      instagram_link: "Sigue la Operación en Instagram"
    },
    ui: {
      minimize: "Minimizar",
      close: "Cerrar",
      branding: "ALPHA OPERATIONAL SYSTEM V2.5"
    }
  },
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      presencial: "On-site",
      hyrox: "Hyrox Training",
      stenfit: "Stenfit",
      comunidad: "Community",
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
        price: "$30",
        unit: "USD / Month",
        description: "The ESSENTIAL plan is ideal for people looking for a personalized plan with what's necessary to advance in their goals",
        features: [
          "Initial assessment",
          "Personalized plan tailored to your goals",
          "Unlimited access to the app",
          "Complimentary PDF with basic concepts for your plan",
          "Complimentary 'daily habits' checklist (downloadable format)",
          "Tracking and plan adjustments once a month",
          "WA interaction only during set hours (Mon-Fri 6-8 pm)"
        ],
        cta: "START PROTOCOL"
      },
      focused: {
        title: "FOCUSED",
        phase: "Phase 02: Elite Ops",
        badge: "Most Active Mission",
        price: "$50",
        old_price: "$70",
        unit: "USD / Month",
        description: "The FOCUSED plan is not just training; it's real-time accompaniment that guarantees results",
        features: [
          "Initial assessment + constant adjustments",
          "Personalized plan tailored to your goals",
          "Unlimited access to the app",
          "Complimentary PDF with basic concepts for your plan",
          "Complimentary 'daily habits' checklist (downloadable format)",
          "Daily tracking and weekly modifications/adjustments",
          "WA interaction (questions, changes, videos, etc...) with no time restrictions",
          "Technical review of exercises",
          "Priority message access",
          "Exclusive material (hyrox challenges, abs routines, fit tips)",
          "1:1 online session scheduling (10-15 min review video call)"
        ],
        cta: "MAXIMIZE PERFORMANCE"
      },
      offers: {
        title: "SPECIAL OFFERS",
        items: [
          {
            title: "TRY IT FOR FREE",
            description: "Make the decision today and receive 2 weeks trial of the FOCUSED plan."
          },
          {
            title: "REFER A FRIEND",
            description: "For each referral, receive a 10% discount."
          }
        ]
      },
      platform: {
        disclaimer: "All digital missions are linked through our official platform. Once your subscription is made, you will receive your access. To learn more about using the app, visit the STENFIT section.",
        cta: "VIEW STENFIT TUTORIAL"
      }
    },
    clases: {
      subtitle: "Physical Location",
      title: "ON-SITE",
      title_accent: "CLASSES",
      individual_title: "PER CLASS",
      individual_subtitle: "1-4 people",
      group_title: "MONTHLY",
      group_subtitle: "5 classes per week",
      group_promo: "*special group price*",
      group_promo_desc: "Ask about group promotions",
      items: [
        { name: "1 class", subname: "", price: "$450", meta: "Regular Price" },
        { name: "2 classes x week", subname: "", price: "$600", meta: "$300 x class" },
        { name: "12 classes x month", subname: "", price: "$2,500", meta: "$210 x class" },
        { name: "Package \"FOCUSED\"", subname: "1 person", price: "$3,500", meta: "$175 x class" },
        { name: "Package \"PARTNERS\"", subname: "2 people", price: "$2,500 ea", meta: "$125 x class" },
        { name: "Package \"THIRDS\"", subname: "3 people", price: "$2,200 ea", meta: "$110 x class" },
        { name: "Package \"GANGS\"", subname: "4-6 people", price: "$1,800 ea", meta: "$90 x class" }
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
    },
    intel: {
      title: "INTEL",
      title_accent: "FEED",
      subtitle: "Recent activity from the training grounds.",
      instagram_link: "Follow the Operation on Instagram"
    },
    ui: {
      minimize: "Minimize",
      close: "Close",
      branding: "ALPHA OPERATIONAL SYSTEM V2.5"
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
  const [currentView, setCurrentView] = useState<'home' | 'programas' | 'clases' | 'hyrox' | 'stenfit' | 'comunidad'>('home');
  const [language, setLanguage] = useState<Language>('es');
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [showMusicFab, setShowMusicFab] = useState(true);
  const [spotifyUser, setSpotifyUser] = useState<any>(null);
  const [spotifyToken, setSpotifyToken] = useState<string | null>(localStorage.getItem('spotify_token'));

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target as Node)) {
        setIsDesktopMenuOpen(false);
      }
    };

    if (isDesktopMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktopMenuOpen]);

  useEffect(() => {
    // Listen for Spotify Auth success message
    const handleSpotifyMessage = (event: MessageEvent) => {
      if (event.data?.type === 'SPOTIFY_AUTH_SUCCESS') {
        const { access_token } = event.data.payload;
        setSpotifyToken(access_token);
        localStorage.setItem('spotify_token', access_token);
        fetchSpotifyProfile(access_token);
      }
    };

    window.addEventListener('message', handleSpotifyMessage);
    return () => window.removeEventListener('message', handleSpotifyMessage);
  }, []);

  const fetchSpotifyProfile = async (token: string) => {
    try {
      const response = await fetch('/api/spotify/me', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSpotifyUser(data);
      } else if (response.status === 401) {
        setSpotifyToken(null);
        localStorage.removeItem('spotify_token');
        setSpotifyUser(null);
      }
    } catch (err) {
      console.error("Failed to fetch Spotify profile:", err);
    }
  };

  useEffect(() => {
    if (spotifyToken) {
      fetchSpotifyProfile(spotifyToken);
    }
  }, []);

  const loginWithSpotify = async () => {
    try {
      const response = await fetch('/api/auth/spotify/url');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get auth URL");
      }
      const { url } = await response.json();
      if (!url) throw new Error("Auth URL is empty");
      window.open(url, 'spotify_login', 'width=600,height=800');
    } catch (err) {
      console.error("Failed to start Spotify login:", err);
      alert("Error: Asegúrate de configurar SPOTIFY_CLIENT_ID y SPOTIFY_CLIENT_SECRET en la configuración del proyecto.");
    }
  };

  const logoutSpotify = () => {
    setSpotifyToken(null);
    setSpotifyUser(null);
    localStorage.removeItem('spotify_token');
  };

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

  const navigateTo = (view: 'home' | 'programas' | 'clases' | 'hyrox' | 'stenfit' | 'comunidad') => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setIsDesktopMenuOpen(false);
    window.scrollTo(0, 0);
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
          
          <div className="hidden md:flex items-center gap-6">
            
            {/* Dynamic Menu Dropdown */}
            <div 
              ref={desktopMenuRef}
              className="relative group"
              onMouseEnter={() => setIsDesktopMenuOpen(true)}
              onMouseLeave={() => setIsDesktopMenuOpen(false)}
            >
              <button 
                className={`flex items-center gap-2 hover:text-olive transition-colors font-black tracking-widest uppercase text-[15px] py-2 ${isDesktopMenuOpen ? 'text-olive' : ''}`}
              >
                <Menu size={18} />
                <span>{language === 'es' ? 'MENÚ' : 'MENU'}</span>
              </button>
              
              {/* Dropdown Content */}
              <div 
                className={`absolute top-full left-0 pt-4 transition-all duration-300 w-56 ${isDesktopMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="bg-[#0B0B0B]/95 backdrop-blur-xl border border-olive/20 rounded-sm p-5 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                  {/* Tactical decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-olive/10 blur-xl rounded-full" />
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-olive/20" />
                  
                  <button 
                    onClick={() => navigateTo('home')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'home' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.home}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'home' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('programas')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'programas' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.programs}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'programas' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('hyrox')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'hyrox' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.hyrox}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'hyrox' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('clases')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'clases' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.presencial}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'clases' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                  <button 
                    onClick={() => navigateTo('comunidad')} 
                    className={`text-left text-sm font-black tracking-widest uppercase hover:text-olive transition-colors flex items-center justify-between group/item ${currentView === 'comunidad' ? 'text-olive' : 'text-smoke/80'}`}
                  >
                    <span>{t.nav.comunidad}</span>
                    <ChevronRight size={14} className={`opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 ${currentView === 'comunidad' ? 'opacity-100 translate-x-0' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-4 w-px bg-olive/20 mx-2" />

            <button 
              onClick={() => navigateTo('stenfit')} 
              className={`hover:text-olive transition-colors flex items-center justify-center ${currentView === 'stenfit' ? 'text-olive' : ''}`}
            >
              <img src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/STENFIT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9TVEVORklULnBuZyIsImlhdCI6MTc3ODk5Mjk3MSwiZXhwIjoxOTM2NjcyOTcxfQ.Fb1lNFaN34GL7k0h08NY31eA2BMaGveAMofNrSxvL7Q" alt="Stenfit" className={`h-4 lg:h-5 transition-opacity ${currentView === 'stenfit' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
            </button>
            
            <div className="h-4 w-px bg-olive/20 mx-2" />
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-olive transition-colors group font-black tracking-widest text-[15px] uppercase"
            >
              <Globe size={14} className="group-hover:rotate-12 transition-transform" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

            <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setIsMusicOpen(true);
                setShowMusicFab(true);
              }}
              className="hidden sm:flex items-center gap-2 text-olive hover:text-accent transition-colors px-3 font-black tracking-[0.2em] text-[15px]"
            >
              <Music size={14} /> COMMS
            </button>
            <button className="hidden sm:block btn-tactical px-6 py-2 text-[15px] font-black tracking-widest uppercase">
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
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0B0B0B] z-[100] flex flex-col items-center justify-start px-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center py-4 w-full md:hidden">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border-2 border-olive flex items-center justify-center overflow-hidden">
                    <Logo className="scale-[0.25]" />
                 </div>
                 <span className="font-stencil text-xl tracking-tighter text-olive">FOCUS BOX</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-olive hover:bg-olive/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-2 sm:space-y-4 w-full max-w-sm z-10 relative mt-0 sm:mt-4">
              <button 
                onClick={() => navigateTo('home')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'home' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => navigateTo('programas')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'programas' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.programs}
              </button>
              <button 
                onClick={() => navigateTo('hyrox')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'hyrox' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.hyrox}
              </button>
              <button 
                onClick={() => navigateTo('clases')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'clases' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.presencial}
              </button>
              <button 
                onClick={() => navigateTo('comunidad')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full text-center ${currentView === 'comunidad' ? 'text-olive' : 'text-smoke'}`}
              >
                {t.nav.comunidad}
              </button>
              <button 
                onClick={() => navigateTo('stenfit')} 
                className={`py-2 sm:py-3 stencil text-lg sm:text-xl md:text-2xl hover:text-olive transition-colors w-full flex justify-center ${currentView === 'stenfit' ? 'text-olive' : 'text-smoke'}`}
              >
                <img src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/STENFIT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9TVEVORklULnBuZyIsImlhdCI6MTc3ODk5Mjk3MSwiZXhwIjoxOTM2NjcyOTcxfQ.Fb1lNFaN34GL7k0h08NY31eA2BMaGveAMofNrSxvL7Q" alt="Stenfit" className={`h-5 sm:h-6 md:h-8 transition-opacity ${currentView === 'stenfit' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} />
              </button>
              
              <div className="w-10 h-px bg-olive/30 my-2 sm:my-3" />
              
              <button 
                onClick={toggleLanguage}
                className="py-2 sm:py-3 flex items-center justify-center gap-2 stencil text-xs sm:text-sm text-olive hover:text-accent transition-colors w-full"
              >
                <Globe size={16} />
                {language === 'es' ? 'SWITCH TO ENGLISH' : 'CAMBIAR A ESPAÑOL'}
              </button>

              <button className="btn-tactical w-full py-3 sm:py-4 stencil text-base sm:text-lg tracking-[0.2em] mt-2">
                {t.nav.contact}
              </button>
            </div>

            {/* Decorative elements for mobile menu */}
            <div className="absolute top-1/4 -left-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-olive/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

        {/* Tactical Spotify Player */}
        <div className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end transition-all duration-500 ${showMusicFab ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
          <div className={`mb-4 w-[300px] md:w-[350px] glass-card border-olive/30 p-2 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-300 transform ${isMusicOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="flex justify-between items-center px-2 py-1 mb-2 border-b border-olive/10">
              <div className="flex items-center gap-2">
                {spotifyUser ? (
                  <div className="flex items-center gap-2">
                    {spotifyUser.images?.[0]?.url && (
                      <img src={spotifyUser.images[0].url} alt="" className="w-4 h-4 rounded-full border border-olive/30" />
                    )}
                    <span className="text-[8px] font-black tracking-widest text-olive uppercase truncate max-w-[100px]">
                      {spotifyUser.display_name}
                    </span>
                    <button onClick={logoutSpotify} className="text-[7px] text-red-400/60 hover:text-red-400 transition-colors uppercase font-bold">Close Session</button>
                  </div>
                ) : (
                  <button 
                    onClick={loginWithSpotify}
                    className="text-[8px] font-black tracking-widest text-[#1DB954] hover:text-white transition-colors uppercase border border-[#1DB954]/30 px-2 py-0.5 rounded-full"
                  >
                    Sync Spotify
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMusicOpen(false)} 
                  className="text-olive hover:text-accent transition-colors p-1"
                  title={t.ui.minimize}
                >
                  <Minus size={14} />
                </button>
                <button 
                  onClick={() => {
                    setIsMusicOpen(false);
                    setShowMusicFab(false);
                  }} 
                  className="text-olive/50 hover:text-red-400 transition-colors p-1"
                  title={t.ui.close}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            <iframe 
              style={{ borderRadius: '4px' }} 
              src={`https://open.spotify.com/embed/playlist/7ke8MsoH2gF3zNguHGKU38?utm_source=generator&theme=0${spotifyToken ? '&access_token=' + spotifyToken : ''}`} 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMusicOpen(!isMusicOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-2xl ${
              isMusicOpen ? 'bg-olive border-olive text-black' : 'bg-black/80 backdrop-blur-md border-olive/40 text-olive hover:border-olive'
            }`}
          >
            {isMusicOpen ? <X size={24} /> : <Music size={24} className={isMusicOpen ? '' : 'animate-pulse text-olive'} />}
          </motion.button>
        </div>
      {/* End Spotify Player */}

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
                  <source src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/VIDEO%20FONDO%203.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9WSURFTyBGT05ETyAzLm1wNCIsImlhdCI6MTc3ODk4MDc5MCwiZXhwIjoxOTM2NjYwNzkwfQ.9hCvsNHxVNJaQI-qMngwzSVPrm7aKZnQs2kb5nrmlGk" type="video/mp4" />
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
                    <div className="aspect-auto min-h-[400px] md:min-h-[500px] bg-olive/5 border-2 border-olive/10 overflow-hidden rounded-sm group flex items-center justify-center">
                      <img 
                        src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/FOCUS%20GYM.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9GT0NVUyBHWU0ucG5nIiwiaWF0IjoxNzc4MzM2NjIyLCJleHAiOjE5MzYwMTY2MjJ9.ZdcNJvfHmDTvRbUylf_bQnDcNgSGUnwSjqxUqUP5tAw" 
                        alt="Tactical Discipline" 
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-olive opacity-20 hidden md:block" />
                  </div>
                </div>
              </div>
            </section>

            {/* Instagram Intel Feed */}
            <section id="intel" className="py-32 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">RECON DIVISION</div>
                  <h2 className="stencil text-5xl md:text-7xl mb-6">{t.intel.title} <span className="text-olive">{t.intel.title_accent}</span></h2>
                  <p className="text-smoke/60 text-sm font-medium tracking-widest uppercase">{t.intel.subtitle}</p>
                </div>
                
                <div className="glass-card border-olive/20 p-4 bg-black/40">
                  {/* @ts-ignore */}
                  <rssapp-carousel id="IeEWIwn3AuyEJncT"></rssapp-carousel>
                </div>

                <div className="mt-12 text-center">
                  <a 
                    href="https://www.instagram.com/focusboxfitness/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-olive hover:text-accent transition-colors font-black tracking-widest text-[10px] uppercase border-b border-olive/30 pb-1"
                  >
                    {t.intel.instagram_link}
                    <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                  </a>
                </div>
              </div>
            </section>
            
            <FAQ language={language} />
            
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

                    <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-xs md:text-sm font-medium tracking-wide">
                      {t.programs.essential.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-olive/30 group-hover/item:bg-olive transition-all mt-1.5 shrink-0" />
                          <span className="opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-olive/80 font-mono text-xs md:text-sm mb-12 md:mb-16 italic border-l-2 border-olive/30 pl-4">
                      {t.programs.essential.description}
                    </p>
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

                    <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 text-xs md:text-sm font-bold tracking-wide">
                      {t.programs.focused.features.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                          <Zap size={14} className="text-olive shrink-0 fill-olive mt-0.5" />
                          <span className="text-smoke leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-olive font-mono text-xs md:text-sm mb-12 md:mb-16 italic border-l-2 border-olive/60 pl-4 bg-olive/5 p-3">
                      {t.programs.focused.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <PayPalButton label={t.programs.focused.cta} featured />
                  </div>
                </motion.article>
              </div>

              {/* Stenfit Platform Banner */}
              <div className="mt-16 max-w-5xl mx-auto glass-card border-olive/30 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-olive/5" />
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-olive/10 to-transparent" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-olive/20 flex items-center justify-center bg-black/50 p-6 md:p-8">
                       <img src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/STENFIT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9TVEVORklULnBuZyIsImlhdCI6MTc3ODk5Mjk3MSwiZXhwIjoxOTM2NjcyOTcxfQ.Fb1lNFaN34GL7k0h08NY31eA2BMaGveAMofNrSxvL7Q" alt="Stenfit" className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-sm md:text-base font-medium text-smoke/90 leading-relaxed mb-6">
                      {t.programs.platform.disclaimer}
                    </p>
                    <button 
                      onClick={() => navigateTo('stenfit')}
                      className="btn-tactical py-3 px-8 text-sm uppercase tracking-widest font-black"
                    >
                      {t.programs.platform.cta}
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Offers Section */}
              <div className="mt-16 md:mt-24 max-w-5xl mx-auto border-t border-b border-olive/30 py-8 relative">
                <div className="absolute -top-1.5 left-0 w-3 h-3 border border-olive bg-[#0B0B0B] transform rotate-45" />
                <div className="absolute -top-1.5 right-0 w-3 h-3 border border-olive bg-[#0B0B0B] transform rotate-45" />
                <div className="absolute -bottom-1.5 left-0 w-3 h-3 border border-olive bg-[#0B0B0B] transform rotate-45" />
                <div className="absolute -bottom-1.5 right-0 w-3 h-3 border border-olive bg-[#0B0B0B] transform rotate-45" />
                
                <div className="grid md:grid-cols-3 gap-8 items-center px-4 md:px-8">
                  <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-olive/20 pb-8 md:pb-0 md:pr-8">
                    <h3 className="stencil text-3xl md:text-4xl text-olive flex flex-col uppercase">
                      {t.programs.offers.title.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 ? 'opacity-70' : ''}>{word}</span>
                      ))}
                    </h3>
                  </div>
                  
                  <div className="md:col-span-2 grid sm:grid-cols-2 gap-8 md:gap-12">
                     {t.programs.offers.items.map((offer, idx) => (
                       <div key={idx} className="space-y-3">
                         <h4 className="font-mono font-bold tracking-widest text-sm md:text-base text-smoke uppercase border-b border-olive/30 pb-2">{offer.title}</h4>
                         <p className="text-xs md:text-sm font-medium opacity-70 leading-relaxed text-olive">{offer.description}</p>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-24 text-center">
                <p className="text-[10px] font-black tracking-[0.4em] opacity-30 flex items-center justify-center gap-3">
                  <span className="w-12 h-px bg-smoke/20" />
                  {t.ui.branding}
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
                  <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">{t.clases.subtitle}</div>
                  <h2 className="stencil text-5xl">{t.clases.title} <span className="text-olive">{t.clases.title_accent}</span></h2>
                </header>

                <div className="space-y-16">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-8 border-b-2 border-olive/30 pb-4">
                      <h3 className="stencil text-3xl md:text-4xl text-olive tracking-widest">{t.clases.individual_title}</h3>
                      <span className="text-xs font-black tracking-widest uppercase text-smoke/70 flex items-center gap-1"><span className="text-red-500">◆</span> {t.clases.individual_subtitle}</span>
                    </div>
                    <div className="grid gap-4">
                      {t.clases.items.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-olive/10 group font-stencil">
                          <div className="flex items-center gap-2">
                            <span className="text-smoke/50 text-xl">•</span>
                            <div>
                              <div className="font-black tracking-widest uppercase text-lg group-hover:text-olive transition-colors">{item.name}</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="text-2xl font-black text-smoke">{item.price}</div>
                            {item.meta && item.meta !== "Precio Regular" && item.meta !== "Regular Price" && (
                              <div className="bg-olive/40 px-2 py-0.5 text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{item.meta}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col gap-2 items-start">
                      <span className="font-black tracking-widest uppercase text-smoke/90 text-sm md:text-base">{t.clases.group_promo}</span>
                      <span className="bg-olive/40 px-2 py-1 text-[10px] md:text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{t.clases.group_promo_desc}</span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-8 border-b-2 border-olive/30 pb-4">
                      <h3 className="stencil text-3xl md:text-4xl text-olive tracking-widest">{t.clases.group_title}</h3>
                      <span className="text-xs font-black tracking-widest uppercase text-smoke/70"><span className="text-olive">◆</span> {t.clases.group_subtitle}</span>
                    </div>
                    <div className="grid gap-4">
                      {t.clases.items.slice(3).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-olive/10 group font-stencil">
                          <div className="flex items-start gap-2">
                            <span className="text-smoke/50 text-xl mt-[-2px]">•</span>
                            <div className="flex flex-col">
                              <div className="font-black tracking-widest uppercase text-lg group-hover:text-olive transition-colors">{item.name}</div>
                              {item.subname && (
                                <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest font-black flex items-center gap-1 pl-4 mt-1"><span className="text-red-500">◆</span> {item.subname}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div className="text-2xl font-black text-smoke">{item.price}</div>
                            {item.meta && (
                              <div className="bg-olive/40 px-2 py-0.5 text-xs text-smoke font-black tracking-widest uppercase border border-olive/50">{item.meta}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {currentView === 'hyrox' && (
          <HyroxGuide language={language} />
        )}

        {currentView === 'stenfit' && (
          <StenfitGuide language={language} />
        )}

        {currentView === 'comunidad' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-24 pt-8"
          >
            <Testimonials language={language} />
            
            <section className="pt-12">
              <div className="text-center mb-16 md:mb-24 px-6">
                <h2 className="stencil text-4xl md:text-6xl mb-4">
                  {language === 'es' ? 'TRANSFORMACIONES' : 'TRANSFORMATIONS'}
                </h2>
                <div className="w-16 h-1 bg-olive mx-auto mb-6" />
                <p className="text-smoke/60 text-xs md:text-sm font-medium tracking-widest uppercase">
                  {language === 'es' ? 'El impacto de nuestro sistema de entrenamiento' : 'The impact of our training system'}
                </p>
              </div>
              
              <TransformationsCarousel language={language} />
            </section>
          </motion.div>
        )}
      </main>

      {currentView === 'home' && (
        <section className="py-24 border-y border-olive/10 text-center px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="relative min-h-[400px] md:min-h-[600px] w-full max-w-4xl mx-auto overflow-hidden rounded-sm border border-olive/10 shadow-2xl bg-black/20">
              <img 
                src="https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/FOTO%20FOCUS%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9GT1RPIEZPQ1VTIDIucG5nIiwiaWF0IjoxNzc4MzM4NzU1LCJleHAiOjE5MzYwMTg3NTV9.03XM2TbkP_bk-KJPpTF1-C-9rF6U8kNl07IYlPNjuoI" 
                alt="Determinación Focus Box" 
                className="w-full h-full object-contain transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map(i => <Zap key={i} className="text-olive fill-olive" size={16} />)}
              </div>
              <blockquote className="stencil text-2xl md:text-4xl leading-tight text-smoke">
                {t.quote.text}
              </blockquote>
              <div className="text-[10px] font-black tracking-[0.5em] text-olive uppercase">{t.quote.community}</div>
            </div>
          </div>
        </section>
      )}

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
                <li><button onClick={() => navigateTo('hyrox')} className="hover:text-olive transition-colors">{t.nav.hyrox}</button></li>
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
