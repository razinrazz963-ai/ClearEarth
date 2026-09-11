import React from 'react';

/**
 * 1. Mobile & Tower Crane Hoist Animation
 * Demonstrates crane load winch, cable elongation test, and forged hook proof testing.
 */
export const CraneHoistAnimation: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 220"
        className={compact ? "w-28 h-28" : "w-44 h-44 sm:w-52 sm:h-52"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crane Boom / Jib Arm */}
        <path d="M20 30 H180 L170 48 H30 Z" fill="#0f2042" stroke="#1ea84b" strokeWidth="2" />
        {/* Lattice Truss Crossbars */}
        <line x1="40" y1="30" x2="60" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="60" y1="30" x2="40" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="80" y1="30" x2="100" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="100" y1="30" x2="80" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="120" y1="30" x2="140" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="140" y1="30" x2="120" y2="48" stroke="#1ea84b" strokeWidth="1.5" strokeOpacity="0.7" />

        {/* Top Trolley Sheave Wheel */}
        <circle cx="100" cy="48" r="9" fill="#f59e0b" stroke="#0f2042" strokeWidth="2" />
        <circle cx="100" cy="48" r="3" fill="#0f2042" />

        {/* Moving Cable & Pulley Block Group */}
        <g className="animate-crane-hoist">
          {/* Wire Rope Lines */}
          <line x1="94" y1="57" x2="94" y2="120" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="106" y1="57" x2="106" y2="120" stroke="#64748b" strokeWidth="2" strokeDasharray="3 2" />

          {/* Heavy Duty Traveling Pulley Sheave Block */}
          <rect x="86" y="120" width="28" height="24" rx="4" fill="#0f2042" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="100" cy="132" r="5" fill="#f59e0b" />

          {/* Hook Swivel & Shank with slight sway */}
          <g className="animate-crane-sway">
            <line x1="100" y1="144" x2="100" y2="152" stroke="#334155" strokeWidth="3" />
            {/* Forged Steel Hook */}
            <path
              d="M100 152 C95 152 87 156 87 168 C87 182 101 184 107 184 C117 184 122 176 122 168 C122 163 118 160 114 160 C110 160 108 163 108 167 C108 171 113 174 110 177 C106 180 97 178 96 168 C96 160 100 156 103 155 Z"
              fill="#1ea84b"
              stroke="#0f2042"
              strokeWidth="1.5"
            />
            {/* Safety Latch */}
            <line x1="98" y1="160" x2="114" y2="168" stroke="#ef4444" strokeWidth="1.5" />
            
            {/* Proof Load Test Certification Tag */}
            <rect x="110" y="148" width="22" height="11" rx="2" fill="#10b981" />
            <text x="112" y="156" fill="#ffffff" fontSize="6" fontWeight="bold" fontFamily="monospace">SWL 25T</text>
          </g>
        </g>
      </svg>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-mono font-bold tracking-tight border border-emerald-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>HOIST LOAD VERIFIED: OK</span>
      </div>
    </div>
  );
};

/**
 * 2. Hydraulic Excavator / Earth Moving Machinery Animation
 * Demonstrates articulated boom, hydraulic cylinder piston stroke, and bucket action.
 */
export const ExcavatorAnimation: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 180"
        className={compact ? "w-32 h-24" : "w-52 h-40 sm:w-60 sm:h-44"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Excavator Undercarriage / Tracks */}
        <rect x="20" y="140" width="80" height="22" rx="10" fill="#1e293b" stroke="#0f2042" strokeWidth="2" />
        <line x1="28" y1="151" x2="92" y2="151" stroke="#475569" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="34" cy="151" r="6" fill="#cbd5e1" stroke="#0f2042" strokeWidth="1.5" />
        <circle cx="50" cy="151" r="5" fill="#94a3b8" />
        <circle cx="68" cy="151" r="5" fill="#94a3b8" />
        <circle cx="86" cy="151" r="6" fill="#cbd5e1" stroke="#0f2042" strokeWidth="1.5" />

        {/* Revolving Superstructure & Operator Cab */}
        <path d="M25 140 H90 L85 110 H40 L25 140 Z" fill="#f59e0b" stroke="#0f2042" strokeWidth="2" />
        {/* Cab Glass Window */}
        <path d="M60 112 H82 L78 130 H55 Z" fill="#38bdf8" fillOpacity="0.4" stroke="#0284c7" strokeWidth="1.5" />
        {/* Counterweight */}
        <rect x="25" y="118" width="18" height="20" rx="3" fill="#0f2042" />

        {/* ARTICULATED BOOM (Rotates around Pivot at x=78, y=122) */}
        <g className="animate-excavator-boom">
          {/* Main Boom Arm */}
          <path d="M78 122 L120 70 L155 85 L115 130 Z" fill="#eab308" stroke="#0f2042" strokeWidth="2" />
          <circle cx="78" cy="122" r="4" fill="#0f2042" />
          <circle cx="150" cy="82" r="3.5" fill="#0f2042" />

          {/* Hydraulic Cylinder Piston */}
          <line x1="88" y1="135" x2="116" y2="92" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
          <line x1="116" y1="92" x2="128" y2="76" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

          {/* DIPPER STICK / ARM */}
          <g transform="translate(150, 82)">
            <path d="M0 0 L40 38 L30 46 L-4 6 Z" fill="#f59e0b" stroke="#0f2042" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#0f2042" />
            
            {/* BUCKET (Tilts around Stick End at x=35, y=42) */}
            <g transform="translate(35, 42)" className="animate-excavator-bucket">
              <path
                d="M0 0 C12 -4 28 6 24 22 C22 30 10 32 0 24 C-4 18 -6 8 0 0 Z"
                fill="#334155"
                stroke="#0f2042"
                strokeWidth="1.5"
              />
              {/* Bucket Teeth */}
              <polygon points="24,20 28,24 22,23" fill="#94a3b8" />
              <polygon points="21,26 25,30 19,28" fill="#94a3b8" />
              <polygon points="17,30 20,34 14,32" fill="#94a3b8" />
            </g>
          </g>
        </g>
      </svg>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-mono font-bold tracking-tight border border-amber-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
        <span>HYDRAULIC PRESSURE: 280 BAR (CALIBRATED)</span>
      </div>
    </div>
  );
};

/**
 * 3. Pressure Vessel Radial Gauge Animation
 * Demonstrates pressure relief calibration, statutory hydrotest range, and live oscillating dial needle.
 */
export const PressureGaugeAnimation: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 160"
        className={compact ? "w-28 h-28" : "w-40 h-40 sm:w-48 sm:h-48"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Heavy Stainless Steel Bezel */}
        <circle cx="80" cy="80" r="74" fill="#0f2042" stroke="#94a3b8" strokeWidth="4" />
        <circle cx="80" cy="80" r="68" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

        {/* Dial Scale Arcs */}
        {/* Safe Operating Range (Green Arc) */}
        <path
          d="M32 108 A 56 56 0 0 1 108 32"
          stroke="#10b981"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Caution Range (Amber Arc) */}
        <path
          d="M108 32 A 56 56 0 0 1 128 62"
          stroke="#f59e0b"
          strokeWidth="6"
        />
        {/* Critical Range (Red Arc) */}
        <path
          d="M128 62 A 56 56 0 0 1 136 94"
          stroke="#ef4444"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Dial Graduations / Ticks */}
        <line x1="32" y1="108" x2="38" y2="102" stroke="#0f2042" strokeWidth="2" />
        <line x1="36" y1="78" x2="44" y2="78" stroke="#0f2042" strokeWidth="2" />
        <line x1="56" y1="46" x2="62" y2="52" stroke="#0f2042" strokeWidth="2" />
        <line x1="80" y1="36" x2="80" y2="44" stroke="#0f2042" strokeWidth="2" />
        <line x1="108" y1="46" x2="102" y2="52" stroke="#0f2042" strokeWidth="2" />
        <line x1="128" y1="78" x2="120" y2="78" stroke="#ef4444" strokeWidth="2" />

        {/* Dial Branding */}
        <text x="80" y="65" textAnchor="middle" fill="#0f2042" fontSize="7" fontWeight="bold" letterSpacing="0.5">
          CLEAREARTH
        </text>
        <text x="80" y="73" textAnchor="middle" fill="#64748b" fontSize="5" fontWeight="600">
          BAR / PSI
        </text>

        {/* Animated Dial Needle */}
        <g className="animate-gauge-oscillate">
          <line x1="80" y1="80" x2="80" y2="34" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <polygon points="80,30 78,38 82,38" fill="#ef4444" />
          <circle cx="80" cy="80" r="7" fill="#0f2042" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="80" cy="80" r="3" fill="#ffffff" />
        </g>

        {/* Bottom Thread Connection Boss */}
        <rect x="74" y="152" width="12" height="8" fill="#64748b" rx="1" />
      </svg>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-mono font-bold tracking-tight border border-emerald-500/30 mt-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>VESSEL RATED: 16.5 BAR PASS</span>
      </div>
    </div>
  );
};

/**
 * 4. NDT (Non-Destructive Testing) Ultrasonic Laser Scanning Animation
 * Demonstrates ultrasonic thickness probe and laser scanning beam traversing a weld seam.
 */
export const NDTLaserAnimation: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/40 p-4 shadow-xl ${compact ? "w-36 h-28" : "w-52 h-40 sm:w-60 sm:h-44"}`}>
        
        {/* Background Grid Lines representing ultrasonic grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        {/* Steel Plate Cross Section */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-10 rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 border border-slate-500/50 flex items-center justify-center">
          {/* V-Groove Weld Seam */}
          <div className="w-10 h-full bg-amber-600/60 border-x border-amber-400/40 flex items-center justify-center">
            <span className="text-[7px] font-mono text-amber-200 font-bold">WELD</span>
          </div>
        </div>

        {/* MOVING LASER / ULTRASONIC SCANNING LINE */}
        <div className="absolute inset-x-2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-laser-scan shadow-[0_0_16px_#10b981] z-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#34d399]" />
        </div>

        {/* Sound Wave Pulses radiating from transducer */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-4 rounded-t-md bg-emerald-700 border border-emerald-400/80 flex items-center justify-center">
            <span className="text-[6px] font-bold text-white font-mono">UT-PROBE</span>
          </div>
          <div className="w-1 h-3 bg-emerald-400 animate-pulse" />
        </div>

        {/* Signal readout overlay */}
        <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[8px] font-mono text-emerald-400 bg-black/60 px-2 py-1 rounded border border-emerald-500/20">
          <span>ECHO: 5.0 MHz</span>
          <span className="text-white font-bold">DEPTH: 14.2 mm</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-mono font-bold tracking-tight border border-emerald-500/30 mt-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>NDT ULTRASONIC SCAN: ZERO DEFECT</span>
      </div>
    </div>
  );
};

/**
 * 5. Scaffolding Statutory Green Tag Animation
 * Demonstrates safe access scaffolding inspection with swinging official Dubai Green Tag.
 */
export const ScaffoldTagAnimation: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 170"
        className={compact ? "w-28 h-28" : "w-40 h-40 sm:w-48 sm:h-48"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Galvanized Steel Scaffold Tubes (Vertical Standards & Horizontal Ledgers) */}
        <rect x="25" y="10" width="10" height="150" rx="2" fill="#94a3b8" stroke="#0f2042" strokeWidth="1.5" />
        <rect x="125" y="10" width="10" height="150" rx="2" fill="#94a3b8" stroke="#0f2042" strokeWidth="1.5" />
        <rect x="15" y="45" width="130" height="9" rx="2" fill="#64748b" stroke="#0f2042" strokeWidth="1.5" />
        
        {/* Right-Angle Coupler Clamps */}
        <rect x="22" y="42" width="16" height="15" rx="3" fill="#0f2042" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="122" y="42" width="16" height="15" rx="3" fill="#0f2042" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Base Plates */}
        <rect x="18" y="155" width="24" height="6" rx="1" fill="#334155" />
        <rect x="118" y="155" width="24" height="6" rx="1" fill="#334155" />

        {/* SWINGING OFFICIAL DUBAI STATUTORY GREEN TAG */}
        <g transform="translate(68, 54)" className="animate-scaffold-tag">
          {/* Cable tie / ring attachment */}
          <line x1="12" y1="-5" x2="12" y2="4" stroke="#475569" strokeWidth="2" />
          
          {/* Tag Body */}
          <path d="M0 4 L24 4 L24 64 L0 64 Z" fill="#1ea84b" stroke="#0f2042" strokeWidth="1.5" />
          {/* Tag Top Header */}
          <rect x="2" y="6" width="20" height="10" fill="#0f2042" rx="1" />
          <text x="12" y="13" textAnchor="middle" fill="#ffffff" fontSize="4.5" fontWeight="black" fontFamily="sans-serif">
            SAFE
          </text>
          {/* Tag Content Lines */}
          <rect x="3" y="19" width="18" height="2" fill="#ffffff" />
          <rect x="3" y="23" width="14" height="2" fill="#ffffff" />
          <rect x="3" y="27" width="16" height="2" fill="#ffffff" />
          
          {/* Stamp / Checkmark */}
          <circle cx="12" cy="42" r="7" fill="#ffffff" />
          <path d="M9 42 L11 44 L15 39" stroke="#1ea84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          <text x="12" y="56" textAnchor="middle" fill="#ffffff" fontSize="4" fontWeight="bold" fontFamily="monospace">
            CLEAREARTH
          </text>
        </g>
      </svg>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 text-white text-[10px] font-mono font-bold tracking-tight border border-emerald-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span>STATUTORY GREEN TAG: APPROVED</span>
      </div>
    </div>
  );
};
