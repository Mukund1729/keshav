import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
  variant?: 'color' | 'white';
}

export const AyunexisLogo: React.FC<LogoProps> = ({
  size = 40,
  showText = true,
  textColor = '#0d4a38',
  subtextColor = '#64748b',
  variant = 'color'
}) => {
  const emblemSrc = variant === 'white' ? '/ayunexis-emblem-white.png' : '/ayunexis-emblem.png';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        flexShrink: 0
      }}
      className="ayunexis-logo-brand"
    >
      {/* Official Ayunexis Tri-Dosha Nexus Emblem */}
      <img
        src={emblemSrc}
        alt="Ayunexis Official Emblem"
        width={size}
        height={size}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block'
        }}
      />

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.15, flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: `${Math.round(size * 0.54)}px`,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: textColor,
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            Ayunexis
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: `${Math.max(9, Math.round(size * 0.22))}px`,
              letterSpacing: '0.05em',
              color: subtextColor,
              fontWeight: 700,
              marginTop: '3px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}
          >
            Private Limited
          </span>
        </div>
      )}
    </div>
  );
};

