/** Stylised neon silhouette of a Mandya / Kubeek ram with curled horns. */
export function RamIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 420"
      className={className}
      role="img"
      aria-label="Neon illustration of a Mandya Kubeek ram"
    >
      <defs>
        <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="headFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1f17" />
          <stop offset="100%" stopColor="#070b09" />
        </linearGradient>
        <linearGradient id="hornStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e27a" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e676" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#00e676" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo + orbit rings */}
      <circle cx="200" cy="210" r="195" fill="url(#halo)" />
      <circle cx="200" cy="210" r="170" fill="none" stroke="#00e676" strokeOpacity="0.25" strokeDasharray="4 10" />
      <circle cx="200" cy="210" r="140" fill="none" stroke="#d4af37" strokeOpacity="0.2" />

      <g filter="url(#neonGlow)" strokeLinecap="round" strokeLinejoin="round">
        {/* horns */}
        <g fill="none" stroke="url(#hornStroke)" strokeWidth="9">
          <path d="M152 150 C86 104 36 150 54 214 C70 262 132 262 140 214 C145 184 112 170 96 192 C88 204 98 218 110 214" />
          <path d="M248 150 C314 104 364 150 346 214 C330 262 268 262 260 214 C255 184 288 170 304 192 C312 204 302 218 290 214" />
        </g>
        {/* ears */}
        <ellipse cx="128" cy="228" rx="30" ry="14" transform="rotate(24 128 228)" fill="url(#headFill)" stroke="#00e676" strokeWidth="3" />
        <ellipse cx="272" cy="228" rx="30" ry="14" transform="rotate(-24 272 228)" fill="url(#headFill)" stroke="#00e676" strokeWidth="3" />
        {/* head */}
        <path
          d="M200 112 C158 112 138 146 140 194 C142 244 160 296 178 336 C188 360 212 360 222 336 C240 296 258 244 260 194 C262 146 242 112 200 112 Z"
          fill="url(#headFill)"
          stroke="#00e676"
          strokeWidth="4"
        />
        {/* forehead ridge & nose bridge */}
        <path d="M200 124 C192 160 192 214 196 262" fill="none" stroke="#00e676" strokeOpacity="0.45" strokeWidth="2" />
        <path d="M200 124 C208 160 208 214 204 262" fill="none" stroke="#00e676" strokeOpacity="0.45" strokeWidth="2" />
        {/* eyes */}
        <ellipse cx="172" cy="214" rx="11" ry="6" fill="#d4af37" />
        <ellipse cx="228" cy="214" rx="11" ry="6" fill="#d4af37" />
        <ellipse cx="172" cy="214" rx="3" ry="5" fill="#070b09" />
        <ellipse cx="228" cy="214" rx="3" ry="5" fill="#070b09" />
        {/* muzzle */}
        <path d="M184 318 C192 330 208 330 216 318" fill="none" stroke="#00e676" strokeWidth="3" />
        <circle cx="190" cy="306" r="3.5" fill="#00e676" />
        <circle cx="210" cy="306" r="3.5" fill="#00e676" />
      </g>

      <text x="200" y="398" textAnchor="middle" fontSize="22" fontWeight="800" fill="#d4af37" letterSpacing="8">
        786
      </text>
    </svg>
  );
}
