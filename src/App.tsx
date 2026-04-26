/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Target
} from "lucide-react";

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
    <div className="w-32 h-32 rounded-full border-4 border-[#768455] flex items-center justify-center p-2 bg-[#0B0B0B]">
      <div className="relative w-full h-full border-2 border-[#768455]/50 rounded-full flex items-center justify-center">
        <div className="absolute top-1 text-[8px] font-bold text-[#F2F2F2] tracking-widest text-center px-4">
          YOU ALWAYS STAY FOCUSED
        </div>
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#768455]" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Recreating the three-petal entwined symbol */}
          <path d="M50 30 C60 10 90 40 50 70 C10 40 40 10 50 30" />
          <path d="M30 60 C10 50 40 20 70 60 C40 90 10 70 30 60" />
          <path d="M70 60 C90 50 60 20 30 60 C60 90 90 70 70 60" />
        </svg>
        <div className="absolute bottom-2 text-[10px] font-black text-[#F2F2F2] tracking-widest">
          FOCUS
        </div>
      </div>
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
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F2F2F2] selection:bg-[#768455] selection:text-[#0B0B0B]">
      <div className="topo-bg-pattern opacity-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-olive/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border-2 border-olive flex items-center justify-center overflow-hidden">
                <Logo className="scale-[0.3]" />
             </div>
             <span className="font-stencil text-2xl tracking-tighter">FOCUS BOX</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase">
            <a href="#hero" className="hover:text-olive transition-colors">Inicio</a>
            <a href="#about" className="hover:text-olive transition-colors">Visión</a>
            <a href="#services" className="hover:text-olive transition-colors">Programas</a>
            <a href="#classes" className="hover:text-olive transition-colors">Presencial</a>
          </div>
          <button className="btn-tactical px-6 py-2 text-[10px] font-black tracking-widest">
            CONTACTAR
          </button>
        </div>
      </nav>

      {/* Hero Section - Immersive Vertical */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]" />
          {/* Subtle noise or overlay could go here */}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="inline-block px-3 py-1 border border-olive text-olive text-[10px] font-black tracking-[0.4em] mb-8 animate-pulse">
            [ ELIMINANDO TUS EXCUSAS ]
          </div>
          <h1 className="stencil text-7xl md:text-9xl leading-[0.8] mb-10">
            YOU ALWAYS<br />STAY <span className="text-olive">FOCUSED</span>
          </h1>
          <p className="text-lg md:text-xl text-smoke/70 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
            Entrenamiento táctico inspirado en la excelencia militar. 
            No es solo fitness, es una transformación radical de tu disciplina.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#services" className="btn-tactical px-10 py-5 text-lg font-black tracking-[0.2em]">
              INICIAR TRANSFORMACIÓN
            </a>
            <a href="#classes" className="border-2 border-smoke/20 hover:border-olive px-10 py-5 text-lg font-black tracking-[0.2em] transition-all">
              VER HORARIOS
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ChevronRight size={32} className="rotate-90 text-olive" />
        </div>
      </section>

      {/* Vision / About Section */}
      <section id="about" className="py-32 px-6 bg-[#151619]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-6">Nuestra Visión</div>
              <h2 className="stencil text-5xl mb-8">DISCIPLINA <span className="text-olive">TÁCTICA</span></h2>
              <div className="border-l-4 border-olive pl-8 space-y-6">
                <p className="text-smoke/80 leading-relaxed font-medium">
                  Creemos que el fitness físico es el reflejo de la fortaleza mental. Nuestros entrenamientos están diseñados para romper el ciclo de la complacencia y construir una versión inquebrantable de ti mismo.
                </p>
                <p className="text-smoke/60 text-sm italic">
                  "El foco es el arma más poderosa en el campo de batalla de tu vida diaria."
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] bg-olive/10 border-2 border-olive/20 overflow-hidden rounded-sm group">
                <Logo className="absolute inset-0 m-auto scale-150 opacity-10 group-hover:opacity-30 transition-opacity" />
                <img 
                  src="https://picsum.photos/seed/tactical-fitness/800/1000" 
                  alt="Tactical Training" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-olive opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Vertical Cards */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">Programas Online</div>
            <h2 className="stencil text-6xl">ENTRENAMIENTO <span className="text-olive">DÉ ESCALA</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Essential Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-12 border-white/5 group hover:border-olive/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="stencil text-4xl mb-2">ESSENTIAL</h3>
                    <div className="text-xs text-smoke/40 tracking-widest uppercase">Fundamental Transformation</div>
                  </div>
                  <Target size={40} className="text-olive/20 group-hover:text-olive transition-colors" />
                </div>
                <div className="text-5xl font-black text-olive mb-10">
                  $250<span className="text-lg opacity-30 ml-2 font-normal">/ MES</span>
                </div>
                <ul className="space-y-4 mb-12 text-sm font-medium">
                  {[
                    "Valoración inicial profunda",
                    "Plan de entrenamiento personalizado",
                    "Acceso ilimitado a nuestra plataforma",
                    "Checklist de hábitos de alto rendimiento",
                    "Seguimiento mensual vía dashboard",
                    "Soporte vía WhatsApp (Horario táctico)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Check size={18} className="text-olive mt-1 shrink-0" />
                      <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PayPalButton label="ADQUIRIR PLAN ESSENTIAL" />
            </motion.div>

            {/* Focused Card - Featured */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-12 border-olive bg-olive/5 relative overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(118,132,85,0.1)]"
            >
              <div className="absolute top-0 right-0 bg-olive text-black text-[9px] font-black px-6 py-2 tracking-widest uppercase">
                RECOMENDADO
              </div>
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="stencil text-4xl mb-2">FOCUSED</h3>
                    <div className="text-xs text-olive tracking-widest uppercase">Elite Operational Support</div>
                  </div>
                  <Zap size={40} className="text-olive fill-olive/20" />
                </div>
                <div className="text-5xl font-black text-olive mb-10">
                  $500<span className="text-lg opacity-30 ml-2 font-normal">/ MES</span>
                  <span className="text-xl line-through opacity-20 ml-4">$700</span>
                </div>
                <ul className="space-y-4 mb-12 text-sm font-bold">
                  {[
                    "Todo en el plan Essential",
                    "Seguimiento y ajustes diarios",
                    "Análisis biométrico y de técnica",
                    "Material táctico (Retos Hyrox, Abs Elite)",
                    "Sesión mensual 1:1 de 15m con experto",
                    "Soporte 24/7 de respuesta prioritaria"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Zap size={18} className="text-olive mt-1 shrink-0 fill-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <PayPalButton label="PAGAR PLAN FOCUSED" featured />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section id="classes" className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-20">
            <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase mb-4">Ubicación Física</div>
            <h2 className="stencil text-5xl">CLASES <span className="text-olive">PRESENCIALES</span></h2>
          </header>

          <div className="space-y-16">
            <div>
              <h3 className="stencil text-2xl text-olive mb-8 opacity-60">Operación Individual</h3>
              <div className="grid gap-4">
                {[
                  { name: "Una Inserción (1 Clase)", price: "$450", meta: "Precio Regular" },
                  { name: "Refuerzo Semanal (2 Clases/Sem)", price: "$600", meta: "$300 x sesión" },
                  { name: "Batallón Completo (12 Clases/Mes)", price: "$2,500", meta: "$210 x sesión" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border border-olive/10 hover:border-olive/40 transition-all group">
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
              <h3 className="stencil text-2xl text-olive mb-8 opacity-60">Estrategia Grupal (Mensual)</h3>
              <div className="grid gap-4">
                {[
                  { name: "Paquete \"FOCUSED\" (Individual)", price: "$3,500", meta: "Acceso total" },
                  { name: "Paquete \"PARTNERS\" (Dúo)", price: "$2,500 c/u", meta: "Entrena en pareja" },
                  { name: "Paquete \"THIRDS\" (Escuadrón)", price: "$2,200 c/u", meta: "Equipo de 3 personas" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border border-olive/10 hover:border-olive/40 transition-all group">
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

      {/* Trust Section */}
      <section className="py-24 border-y border-olive/10 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(i => <Zap key={i} className="text-olive fill-olive" size={16} />)}
          </div>
          <blockquote className="stencil text-2xl md:text-4xl leading-tight">
            "La diferencia entre lo imposible y lo posible reside en la determinación de una persona."
          </blockquote>
          <div className="text-[10px] font-black tracking-[0.5em] text-olive uppercase">FOCUS BOX COMMUNITY</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 items-start">
          <div className="space-y-8">
            <Logo className="w-24 h-24 mb-4" />
            <div className="stencil text-4xl leading-tight">FOCUS BOX<br />FITNESS</div>
            <p className="text-xs text-smoke/40 uppercase tracking-widest leading-relaxed">
              El primer centro de entrenamiento táctico dedicado a la transformación mental y física total.
            </p>
          </div>
          
          <div className="space-y-6">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">Mapa Base</div>
             <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#hero" className="hover:text-olive transition-colors">Inicio</a></li>
                <li><a href="#about" className="hover:text-olive transition-colors">Visión</a></li>
                <li><a href="#services" className="hover:text-olive transition-colors">Programas</a></li>
                <li><a href="#classes" className="hover:text-olive transition-colors">Clases</a></li>
             </ul>
          </div>

          <div className="space-y-8">
             <div className="text-[10px] text-olive font-black tracking-[0.3em] uppercase">Contacto Inmediato</div>
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
          © 2026 FOCUS BOX & FITNESS // ALL RIGHTS RESERVED // ALPHA DIVISION
        </div>
      </footer>
    </div>
  );
}
