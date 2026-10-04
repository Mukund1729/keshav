import React from 'react';
import { useStore } from '../store/useStore';
import { UserRole } from '../types';
import { ShieldCheck, UserCheck, Stethoscope, Settings, Sparkles } from 'lucide-react';

export const RoleSwitchBar: React.FC = () => {
  const [state, store] = useStore();

  const roles: { id: UserRole; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'visitor', label: 'Public Portal', icon: <Sparkles size={13} />, desc: 'Standard visitor & institutional discovery view' },
    { id: 'patient', label: 'Patient Portal', icon: <UserCheck size={13} />, desc: 'Active patient dashboard & appointments' },
    { id: 'doctor', label: 'Doctor Portal', icon: <Stethoscope size={13} />, desc: 'Doctor practice management & tele-consult' },
    { id: 'admin', label: 'Admin CMS', icon: <Settings size={13} />, desc: 'Live CMS & metrics configuration' }
  ];

  return (
    <aside className="role-bar" aria-label="Demo role selector">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span className="role-bar-badge">
          <ShieldCheck size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
          ARCHITECTURAL WORKSPACE
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.74rem' }}>
          Role Simulation Engine:
        </span>
      </div>

      <div className="role-selector-pills">
        {roles.map((r) => (
          <button
            key={r.id}
            onClick={() => store.setRole(r.id)}
            className={`role-pill ${state.currentRole === r.id ? 'active' : ''}`}
            title={r.desc}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {r.icon}
              {r.label}
            </span>
          </button>
        ))}

        <button
          onClick={() => store.setAdminModal(true)}
          style={{
            marginLeft: '8px',
            background: 'rgba(212, 175, 55, 0.25)',
            color: '#ecd084',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            padding: '3px 8px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
          title="Open live CMS editor"
        >
          CMS Studio
        </button>
      </div>
    </aside>
  );
};
