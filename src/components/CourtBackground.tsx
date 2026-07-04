import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const CourtBackground: React.FC = () => {
  // ── Scroll Parallax ──
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, { stiffness: 80, damping: 30, restDelta: 0.001 });
  
  // Create parallax ranges (adjusting based on scroll depth)
  const yLayer1 = useTransform(scrollYSpring, [0, 3000], [0, -100]);
  const yLayer2 = useTransform(scrollYSpring, [0, 3000], [0, -200]);
  const yLayer3 = useTransform(scrollYSpring, [0, 3000], [0, -30]);

  // ── Mouse Parallax ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 30, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Use a default window width/height, safe for SPA
  const winWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const winHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  const xLayer1 = useTransform(smoothMouseX, [0, winWidth], [-15, 15]);
  const yMouseLayer1 = useTransform(smoothMouseY, [0, winHeight], [-15, 15]);
  
  const xLayer2 = useTransform(smoothMouseX, [0, winWidth], [10, -10]);
  const yMouseLayer2 = useTransform(smoothMouseY, [0, winHeight], [10, -10]);
  
  const xLayer3 = useTransform(smoothMouseX, [0, winWidth], [-5, 5]);
  const yMouseLayer3 = useTransform(smoothMouseY, [0, winHeight], [-5, 5]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // ── Easter Egg Trajectory ──
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 900); // Lasts less than a second
    }, 25000); // Trigger every 25 seconds (20-30s range)

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      style={{
        // Radial mask perfectly fades out the background in the center to prioritize readability
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 60%, transparent 95%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 60%, transparent 95%)'
      }}
    >
      
      {/* Layer 3: Farthest Background (Slowest, largest, lowest base opacity) */}
      <motion.div 
        style={{ y: yLayer3, x: xLayer3 }}
        className="absolute inset-0 flex justify-center items-center opacity-40 text-optic-green"
      >
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0], scale: [1, 1.02, 1, 0.98, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        >
          <CourtPCBSvg scale={3} />
        </motion.div>
      </motion.div>

      {/* Layer 2: Middle Background (Medium speed, angled opposite) */}
      <motion.div 
        style={{ y: yLayer2, x: xLayer2 }}
        className="absolute right-[-30%] top-[-10%] opacity-60 text-optic-green"
      >
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [-15, -14.5, -15] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        >
          <CourtPCBSvg scale={1.5} />
        </motion.div>
      </motion.div>

      {/* Layer 1: Foreground (Fastest, highest base opacity 100% of the SVG's internal hierarchy) */}
      <motion.div 
        style={{ y: yLayer1, x: xLayer1 }}
        className="absolute left-[-20%] bottom-[5%] opacity-100 text-optic-green"
      >
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [15, 15.5, 15] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        >
          <CourtPCBSvg scale={2} />
        </motion.div>
      </motion.div>

      {/* Easter Egg Trajectory */}
      {showEasterEgg && (
        <div className="absolute inset-0 flex justify-center items-center opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
            <motion.path
              d="M -100 900 Q 500 200 1100 900"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

// ── SVG that combines Badminton Court with PCB Traces ──
// We define the specific 5-8% / 3-5% / 1-2% visual hierarchy natively in the SVG strokes.
const CourtPCBSvg: React.FC<{scale?: number}> = ({ scale = 1 }) => (
  <svg width={1000 * scale} height={800 * scale} viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* LAYER 1: PCB Traces & Vias (6% Opacity) */}
    <g opacity="0.06" stroke="currentColor" fill="none" strokeWidth="1.5">
      {/* Top Left Trace */}
      <path d="M 165 247.5 L 115 197.5 L 50 197.5" />
      <circle cx="50" cy="197.5" r="3" fill="currentColor" />
      {/* Top Right Trace */}
      <path d="M 835 247.5 L 885 197.5 L 950 197.5" />
      <circle cx="950" cy="197.5" r="3" fill="currentColor" />
      {/* Bottom Left Trace */}
      <path d="M 165 552.5 L 165 600 L 115 650 L 50 650" />
      <circle cx="50" cy="650" r="3" fill="currentColor" />
      {/* Bottom Right Trace */}
      <path d="M 835 552.5 L 835 600 L 885 650 L 950 650" />
      <circle cx="950" cy="650" r="3" fill="currentColor" />
      {/* Mid Traces extending from Net */}
      <path d="M 500 220 L 500 170 L 550 120 L 650 120" />
      <circle cx="650" cy="120" r="3" fill="currentColor" />
      <path d="M 500 580 L 500 630 L 450 680 L 350 680" />
      <circle cx="350" cy="680" r="3" fill="currentColor" />
      
      {/* Inner PCB 'Vias' disguised as court T-junction markers */}
      <circle cx="401" cy="400" r="2.5" fill="currentColor" />
      <circle cx="599" cy="400" r="2.5" fill="currentColor" />
      <circle cx="203" cy="247.5" r="2.5" fill="currentColor" />
      <circle cx="797" cy="247.5" r="2.5" fill="currentColor" />
      <circle cx="203" cy="552.5" r="2.5" fill="currentColor" />
      <circle cx="797" cy="552.5" r="2.5" fill="currentColor" />
    </g>

    {/* LAYER 2: Secondary Court Markings (12% Opacity) */}
    <g opacity="0.12" stroke="currentColor" fill="none">
      {/* Singles Sidelines */}
      <rect x="165" y="270.5" width="670" height="259" strokeWidth="1.5" />
      {/* Center Line (Left and Right sides of court) */}
      <line x1="165" y1="400" x2="401" y2="400" strokeWidth="1.5" />
      <line x1="599" y1="400" x2="835" y2="400" strokeWidth="1.5" />
      {/* Short Service Lines */}
      <line x1="401" y1="247.5" x2="401" y2="552.5" strokeWidth="1.5" />
      <line x1="599" y1="247.5" x2="599" y2="552.5" strokeWidth="1.5" />
      {/* Long Service Lines (Doubles) */}
      <line x1="203" y1="247.5" x2="203" y2="552.5" strokeWidth="1.5" />
      <line x1="797" y1="247.5" x2="797" y2="552.5" strokeWidth="1.5" />
    </g>

    {/* LAYER 3: Primary Court Boundaries with Emerald Glow (20% Opacity) */}
    <g opacity="0.20" stroke="currentColor" fill="none" filter="url(#emeraldGlow)">
      {/* Outer Doubles Boundary (13.4m x 6.1m exact ratio) */}
      <rect x="165" y="247.5" width="670" height="305" strokeWidth="2.5" />
      {/* The Net */}
      <line x1="500" y1="220" x2="500" y2="580" strokeWidth="3" strokeDasharray="10 6" />
      <circle cx="500" cy="220" r="4" fill="currentColor" />
      <circle cx="500" cy="580" r="4" fill="currentColor" />
    </g>
  </svg>
);

export default CourtBackground;
