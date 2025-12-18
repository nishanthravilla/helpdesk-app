
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import TicketsView from './components/TicketsView';
import DashboardView from './components/DashboardView';

type View = 'tickets' | 'dashboard' | 'analytics' | 'automations' | 'sla' | 'settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard'); // Default to dashboard for demonstration

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'tickets':
      default:
        return <TicketsView />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F9FAFB] overflow-hidden text-gray-900">
      {/* Fixed Left Sidebar */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
