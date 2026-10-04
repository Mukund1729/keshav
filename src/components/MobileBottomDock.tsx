import React from 'react';
import { useStore } from '../store/useStore';
import { Sparkles, Activity, Stethoscope, Settings, MessageSquare } from 'lucide-react';

export const MobileBottomDock: React.FC = () => {
  const [, store] = useStore();

  const handleNav = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="mobile-bottom-dock" aria-label="Mobile Navigation Dock">
      <button
        onClick={() => handleNav('#services')}
        className="dock-item"
      >
        <Sparkles size={18} />
        <span>Services</span>
      </button>

      <button
        onClick={() => store.setPrakritiModal(true)}
        className="dock-item"
        style={{ color: 'var(--gold-400)' }}
      >
        <Activity size={18} />
        <span>Prakriti</span>
      </button>

      <button
        onClick={() => handleNav('#consultation-discovery')}
        className="dock-item"
        style={{ color: '#4ade80' }}
      >
        <Stethoscope size={18} />
        <span>Book Doctor</span>
      </button>

      <button
        onClick={() => store.setAdminModal(true)}
        className="dock-item"
      >
        <Settings size={18} />
        <span>CMS Studio</span>
      </button>

      <button
        onClick={() => handleNav('#contact')}
        className="dock-item"
      >
        <MessageSquare size={18} />
        <span>Contact</span>
      </button>
    </nav>
  );
};
