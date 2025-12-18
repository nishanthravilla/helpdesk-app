
import React from 'react';
import { 
  Ticket as TicketIcon, 
  LayoutDashboard, 
  BarChart3, 
  Zap, 
  Clock, 
  Settings,
  MoreHorizontal,
  FolderArchive,
  AlertTriangle,
  Trash2,
  ChevronDown,
  Plus
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-64 flex flex-col h-full bg-white border-r border-gray-200 shrink-0">
      {/* Top Section - Brand/Title */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-lg tracking-tight">SmartHelp</span>
        </div>
        <button className="text-blue-600 p-1.5 hover:bg-blue-50 rounded-lg transition-colors">
          <Plus size={20} />
        </button>
      </div>

      {/* Navigation Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-6">
        
        {/* Main Nav */}
        <nav className="space-y-1">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active={currentView === 'dashboard'} 
            onClick={() => onNavigate('dashboard')} 
          />
          <NavItem 
            icon={<TicketIcon size={18} />} 
            label="Tickets" 
            active={currentView === 'tickets'} 
            onClick={() => onNavigate('tickets')} 
          />
          <NavItem 
            icon={<BarChart3 size={18} />} 
            label="Analytics" 
            active={currentView === 'analytics'} 
            onClick={() => onNavigate('analytics')}
          />
          <NavItem 
            icon={<Zap size={18} />} 
            label="Automations" 
            active={currentView === 'automations'} 
            onClick={() => onNavigate('automations')}
          />
          <NavItem 
            icon={<Clock size={18} />} 
            label="SLA Monitor" 
            active={currentView === 'sla'} 
            onClick={() => onNavigate('sla')}
          />
          <NavItem 
            icon={<Settings size={18} />} 
            label="Settings" 
            active={currentView === 'settings'} 
            onClick={() => onNavigate('settings')}
          />
        </nav>

        {/* Views Section */}
        <div>
          <div className="px-3 py-2 flex items-center justify-between group">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Ticket Views</span>
            <button className="text-blue-500 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Manage</button>
          </div>
          <div className="space-y-0.5">
            <ViewItem label="All recent tickets" active={currentView === 'tickets'} />
            <ViewItem label="Tickets to handle" count={4} />
            <ViewItem label="My open tickets" count={0} />
            <ViewItem label="My tickets (7 days)" count={0} />
          </div>
        </div>

        {/* Status Filters */}
        <div>
          <div className="px-3 py-2 flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Statuses</span>
            <MoreHorizontal size={14} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="space-y-0.5">
            <ViewItem label="Open" count={4} dotColor="bg-blue-500" />
            <ViewItem label="Pending" count={0} dotColor="bg-yellow-500" />
            <ViewItem label="On hold" count={0} dotColor="bg-orange-500" />
            <ViewItem label="Solved" count={0} dotColor="bg-green-500" />
            <ViewItem label="Closed" count={0} dotColor="bg-gray-400" />
          </div>
        </div>

        {/* Folders */}
        <div>
          <div className="px-3 py-2">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Folders</span>
          </div>
          <nav className="space-y-1">
            <NavItem icon={<FolderArchive size={18} />} label="Archive" slim />
            <NavItem icon={<AlertTriangle size={18} />} label="Spam" slim />
            <NavItem icon={<Trash2 size={18} />} label="Trash" slim />
          </nav>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-gray-100 flex items-center space-x-3">
        <img src="https://picsum.photos/seed/admin/32/32" className="w-8 h-8 rounded-full border border-gray-200" alt="Admin" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold truncate">Admin User</p>
          <p className="text-[10px] text-gray-500 truncate">System Administrator</p>
        </div>
        <ChevronDown size={14} className="text-gray-400" />
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, slim?: boolean, onClick?: () => void }> = ({ icon, label, active, slim, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-3 ${slim ? 'py-1.5' : 'py-2'} rounded-lg text-sm font-medium transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
  >
    <span className={active ? 'text-blue-600' : 'text-gray-400'}>{icon}</span>
    <span>{label}</span>
  </button>
);

const ViewItem: React.FC<{ label: string, active?: boolean, count?: number, dotColor?: string }> = ({ label, active, count, dotColor }) => (
  <a href="#" className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
    <div className="flex items-center space-x-2">
      {dotColor && <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></div>}
      <span className="truncate">{label}</span>
    </div>
    {count !== undefined && <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>{count}</span>}
  </a>
);

export default Sidebar;
