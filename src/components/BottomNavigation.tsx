import React from 'react';
import { cn } from '../lib/utils';
import { Home, Mic, Library, Settings, BrainCircuit, Zap } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { type: TabType; icon: React.ElementType; label: string }[] = [
    { type: 'workspace', icon: Home, label: 'Home' },
    { type: 'mission_studio', icon: Mic, label: 'Studio' },
    { type: 'library', icon: Library, label: 'Library' },
    { type: 'ai_center', icon: BrainCircuit, label: 'AI' },
    { type: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav 
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-surface-card border-t border-border-subtle flex items-center justify-around py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]"
    >
      <div role="tablist" className="w-full flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.type;
          return (
            <button
              key={tab.type}
              role="tab"
              aria-selected={isActive}
              aria-label={`${tab.label} Tab`}
              onClick={() => setActiveTab(tab.type)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors min-w-[48px] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md",
                isActive ? "text-brand-accent animate-pulse-subtle" : "text-text-muted hover:text-text-primary"
              )}
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
