
import React from 'react';
import { Search, Filter, Plus, ChevronDown, Bell, HelpCircle } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-6 flex-1">
        <h1 className="text-xl font-bold tracking-tight text-gray-800 whitespace-nowrap">All recent tickets</h1>
        
        <div className="max-w-md w-full relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search in all tickets..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

        <button className="flex items-center space-x-2 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">
          <Filter size={14} />
          <span>Add filter</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center -space-x-1">
          <div className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell size={20} />
          </div>
          <div className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <HelpCircle size={20} />
          </div>
        </div>
        
        <button className="bg-blue-600 text-white flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-100 transition-all">
          <Plus size={18} />
          <span>New Ticket</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
