import React from 'react';

export const VeredaWheat: React.FC<{ className?: string }> = ({ className = "w-9 h-9 text-[#C58B35]" }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="navWheatStem" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#9C6219" />
          <stop offset="60%" stop-color="#C58B35" />
          <stop offset="100%" stop-color="#DCA84E" />
        </linearGradient>

        <linearGradient id="navWheatGrainL" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#B87B22" />
          <stop offset="50%" stop-color="#DCA84E" />
          <stop offset="100%" stop-color="#EED08A" />
        </linearGradient>

        <linearGradient id="navWheatGrainR" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#B87B22" />
          <stop offset="50%" stop-color="#DCA84E" />
          <stop offset="100%" stop-color="#EED08A" />
        </linearGradient>
      </defs>

      <g transform="translate(15, 8) scale(0.94)">
        {/* Main stem curving gracefully */}
        <path
          d="M 215 488 C 248 425 264 365 272 270 C 275 220 276 160 274 72"
          fill="none"
          stroke="url(#navWheatStem)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M 216 486 C 246 426 261 368 269 275"
          fill="none"
          stroke="#7A440A"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Left lower leaf */}
        <g id="nav-leaf-left">
          <path
            d="M 242 430 C 205 385 168 335 174 290 C 188 318 214 362 250 398 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M 238 420 C 208 375 184 332 178 300" fill="none" stroke="#8C520E" strokeWidth="1.8" opacity="0.75" />
          <path d="M 228 395 C 205 365 190 338 185 315" fill="none" stroke="#8C520E" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* Right lower leaf */}
        <g id="nav-leaf-right">
          <path
            d="M 252 418 C 276 388 308 360 334 352 C 320 372 292 398 262 426 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M 258 412 C 280 384 308 362 328 356" fill="none" stroke="#8C520E" strokeWidth="1.5" opacity="0.7" />
        </g>

        {/* AWNS (Cerdas e arestas) */}
        <g stroke="#9C6219" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M 252 322 C 220 280 198 225 186 168" />
          <path d="M 292 308 C 322 268 344 212 354 154" />
          <path d="M 248 286 C 218 244 196 190 188 135" />
          <path d="M 295 272 C 326 230 350 176 358 120" />
          
          <path d="M 248 248 C 218 206 200 152 195 95" strokeWidth="2.4" />
          <path d="M 296 235 C 326 195 348 142 352 86" strokeWidth="2.4" />
          <path d="M 252 210 C 226 168 212 118 208 62" strokeWidth="2.4" />
          <path d="M 294 198 C 322 158 342 108 344 54" strokeWidth="2.4" />
          
          <path d="M 256 172 C 234 130 224 82 222 32" strokeWidth="2.2" />
          <path d="M 290 162 C 316 122 330 76 332 26" strokeWidth="2.2" />
          <path d="M 262 136 C 246 96 238 56 238 16" strokeWidth="2" />
          <path d="M 286 128 C 306 88 316 48 318 14" strokeWidth="2" />
          
          <path d="M 268 98 C 262 65 258 36 256 8" strokeWidth="2.2" />
          <path d="M 274 72 L 273 4" strokeWidth="2.5" />
          <path d="M 280 96 C 286 64 290 35 292 8" strokeWidth="2.2" />
        </g>

        {/* GRAINS (Grãos) */}
        {/* Pair 1 */}
        <g>
          <path
            d="M 264 340 C 244 336 234 316 242 298 C 252 294 266 304 270 324 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 248 304 C 252 312 258 322 266 332" fill="none" stroke="#8C520E" strokeWidth="1.3" opacity="0.6" />
        </g>
        <g>
          <path
            d="M 274 330 C 294 324 306 306 298 288 C 288 284 274 294 268 314 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 292 294 C 288 302 282 312 274 322" fill="none" stroke="#8C520E" strokeWidth="1.3" opacity="0.6" />
        </g>

        {/* Pair 2 */}
        <g>
          <path
            d="M 266 302 C 242 296 232 274 242 254 C 254 250 268 262 272 284 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 248 260 C 254 270 260 282 268 294" fill="none" stroke="#8C520E" strokeWidth="1.4" opacity="0.6" />
        </g>
        <g>
          <path
            d="M 276 292 C 298 284 310 264 300 244 C 288 240 274 252 268 274 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 294 250 C 288 260 282 272 274 284" fill="none" stroke="#8C520E" strokeWidth="1.4" opacity="0.6" />
        </g>

        {/* Pair 3 */}
        <g>
          <path
            d="M 268 264 C 242 256 230 232 242 210 C 256 206 270 220 274 244 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 248 218 C 254 230 262 244 270 256" fill="none" stroke="#8C520E" strokeWidth="1.5" opacity="0.65" />
        </g>
        <g>
          <path
            d="M 276 254 C 302 244 314 222 302 200 C 288 196 274 210 268 234 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 296 208 C 288 220 280 234 272 246" fill="none" stroke="#8C520E" strokeWidth="1.5" opacity="0.65" />
        </g>

        {/* Pair 4 */}
        <g>
          <path
            d="M 270 224 C 244 216 232 190 244 168 C 258 164 272 178 276 204 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 250 176 C 256 188 264 204 272 216" fill="none" stroke="#8C520E" strokeWidth="1.5" opacity="0.65" />
        </g>
        <g>
          <path
            d="M 276 214 C 302 204 314 180 302 158 C 288 154 274 168 268 194 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path d="M 296 166 C 288 178 280 194 272 206" fill="none" stroke="#8C520E" strokeWidth="1.5" opacity="0.65" />
        </g>

        {/* Pair 5 */}
        <g>
          <path
            d="M 270 184 C 246 174 236 150 248 128 C 260 124 274 138 276 164 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M 254 136 C 260 148 266 162 272 174" fill="none" stroke="#8C520E" strokeWidth="1.4" opacity="0.6" />
        </g>
        <g>
          <path
            d="M 276 174 C 300 164 310 140 298 118 C 286 114 274 128 270 154 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M 292 126 C 286 138 280 152 274 164" fill="none" stroke="#8C520E" strokeWidth="1.4" opacity="0.6" />
        </g>

        {/* Pair 6 */}
        <g>
          <path
            d="M 272 144 C 252 134 244 114 254 94 C 264 90 274 102 276 124 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
        </g>
        <g>
          <path
            d="M 276 136 C 296 126 304 106 294 86 C 284 82 274 94 272 116 Z"
            fill="url(#navWheatGrainR)"
            stroke="#8C520E"
            strokeWidth="2.3"
            strokeLinejoin="round"
          />
        </g>

        {/* Apex Grain */}
        <g>
          <path
            d="M 270 110 C 262 90 265 68 274 52 C 283 68 286 90 278 110 Z"
            fill="url(#navWheatGrainL)"
            stroke="#8C520E"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M 274 58 L 274 104" fill="none" stroke="#8C520E" strokeWidth="1.3" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
};
