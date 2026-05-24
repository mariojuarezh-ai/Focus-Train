import React from 'react';
import { motion } from 'motion/react';
import { Quote, Zap } from 'lucide-react';

const testimonials = {
  es: [
    {
      name: "Katie",
      target: "DOMINIO CORPORAL & FUERZA",
      text: "Mi postura se siente mucho mejor y confío más en mí misma para hacer una sentadilla más profunda ahora que me estoy haciendo más fuerte. Empiezo a sentir un cambio en mi estructura corporal. Mis piernas se sienten mucho más fuertes y firmes y mi core también se siente más fuerte y duro. Creo que de lo que más orgullosa estoy es de que ya puedo hacer dominadas y estoy haciendo sentadillas con buena postura y bajo paralelo."
    },
    {
      name: "Oscar",
      target: "RESISTENCIA CARDIOVASCULAR",
      text: "Primeros 5k después como de 7 años en 35:24, ahora sí sin pausas de nada. Puro cardio con inclinación en caminadora después de las pesas."
    },
    {
      name: "Lalichi",
      target: "RENDIMIENTO DEPORTIVO",
      text: "Ya me toca jugar contra jóvenes de 20 años y sigo el ritmo sin problemas. Fueron 6 juegos, 3 ayer y 3 hoy, y las piernas aguantan."
    },
    {
      name: "Héctor",
      target: "RECOMPOSICIÓN CORPORAL",
      text: "He bajado como 6 kilos, pero he subido músculo, así que no sé bien, pero he bajado 2 tallas. Ya me veo más compacto."
    },
    {
      name: "Anónimo",
      target: "AUMENTO DE MASA MUSCULAR",
      text: "Siento que está dando resultados la rutina, he podido mantener el mismo peso en todo, me siento con energía. ¡Gracias a ti! Eres parte esencial en esta transformación."
    }
  ],
  en: [
    {
      name: "Katie",
      target: "BODY CONTROL & STRENGTH",
      text: "My form feels way better and I'm trusting myself more to do a more full squat now that I'm getting stronger. I'm starting to feel a change in my body structure. My legs feel much stronger and more firm and my core also feels stronger and tighter. I think I'm most proud of the fact that I can now do pull-ups and I'm squatting with good form and below parallel."
    },
    {
      name: "Oscar",
      target: "CARDIOVASCULAR ENDURANCE",
      text: "First 5k after like 7 years in 35:24, now with absolutely no breaks. Pure cardio with incline on the treadmill after weights."
    },
    {
      name: "Lalichi",
      target: "SPORTS PERFORMANCE",
      text: "It's my turn to play against 20-year-olds and I keep up the pace without problems. It was 6 games, 3 yesterday and 3 today, and the legs are holding up."
    },
    {
      name: "Héctor",
      target: "BODY RECOMPOSITION",
      text: "I've lost about 6 kilos, but I've gained muscle, so I don't know for sure, but I've dropped 2 sizes. I already look more compact."
    },
    {
      name: "Anonymous",
      target: "MUSCLE MASS INCREASE",
      text: "I feel that the routine is giving results, I have been able to maintain the same weight in everything, I feel energetic. Thanks to you! You are an essential part of this transformation."
    }
  ]
};

const texts = {
  es: {
    title: "COMUNIDAD",
    subtitle: "El resultado de la disciplina sistemática."
  },
  en: {
    title: "COMMUNITY",
    subtitle: "The result of systematic discipline."
  }
};

interface TestimonialsProps {
  language: 'en' | 'es';
}

export const Testimonials = ({ language }: TestimonialsProps) => {
  const currentTestimonials = testimonials[language];
  const t = texts[language];

  return (
    <section className="py-24">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="stencil text-4xl md:text-6xl mb-4">
          {t.title} <span className="text-olive">FOCUS</span>
        </h2>
        <div className="w-16 h-1 bg-olive mx-auto mb-6" />
        <p className="text-smoke/60 text-xs md:text-sm font-medium tracking-widest uppercase">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {currentTestimonials.map((tItem, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="glass-card p-8 border-olive/10 hover:border-olive/30 transition-all flex flex-col justify-between"
          >
            <div>
              <Quote size={24} className="text-olive/20 mb-6" />
              <p className="text-smoke/80 font-mono text-sm leading-relaxed mb-8 italic">
                "{tItem.text}"
              </p>
            </div>
            
            <div className="border-t border-olive/10 pt-4 mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="font-stencil text-xl text-olive">{tItem.name}</span>
                <Zap size={14} className="text-olive fill-olive" />
              </div>
              <p className="text-[9px] font-black tracking-widest text-smoke/40 uppercase">
                {tItem.target}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
