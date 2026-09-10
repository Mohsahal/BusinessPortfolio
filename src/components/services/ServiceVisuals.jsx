import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * 3D Neural Network Visual for AI AUTOMATION
 * Uses HTML5 Canvas for ultra-smooth 60fps node interconnectivity,
 * glowing synaptic pulses, and reactive particle physics.
 */
export function NeuralNetworkVisual({ isHovered }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const width = (canvas.width = 160);
    const height = (canvas.height = 140);

    // Network nodes in 3 layers (Input -> Hidden -> Output)
    const nodes = [
      // Layer 1
      { x: 30, y: 35, vx: 0.2, vy: 0.15, radius: 4.5, baseColor: "#1a1a1a" },
      { x: 28, y: 70, vx: -0.15, vy: 0.2, radius: 5, baseColor: "#111111" },
      { x: 32, y: 105, vx: 0.1, vy: -0.2, radius: 4, baseColor: "#222222" },
      // Layer 2
      { x: 80, y: 25, vx: -0.2, vy: 0.1, radius: 5.5, baseColor: "#000000" },
      { x: 78, y: 55, vx: 0.25, vy: -0.15, radius: 6, baseColor: "#000000" },
      { x: 82, y: 88, vx: -0.1, vy: 0.2, radius: 5, baseColor: "#111111" },
      { x: 80, y: 118, vx: 0.15, vy: -0.1, radius: 4.5, baseColor: "#222222" },
      // Layer 3
      { x: 130, y: 45, vx: -0.15, vy: 0.2, radius: 5, baseColor: "#000000" },
      { x: 132, y: 75, vx: 0.2, vy: -0.1, radius: 6.5, baseColor: "#000000" },
      { x: 128, y: 105, vx: -0.1, vy: 0.15, radius: 5, baseColor: "#1a1a1a" }
    ];

    // Synapses connecting layers
    const connections = [
      [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
      [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [5, 8], [5, 9], [6, 8], [6, 9]
    ];

    // Travelling neural pulses
    const pulses = [
      { connIdx: 0, progress: 0.1, speed: 0.015 },
      { connIdx: 4, progress: 0.5, speed: 0.02 },
      { connIdx: 9, progress: 0.8, speed: 0.025 },
      { connIdx: 12, progress: 0.3, speed: 0.018 },
      { connIdx: 7, progress: 0.65, speed: 0.022 }
    ];

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.03;

      const speedMultiplier = isHovered ? 1.7 : 1.0;

      // Draw connections
      connections.forEach(([fromIdx, toIdx], i) => {
        const from = nodes[fromIdx];
        const to = nodes[toIdx];

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = isHovered ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.12)";
        ctx.lineWidth = isHovered ? 1.5 : 1.2;
        ctx.stroke();
      });

      // Draw active pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed * speedMultiplier;
        if (pulse.progress > 1) {
          pulse.progress = 0;
          pulse.connIdx = Math.floor(Math.random() * connections.length);
        }

        const [fromIdx, toIdx] = connections[pulse.connIdx];
        const from = nodes[fromIdx];
        const to = nodes[toIdx];

        const px = from.x + (to.x - from.x) * pulse.progress;
        const py = from.y + (to.y - from.y) * pulse.progress;

        // Glowing pulse head
        ctx.beginPath();
        ctx.arc(px, py, isHovered ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#000000" : "#444444";
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = isHovered ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        // Jitter / breathing
        const breathe = Math.sin(t + i * 1.5) * (isHovered ? 1.8 : 0.9);
        const curRadius = Math.max(2, node.radius + breathe * 0.4);

        // Node halo
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, curRadius + 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
          ctx.fill();
        }

        // Main node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, curRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#000000" : node.baseColor;
        ctx.fill();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(node.x - curRadius * 0.25, node.y - curRadius * 0.25, curRadius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div className="relative w-36 h-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <canvas
        ref={canvasRef}
        className="w-36 h-32 object-contain"
        style={{ width: 144, height: 128 }}
      />
    </div>
  );
}

/**
 * 3D Isometric Software Stack Visual for CUSTOM SOFTWARE
 */
export function SoftwareStackVisual({ isHovered }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center perspective-[600px]">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <motion.svg
        viewBox="0 0 120 120"
        className="w-28 h-28 drop-shadow-md"
        animate={{
          rotateX: isHovered ? 18 : 12,
          rotateY: isHovered ? -16 : -10,
          y: isHovered ? -4 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="softGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c2d30" />
            <stop offset="100%" stopColor="#121214" />
          </linearGradient>
          <linearGradient id="softGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a4b50" />
            <stop offset="100%" stopColor="#25262a" />
          </linearGradient>
          <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#555555" />
          </linearGradient>
        </defs>

        {/* Bottom Platform Layer (Database / API) */}
        <motion.g
          animate={{ y: isHovered ? 4 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M60 78 L98 58 L60 38 L22 58 Z" fill="#e5e5e5" stroke="#cccccc" strokeWidth="1.5" />
          <path d="M22 58 L60 78 L60 88 L22 68 Z" fill="#d4d4d4" />
          <path d="M60 78 L98 58 L98 68 L60 88 Z" fill="#bfbfbf" />
        </motion.g>

        {/* Middle Platform Layer (Backend Microservices) */}
        <motion.g
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M60 62 L94 44 L60 26 L26 44 Z" fill="url(#softGrad2)" />
          <path d="M26 44 L60 62 L60 70 L26 52 Z" fill="#1f2022" />
          <path d="M60 62 L94 44 L94 52 L60 70 Z" fill="#151618" />
          
          {/* Internal circuit / code grid */}
          <line x1="42" y1="42" x2="78" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="48" cy="42" r="2" fill="#ffffff" />
          <circle cx="72" cy="42" r="2" fill="#ffffff" />
        </motion.g>

        {/* Top Floating Application Screen */}
        <motion.g
          animate={{ y: isHovered ? -12 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M60 46 L90 30 L60 14 L30 30 Z" fill="url(#softGrad1)" stroke="#555" strokeWidth="1" />
          
          {/* Code brackets and prompt */}
          <text x="50" y="32" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="monospace">{"< / >"}</text>
          
          {/* Status dots */}
          <circle cx="39" cy="28" r="1.5" fill="#ef4444" />
          <circle cx="43" cy="26" r="1.5" fill="#f59e0b" />
          <circle cx="47" cy="24" r="1.5" fill="#10b981" />
        </motion.g>

        {/* Vertical Data Connection Laser Beam */}
        <motion.line
          x1="60"
          y1="14"
          x2="60"
          y2="88"
          stroke={isHovered ? "#000000" : "#888888"}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          animate={{ strokeDashoffset: isHovered ? [0, -14] : [0, -7] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}

/**
 * 3D Isometric Mobile Visual for MOBILE DEVELOPMENT
 */
export function MobilePlatformVisual({ isHovered }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center perspective-[600px]">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <motion.svg
        viewBox="0 0 120 120"
        className="w-28 h-28 drop-shadow-md"
        animate={{
          rotateX: isHovered ? 16 : 10,
          rotateY: isHovered ? -14 : -8,
          rotateZ: isHovered ? -4 : -2,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1e20" />
            <stop offset="100%" stopColor="#0a0a0c" />
          </linearGradient>
          <linearGradient id="screenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f2" />
          </linearGradient>
        </defs>

        {/* Phone Chassis Base */}
        <rect x="36" y="20" width="48" height="82" rx="10" fill="url(#phoneBody)" stroke="#333" strokeWidth="1.5" />
        
        {/* Dynamic Island / Speaker */}
        <rect x="52" y="24" width="16" height="3" rx="1.5" fill="#333" />

        {/* Screen Area */}
        <rect x="40" y="30" width="40" height="66" rx="6" fill="url(#screenGlass)" />

        {/* App UI Modules */}
        <motion.rect
          x="44"
          y="35"
          width="32"
          height="14"
          rx="3"
          fill="#1c1c1e"
          animate={{ y: isHovered ? 34 : 35 }}
        />
        <rect x="44" y="53" width="14" height="18" rx="3" fill="#e2e4e8" />
        <rect x="62" y="53" width="14" height="18" rx="3" fill="#e2e4e8" />
        <rect x="44" y="75" width="32" height="16" rx="3" fill="#000000" opacity="0.85" />

        {/* Floating Notification Pill */}
        <motion.g
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
        >
          <rect x="56" y="10" width="46" height="18" rx="9" fill="#000000" stroke="#ffffff" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))" />
          <circle cx="65" cy="19" r="3" fill="#22c55e" />
          <rect x="72" y="16" width="22" height="3" rx="1.5" fill="#ffffff" />
          <rect x="72" y="21" width="14" height="2" rx="1" fill="#9ca3af" />
        </motion.g>

        {/* Swipe gesture indicator */}
        <rect x="52" y="92" width="16" height="2" rx="1" fill="#666" />
      </motion.svg>
    </div>
  );
}

/**
 * 3D Isometric Design Canvas Visual for UI/UX DESIGN
 */
export function DesignCanvasVisual({ isHovered }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center perspective-[600px]">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <motion.svg
        viewBox="0 0 120 120"
        className="w-28 h-28 drop-shadow-md"
        animate={{
          rotateX: isHovered ? 18 : 12,
          rotateY: isHovered ? -12 : -6,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="artboardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f4f6" />
          </linearGradient>
        </defs>

        {/* Base Grid Board */}
        <path d="M60 84 L102 60 L60 36 L18 60 Z" fill="url(#artboardGrad)" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M18 60 L60 84 L60 90 L18 66 Z" fill="#e5e7eb" />
        <path d="M60 84 L102 60 L102 66 L60 90 Z" fill="#d1d5db" />

        {/* Isometric Grid Lines */}
        <line x1="39" y1="48" x2="81" y2="72" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="39" y1="72" x2="81" y2="48" stroke="#e5e7eb" strokeWidth="1" />

        {/* Floating Bezier Curve */}
        <motion.path
          d="M32 62 Q60 34 88 56"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
          animate={{
            d: isHovered ? "M32 62 Q60 26 88 56" : "M32 62 Q60 34 88 56"
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Anchor handles */}
        <line x1="60" y1="34" x2="48" y2="28" stroke="#6b7280" strokeWidth="1.2" />
        <line x1="60" y1="34" x2="72" y2="40" stroke="#6b7280" strokeWidth="1.2" />
        
        {/* Anchor point squares */}
        <rect x="30" y="60" width="5" height="5" fill="#000000" />
        <rect x="86" y="54" width="5" height="5" fill="#000000" />
        <motion.rect
          x="58"
          y="32"
          width="6"
          height="6"
          fill="#3b82f6"
          stroke="#ffffff"
          strokeWidth="1"
          animate={{ y: isHovered ? 24 : 32 }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating Cursor / Pen Tool */}
        <motion.g
          animate={{
            x: isHovered ? 68 : 62,
            y: isHovered ? 18 : 28
          }}
          transition={{ duration: 0.5 }}
        >
          <path d="M0 0 L14 7 L8 9 L11 15 L8 16 L5 10 L0 14 Z" fill="#000000" stroke="#ffffff" strokeWidth="1" />
        </motion.g>

        {/* Floating Color Swatches */}
        <circle cx="82" cy="74" r="3.5" fill="#000000" />
        <circle cx="72" cy="78" r="3.5" fill="#4f46e5" />
        <circle cx="62" cy="82" r="3.5" fill="#06b6d4" />
      </motion.svg>
    </div>
  );
}

/**
 * 3D Isometric Cloud & Deployment Cluster for CLOUD & DEPLOYMENT
 */
export function CloudClusterVisual({ isHovered }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center perspective-[600px]">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <motion.svg
        viewBox="0 0 120 120"
        className="w-28 h-28 drop-shadow-md"
        animate={{
          rotateX: isHovered ? 16 : 10,
          rotateY: isHovered ? -14 : -8,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>

        {/* Server Rack Foundation */}
        <path d="M60 84 L96 64 L60 44 L24 64 Z" fill="url(#serverGrad)" stroke="#9ca3af" strokeWidth="1" />
        <path d="M24 64 L60 84 L60 92 L24 72 Z" fill="#9ca3af" />
        <path d="M60 84 L96 64 L96 72 L60 92 Z" fill="#6b7280" />

        {/* Server Status Lights */}
        <circle cx="38" cy="71" r="1.5" fill="#10b981" />
        <circle cx="44" cy="74" r="1.5" fill="#10b981" />
        <circle cx="50" cy="77" r="1.5" fill="#3b82f6" />

        {/* Docker Container Cube 1 */}
        <motion.g
          animate={{
            y: isHovered ? -4 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          <path d="M42 50 L56 42 L42 34 L28 42 Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1" />
          <path d="M28 42 L42 50 L42 58 L28 50 Z" fill="#1d4ed8" />
          <path d="M42 50 L56 42 L56 50 L42 58 Z" fill="#1e40af" />
        </motion.g>

        {/* Docker Container Cube 2 */}
        <motion.g
          animate={{
            y: isHovered ? -8 : 0
          }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <path d="M66 50 L80 42 L66 34 L52 42 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
          <path d="M52 42 L66 50 L66 58 L52 50 Z" fill="#0f172a" />
          <path d="M66 50 L80 42 L80 50 L66 58 Z" fill="#020617" />
        </motion.g>

        {/* Upper Floating Cloud Node */}
        <motion.g
          animate={{
            y: isHovered ? -12 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Cloud Outline / Volume */}
          <path
            d="M50 28 C45 28 40 32 40 37 C36 38 34 42 35 46 C35 50 39 53 44 53 L76 53 C81 53 85 49 85 44 C85 40 82 36 78 35 C77 28 70 23 63 23 C57 23 52 25 50 28 Z"
            fill="url(#cloudGrad)"
            stroke="#4b5563"
            strokeWidth="1.5"
          />
          {/* Synchronize Ring */}
          <circle cx="60" cy="40" r="6" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M60 36 L63 40 L57 40 Z" fill="#60a5fa" />
        </motion.g>

        {/* Pipeline / CI/CD Deployment Stream */}
        <motion.line
          x1="60"
          y1="54"
          x2="60"
          y2="82"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="4 3"
          animate={{ strokeDashoffset: isHovered ? [0, -14] : [0, -7] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}

/**
 * 3D Isometric AI Nexus / Core Visual for AI INTEGRATION
 */
export function AINexusVisual({ isHovered }) {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center perspective-[600px]">
      <div className="absolute inset-0 bg-neutral-900/5 rounded-2xl blur-md -z-10 group-hover:bg-neutral-900/10 transition-colors duration-500" />
      <motion.svg
        viewBox="0 0 120 120"
        className="w-28 h-28 drop-shadow-md"
        animate={{
          rotateX: isHovered ? 18 : 12,
          rotateY: isHovered ? -16 : -10,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <defs>
          <radialGradient id="aiCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
        </defs>

        {/* Orbiting Synapse Ring 1 */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="42"
          ry="18"
          fill="none"
          stroke={isHovered ? "#000000" : "#94a3b8"}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          animate={{
            rotate: [0, 360],
          }}
          style={{ originX: "60px", originY: "60px" }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        />

        {/* Orbiting Synapse Ring 2 (Cross tilt) */}
        <motion.ellipse
          cx="60"
          cy="60"
          rx="38"
          ry="16"
          fill="none"
          stroke={isHovered ? "#2563eb" : "#cbd5e1"}
          strokeWidth="1.2"
          strokeDasharray="4 4"
          transform="rotate(60 60 60)"
          animate={{
            rotate: [60, 420],
          }}
          style={{ originX: "60px", originY: "60px" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />

        {/* Floating LLM Token Satellites */}
        <motion.g
          animate={{
            y: isHovered ? -3 : 0
          }}
        >
          {/* Token 1 */}
          <circle cx="30" cy="52" r="4.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
          <text x="30" y="54" fill="#ffffff" fontSize="5" textAnchor="middle" fontWeight="bold">API</text>

          {/* Token 2 */}
          <circle cx="88" cy="42" r="4.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
          <text x="88" y="44" fill="#ffffff" fontSize="5" textAnchor="middle" fontWeight="bold">RAG</text>

          {/* Token 3 */}
          <circle cx="70" cy="85" r="4.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
          <text x="70" y="87" fill="#ffffff" fontSize="5" textAnchor="middle" fontWeight="bold">LLM</text>
        </motion.g>

        {/* Central 3D Cognitive Crystal / AI Core */}
        <motion.g
          animate={{
            scale: isHovered ? 1.12 : 1,
            y: isHovered ? -4 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Top Facet */}
          <polygon points="60,34 76,48 60,62 44,48" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.75" />
          {/* Left Facet */}
          <polygon points="44,48 60,62 60,86 44,72" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.75" />
          {/* Right Facet */}
          <polygon points="60,62 76,48 76,72 60,86" fill="#020617" stroke="#38bdf8" strokeWidth="0.75" />

          {/* Core Energy Pulse */}
          <circle cx="60" cy="60" r="5" fill="url(#aiCoreGlow)" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

/**
 * Dispatcher component to render the matching visual
 */
export default function ServiceVisual({ type, isHovered }) {
  switch (type) {
    case "neural-network":
      return <NeuralNetworkVisual isHovered={isHovered} />;
    case "software-stack":
      return <SoftwareStackVisual isHovered={isHovered} />;
    case "mobile-platform":
      return <MobilePlatformVisual isHovered={isHovered} />;
    case "design-canvas":
      return <DesignCanvasVisual isHovered={isHovered} />;
    case "cloud-cluster":
      return <CloudClusterVisual isHovered={isHovered} />;
    case "ai-nexus":
      return <AINexusVisual isHovered={isHovered} />;
    default:
      return <NeuralNetworkVisual isHovered={isHovered} />;
  }
}
