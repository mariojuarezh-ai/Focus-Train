import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const pairedPhotos = [
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/DIANA%20ANTES%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0RJQU5BIEFOVEVTIDEucG5nIiwiaWF0IjoxNzc5NTgzNTUwLCJleHAiOjE5MzcyNjM1NTB9.X3KXQzHnpNY4aO6y4N5AutuiqmHKU7DNlH5E_IYy5YA",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/DIANA%20DESPUES%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0RJQU5BIERFU1BVRVMgMS5wbmciLCJpYXQiOjE3Nzk1ODQzODQsImV4cCI6MTkzNzI2NDM4NH0.l94yPZKRLE05QDPzf-__X7K3L6PfFCcIOpZmn2WZZk4"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/DIANA%20ANTES%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0RJQU5BIEFOVEVTIDIucG5nIiwiaWF0IjoxNzc5NTgzNzA4LCJleHAiOjE5MzcyNjM3MDh9.DoO0moQxP05OkDwo81DBLHXXPHWYCTY4hzMFYXfos3g",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/DIANA%20DESPUES%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0RJQU5BIERFU1BVRVMgMi5wbmciLCJpYXQiOjE3Nzk1ODQ3OTksImV4cCI6MTkzNzI2NDc5OX0.c3MwShVoBZiIar6bWBj7ep9aJMDqIGXle-BreFK3uvU"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/ELIOT%20ANTES%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0VMSU9UIEFOVEVTIDEucG5nIiwiaWF0IjoxNzc5NTgzNzU0LCJleHAiOjE5MzcyNjM3NTR9.1UgswXsUm0VIy8ZibusUXpEKZrI4M4Hazi-nJ_JjCF0",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/ELIOT%20DESPUES%201%20CORREGIDA.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0VMSU9UIERFU1BVRVMgMSBDT1JSRUdJREEucG5nIiwiaWF0IjoxNzc5NTg0ODM2LCJleHAiOjE5MzcyNjQ4MzZ9.OUjnBfNRoTFbkbgRO6x8D84LqBoRayFUq9AKF_YF5yc"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/GENARO%20ANTES%201%20CORREGIDA.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0dFTkFSTyBBTlRFUyAxIENPUlJFR0lEQS5wbmciLCJpYXQiOjE3Nzk1ODM3OTgsImV4cCI6MTkzNzI2Mzc5OH0.lGeRpK3bHfh3srdpbhDChUf3ifgVb7IdtnZmzsxZKAQ",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/GENARO%20DESPUES%201%20CORREGIDA.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0dFTkFSTyBERVNQVUVTIDEgQ09SUkVHSURBLnBuZyIsImlhdCI6MTc3OTU4NDkxMywiZXhwIjoxOTM3MjY0OTEzfQ.iqTGWxG-XI4YraceYhc3JxECi2Qo61mYXb3XztA-NLI"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/JORGE%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0pPUkdFIEFOVEVTIDEgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4Mzg2MCwiZXhwIjoxOTM3MjYzODYwfQ.bGMFy8NskRsiyE8EuPlgJ9L9KJ_-79PND0oyTw67Q1w",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/JORGE%20DESPUES%202%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0pPUkdFIERFU1BVRVMgMiBDT1JSRUdJRE8ucG5nIiwiaWF0IjoxNzc5NTg1MDA0LCJleHAiOjE5MzcyNjUwMDR9.N_J_SUeHe1oO4Woa2WsW_e3oszeMftF6mSbTu7ZX23c"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/KATIE%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0tBVElFIEFOVEVTIDEgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4MzkwNiwiZXhwIjoxOTM3MjYzOTA2fQ.YS1rCcifL_mRdvCknbBkYDnFkjXHeBhGZdQ0WsR1dBE",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/KATIE%20DESPUES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL0tBVElFIERFU1BVRVMgMSBDT1JSRUdJRE8ucG5nIiwiaWF0IjoxNzc5NTg1MTg4LCJleHAiOjE5MzcyNjUxODh9.oVhTEufxhJMj1rTuH9MBxGfMohQaMTsQfZQ_76FmR2o"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/MONICA%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL01PTklDQSBBTlRFUyAxIENPUlJFR0lETy5wbmciLCJpYXQiOjE3Nzk1ODM5NzksImV4cCI6MTkzNzI2Mzk3OX0.y0Gwaq2An3grOw31G0yGU21GWlBjxO6j05H8phEC2NU",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/MONICA%20DESPUES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL01PTklDQSBERVNQVUVTIDEgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4NTIzMCwiZXhwIjoxOTM3MjY1MjMwfQ.DPVDbfnj2kce08l82PuX6ludN-NKIv1QFqwc6UXcb1Y"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/OMAR%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL09NQVIgQU5URVMgMSBDT1JSRUdJRE8ucG5nIiwiaWF0IjoxNzc5NTg0MDU0LCJleHAiOjE5MzcyNjQwNTR9.uFc_ezePwfM8l6v0omXCSry6Vt13Y88yVh-yghpN_B0",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/OMAR%20DESPUES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL09NQVIgREVTUFVFUyAxIENPUlJFR0lETy5wbmciLCJpYXQiOjE3Nzk1ODUyNjgsImV4cCI6MTkzNzI2NTI2OH0.8brqUCetcHpkT_5BwfFqrkJdAaGN4__UlwAbSSsEb_Y"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/PAU%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1BBVSBBTlRFUyAxIENPUlJFR0lETy5wbmciLCJpYXQiOjE3Nzk1ODQwODgsImV4cCI6MTkzNzI2NDA4OH0.CLImRnirgrVDfJN8ARbquZr42fGiQxH_-nBvh4FAq2s",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/PAU%20DESPUES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1BBVSBERVNQVUVTIDEgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4NTMxNywiZXhwIjoxOTM3MjY1MzE3fQ.fQJ0nn-VVUkR1FLxMPgKOoJX__HVviPu6p3sTvUwGQc"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/PAU%20ANTES%202%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1BBVSBBTlRFUyAyIENPUlJFR0lETy5wbmciLCJpYXQiOjE3Nzk1ODQxNjgsImV4cCI6MTkzNzI2NDE2OH0.tGYWpYsFCW8Si_GbupsZ3ZKKV5-JD7DhMDbgr9fc2KU",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/PAU%20DESPUES%202%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1BBVSBERVNQVUVTIDIgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4NTM1MSwiZXhwIjoxOTM3MjY1MzE3fQ.WVXQmeqaN9Pd7063sqIpDswyV0hG_EA4_YrIV0S75YI"
  },
  {
    antes: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/VANIA%20ANTES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1ZBTklBIEFOVEVTIDEgQ09SUkVHSURPLnBuZyIsImlhdCI6MTc3OTU4NDIyMCwiZXhwIjoxOTM3MjY0MjIwfQ.jGQTF1Q5Y1-44uP3lMzKkwWPhahls18urMtxVEeazKs",
    despues: "https://mmbmcgjqfzmlsibnpbyl.supabase.co/storage/v1/object/sign/Focus/ANTES-DESPUES/VANIA%20DESPUES%201%20CORREGIDO.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjRmNjhlYS05MmFiLTRkMTItOGZiNi0yMjkzMWI0NTFiYzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGb2N1cy9BTlRFUy1ERVNQVUVTL1ZBTklBIERFU1BVRVMgMSBDT1JSRUdJRE8ucG5nIiwiaWF0IjoxNzc5NTg1NDU0LCJleHAiOjE5MzcyNjU0NTR9.5u2QknQzjV5Qh2ZAse9IC3uxI8QARkTpzANaUDSyEvY"
  }
];

const marqueeStyles = `
  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-scroll-left {
    animation: scroll-left var(--speed, 40s) linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right var(--speed, 40s) linear infinite;
  }
  .group\\/row:hover .animate-scroll-left,
  .group\\/row:hover .animate-scroll-right {
    animation-play-state: paused;
  }
  .carousel-paused .animate-scroll-left,
  .carousel-paused .animate-scroll-right {
    animation-play-state: paused !important;
  }
`;

const MarqueeRow = ({ pairs, direction = "left", speed = 40, language, onPairClick }: { pairs: { antes: string, despues: string }[], direction?: "left" | "right", speed?: number, language: 'es' | 'en', onPairClick: (pair: {antes: string, despues: string}) => void }) => {
  // Duplicate pairs to create a seamless loop
  const duplicatedPairs = [...pairs, ...pairs];

  return (
    <div className="relative w-full overflow-hidden bg-[#0B0B0B] py-2 md:py-4 group/row">
      <style>{marqueeStyles}</style>
      
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
      
      <div
        className={`flex gap-4 md:gap-6 w-max animate-scroll-${direction}`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {duplicatedPairs.map((pair, index) => (
          <div 
            key={index} 
            onClick={() => onPairClick(pair)}
            className="w-[300px] sm:w-[400px] md:w-[600px] h-[350px] sm:h-[450px] md:h-[600px] shrink-0 border border-olive/20 rounded-sm overflow-hidden relative group bg-black flex transition-all duration-500 group-hover/row:opacity-40 hover:!opacity-100 hover:scale-[1.02] hover:z-10 hover:border-olive hover:shadow-[0_0_30px_rgba(118,132,85,0.3)] items-stretch cursor-pointer"
          >
            {/* Antes Side */}
            <div className="w-1/2 relative border-r border-olive/20 group-hover:grayscale-0 grayscale transition-all duration-700">
               <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 bg-black/80 text-olive text-[8px] md:text-[10px] font-black tracking-widest px-2 py-1 stencil shadow-md">
                 {language === 'es' ? 'ANTES' : 'BEFORE'}
               </div>
               {/* Face Blur overlay on top 15% */}
               <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[12px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
               <img 
                 src={pair.antes} 
                 alt="Antes" 
                 className="w-full h-full object-cover pointer-events-none"
               />
               <div className="absolute inset-0 bg-olive/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none duration-500" />
            </div>

            {/* Despues Side */}
            <div className="w-1/2 relative group-hover:grayscale-0 grayscale transition-all duration-700">
               <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-olive text-black text-[8px] md:text-[10px] font-black tracking-widest px-2 py-1 stencil shadow-md">
                 {language === 'es' ? 'DESPUÉS' : 'AFTER'}
               </div>
               {/* Face Blur overlay on top 15% */}
               <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[12px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
               <img 
                 src={pair.despues} 
                 alt="Despues" 
                 className="w-full h-full object-cover pointer-events-none"
               />
               <div className="absolute inset-0 bg-olive/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none duration-500" />
            </div>

            {/* Fallback pattern in case image fails to load */}
            <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(118,132,85,0.4)_1px,transparent_0)] bg-[length:20px_20px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TransformationsCarousel = ({ language }: { language: 'es' | 'en' }) => {
  const [selectedPair, setSelectedPair] = useState<{antes: string, despues: string} | null>(null);

  return (
    <>
      <div className={`w-full space-y-4 md:space-y-8 overflow-hidden relative pt-4 pb-12 ${selectedPair ? 'carousel-paused' : ''}`}>
        {/* Accent Backgrounds */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-olive/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-olive/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <MarqueeRow 
          pairs={pairedPhotos.slice(0, 6)} 
          direction="left" 
          speed={75} 
          language={language}
          onPairClick={setSelectedPair}
        />
        <MarqueeRow 
          pairs={pairedPhotos.slice(6)} 
          direction="right" 
          speed={75} 
          language={language}
          onPairClick={setSelectedPair}
        />
      </div>

      <AnimatePresence>
        {selectedPair && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPair(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#0B0B0B] border border-olive/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(118,132,85,0.2)]"
            >
              <button
                onClick={() => setSelectedPair(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/50 border border-olive/30 text-smoke hover:bg-olive hover:text-black hover:border-olive transition-all rounded-full"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row w-full h-[85vh] md:h-[85vh] bg-[#000000]">
                {/* Antes */}
                <div className="w-full h-1/2 md:w-1/2 md:h-full relative border-b md:border-b-0 md:border-r border-olive/20 group pb-2 md:pb-0">
                  <div className="absolute top-2 left-2 z-20 bg-black/80 text-olive text-[10px] md:text-sm font-black tracking-widest px-2 md:px-3 py-1 font-mono shadow-md">
                    {language === 'es' ? 'ANTES' : 'BEFORE'}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[16px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
                  <img
                    src={selectedPair.antes}
                    alt="Antes"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Despues */}
                <div className="w-full h-1/2 md:w-1/2 md:h-full relative group pt-2 md:pt-0">
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-olive text-black text-[10px] md:text-sm font-black tracking-widest px-2 md:px-3 py-1 font-mono shadow-md">
                    {language === 'es' ? 'DESPUÉS' : 'AFTER'}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[16px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
                  <img
                    src={selectedPair.despues}
                    alt="Despues"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
