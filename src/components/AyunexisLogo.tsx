import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const AyunexisLogo: React.FC<LogoProps> = ({
  size = 40,
  showText = true,
  textColor = '#0d4a38',
  subtextColor = '#64748b'
}) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* Crisp Circular Tri-Dosha Nexus Emblem */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="45" stroke="#0d4a38" strokeWidth="6" fill="#f8faf9" />
        
        {/* Central Tri-Lobe Knot (Vata, Pitta, Kapha Nexus) */}
        <path
          d="M 50,22 
             C 62,35 78,50 68,68 
             C 58,84 40,84 32,68 
             C 22,50 38,35 50,22 Z"
          fill="none"
          stroke="#0d4a38"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Intersecting Loops */}
        <path
          d="M 32,68 
             C 42,54 50,34 70,36 
             C 86,38 88,60 74,72 
             C 60,82 42,76 32,68 Z"
          fill="none"
          stroke="#0d4a38"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 68,68 
             C 56,54 50,34 30,36 
             C 14,38 12,60 26,72 
             C 40,82 58,76 68,68 Z"
          fill="none"
          stroke="#0d4a38"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Warm Gold Core Spark */}
        <circle cx="50" cy="53" r="5" fill="#c59b58" />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: `${size * 0.52}px`,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: textColor,
            lineHeight: 1
          }}>
            Ayunexis
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: `${size * 0.23}px`,
            letterSpacing: '0.04em',
            color: subtextColor,
            fontWeight: 600,
            marginTop: '3px',
            textTransform: 'uppercase'
          }}>
            Private Limited
          </div>
        </div>
      )}
    </div>
  );
};
