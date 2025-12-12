// PART 1/3 - imports, data, state & handlers
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaGitAlt, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiCplusplus, SiC } from 'react-icons/si';

/*
  Next-level Skills Aquarium
  - Real waves
  - Rising bubbles
  - Light rays
  - Neon pulsing border
  - Fish movement
*/

const skillItems = [
  { id: 'java', icon: <FaJava />, color: '#f0ad4e', size: 42, name: 'Java' },
  { id: 'python', icon: <FaPython />, color: '#3572A5', size: 46, name: 'Python' },
  { id: 'react', icon: <FaReact />, color: '#61DBFB', size: 52, name: 'React' },
  { id: 'mysql', icon: <SiMysql />, color: '#00758F', size: 46, name: 'MySQL' },
  { id: 'git', icon: <FaGitAlt />, color: '#F34F29', size: 44, name: 'Git' },
  { id: 'cpp', icon: <SiCplusplus />, color: '#00599C', size: 46, name: 'C++' },
  { id: 'js', icon: <FaJs />, color: '#F0DB4F', size: 50, name: 'JavaScript' },
  { id: 'mongo', icon: <SiMongodb />, color: '#589636', size: 46, name: 'MongoDB' },
  { id: 'html', icon: <FaHtml5 />, color: '#E34F26', size: 48, name: 'HTML' },
  { id: 'css', icon: <FaCss3Alt />, color: '#1572B6', size: 46, name: 'CSS' },
  { id: 'c', icon: <SiC />, color: '#A8B9CC', size: 44, name: 'C' },
];

const rand = (min, max) => Math.random() * (max - min) + min;

export default function SkillsAquarium() {
  const tankRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: null, y: null });
  const [timeTick, setTimeTick] = useState(0);

  // fish
  const [fishData, setFishData] = useState(
    skillItems.map((item) => ({
      ...item,
      x: rand(10, 90),
      y: rand(10, 80),
      vx: rand(-0.06, 0.06),
      vy: rand(-0.04, 0.04),
      scale: 0.95 + Math.random() * 0.12,
      waveOffset: Math.random() * Math.PI * 2,
      hover: false,
    }))
  );

  // bubbles
  const [bubbles, setBubbles] = useState(
    Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      size: rand(4, 10),
      left: rand(1, 99),
      bottom: -rand(0, 200),
      riseSpeed: rand(0.3, 1.2),
      sway: rand(1.5, 3.5),
      popped: false,
      popAnim: 0,
    }))
  );

  // plankton
  const [planktons] = useState(
    Array.from({ length: 30 }).map((_, i) => ({
      id: `p-${i}`,
      left: rand(0, 100),
      top: rand(10, 90),
      size: rand(1.5, 4),
      speed: rand(6, 20),
      opacity: rand(0.06, 0.18),
    }))
  );

  const handleMouseMove = (e) => {
    if (!tankRef.current) return;
    const rect = tankRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => setCursorPos({ x: null, y: null });

  const handleFishEnter = (id) =>
    setFishData((prev) => prev.map((f) => (f.id === id ? { ...f, hover: true } : f)));

  const handleFishLeave = (id) =>
    setFishData((prev) => prev.map((f) => (f.id === id ? { ...f, hover: false } : f)));

  /* ---------------- Animation loop ---------------- */
  useEffect(() => {
    let raf = null;

    const tick = () => {
      setTimeTick((t) => t + 1);

      /* fish movement */
      setFishData((prev) =>
        prev.map((fish) => {
          let { x, y, vx, vy, waveOffset } = fish;
          const t = Date.now() / 1000;

          const wobbleX = Math.sin(t * 0.6 + waveOffset) * 0.03;
          const wobbleY = Math.cos(t * 0.8 + waveOffset) * 0.02;

          if (cursorPos.x !== null && tankRef.current) {
            const targetX = (cursorPos.x / tankRef.current.offsetWidth) * 100;
            const targetY = (cursorPos.y / tankRef.current.offsetHeight) * 100;
            vx += (targetX - x) * 0.0008;
            vy += (targetY - y) * 0.0009;
          }

          vx += wobbleX * 0.2;
          vy += wobbleY * 0.2;
          vx *= 0.995;
          vy *= 0.995;
          x += vx;
          y += vy;

          if (x < 4) { x = 4; vx = Math.abs(vx) * 0.6; }
          if (x > 96) { x = 96; vx = -Math.abs(vx) * 0.6; }
          if (y < 6) { y = 6; vy = Math.abs(vy) * 0.6; }
          if (y > 88) { y = 88; vy = -Math.abs(vy) * 0.6; }

          return { ...fish, x, y, vx, vy };
        })
      );

      // bubbles
      setBubbles((prev) =>
        prev.map((b) => {
          if (b.popped) {
            const next = { ...b, popAnim: b.popAnim + 1 };
            if (next.popAnim > 8) {
              return {
                ...b,
                left: rand(1, 99),
                bottom: -rand(20, 200),
                size: rand(4, 10),
                riseSpeed: rand(0.3, 1.2),
                sway: rand(1.5, 3.5),
                popped: false,
                popAnim: 0,
              };
            }
            return next;
          } else {
            let nb = b.bottom + b.riseSpeed;
            const swayAmount = Math.sin((Date.now() / 1000) * b.sway + b.id) * 0.6;
            let nleft = b.left + swayAmount * 0.02;
            if (nb > 440) {
              return { ...b, popped: true, popAnim: 0 };
            }
            return { ...b, bottom: nb, left: nleft };
          }
        })
      );

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cursorPos]);

  /* ---------------- Render ---------------- */
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-400 drop-shadow-lg">
        My Skills Aquarium
      </h2>

      <div
        ref={tankRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl neonTank"
        style={{
          height: 520,
          background:
            'radial-gradient(1200px 400px at 50% 10%, rgba(80,128,200,0.06), rgba(10,18,36,0.95))',
          border: "4px solid rgba(150, 80, 255, 0.5)",
        }}
      >

        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 to-transparent mix-blend-screen opacity-8 pointer-events-none" />

        {/* Caustics */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02), transparent 10%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.018), transparent 8%)',
            mixBlendMode: 'overlay',
            animation: 'causticsMove 12s linear infinite',
            opacity: 0.5,
          }}
        />

        {/* Light rays */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="rayGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <g style={{ mixBlendMode: 'screen', opacity: 0.25 }}>
            <rect x="10%" y="-10%" width="6%" height="100%" fill="url(#rayGrad)" transform="skewX(-12)" />
            <rect x="40%" y="-10%" width="6%" height="100%" fill="url(#rayGrad)" transform="skewX(-8)" />
            <rect x="70%" y="-10%" width="6%" height="100%" fill="url(#rayGrad)" transform="skewX(-14)" />
          </g>
        </svg>

        {/* Waves */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 80">
          <motion.path
            fill="#07102a"
            d="M0,36 C360,56 1080,16 1440,36 L1440,0 L0,0 Z"
            animate={{
              d: [
                'M0,36 C360,56 1080,16 1440,36 L1440,0 L0,0 Z',
                'M0,36 C360,16 1080,56 1440,36 L1440,0 L0,0 Z',
                'M0,36 C360,46 1080,26 1440,36 L1440,0 L0,0 Z',
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>

        {/* Plankton */}
        {planktons.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: 'blur(0.4px)',
            }}
            animate={{ x: [0, 6, -4, 0], y: [0, -3, 2, 0] }}
            transition={{ duration: p.speed, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Bubbles */}
        {bubbles.map((b) => (
          <AnimatePresence key={b.id}>
            {!b.popped ? (
              <motion.div
                className="absolute rounded-full bg-white/40"
                style={{
                  width: b.size,
                  height: b.size,
                  left: `${b.left}%`,
                  bottom: b.bottom,
                  filter: 'blur(0.4px)',
                }}
                animate={{ scale: [1, 1.06, 0.98] }}
                transition={{ duration: 2 + b.size / 10, repeat: Infinity }}
              />
            ) : (
              <motion.div
                className="absolute rounded-full bg-white/60"
                style={{
                  width: b.size * 1.8,
                  height: b.size * 1.8,
                  left: `${b.left}%`,
                  bottom: 430,
                  opacity: 0.95,
                  pointerEvents: 'none',
                }}
                initial={{ scale: 0.6, opacity: 0.9 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            )}
          </AnimatePresence>
        ))}

        {/* FISH */}
        {fishData.map((fish) => {
          const angle = Math.atan2(fish.vy, fish.vx) * (180 / Math.PI);
          const wave = Math.sin(Date.now() / 300 + fish.waveOffset) * 6;

          return (
            <div
              key={fish.id}
              className="absolute flex items-center justify-center cursor-pointer"
              style={{
                left: `${fish.x}%`,
                top: `${fish.y}%`,
                transform: `translate(-50%, -50%) scale(${fish.hover ? fish.scale * 1.25 : fish.scale}) rotate(${angle + wave}deg)`,
                transition: 'transform 120ms linear',
                zIndex: 50,
              }}
              onMouseEnter={() => handleFishEnter(fish.id)}
              onMouseLeave={() => handleFishLeave(fish.id)}
              title={fish.name}
            >
              {/* Glow Halo */}
              <div
                style={{
                  position: 'absolute',
                  width: fish.size + (fish.hover ? 34 : 18),
                  height: fish.size + (fish.hover ? 34 : 18),
                  borderRadius: '999px',
                  background: `radial-gradient(circle, ${fish.color}30 0%, transparent 45%)`,
                  filter: fish.hover ? 'blur(10px)' : 'blur(6px)',
                  zIndex: -1,
                }}
              />
              <div
                style={{
                  width: fish.size,
                  height: fish.size,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: fish.color,
                }}
              >
                {React.cloneElement(fish.icon, { size: fish.size })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Neon Pulsing Animation */}
      <style jsx>{`
        .neonTank {
          animation: neonPulse 3.5s ease-in-out infinite;
        }

        @keyframes neonPulse {
          0% {
            box-shadow:
              0 0 18px #7b2ff780,
              0 0 34px #a855f780 inset,
              0 0 18px #7b2ff750 inset;
          }
          50% {
            box-shadow:
              0 0 30px #b26bff90,
              0 0 60px #d58cff80 inset,
              0 0 26px #a76cff80 inset;
          }
          100% {
            box-shadow:
              0 0 18px #7b2ff780,
              0 0 34px #a855f780 inset,
              0 0 18px #7b2ff750 inset;
          }
        }

        @keyframes causticsMove {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-6%, -2%, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
      `}</style>
    </section>
  );
}
