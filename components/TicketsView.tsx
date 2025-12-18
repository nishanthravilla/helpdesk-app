
import React, { useState, useCallback } from 'react';
import Header from './Header';
import TicketTable from './TicketTable';
import TicketDetailPanel from './TicketDetailPanel';
import { MOCK_TICKETS } from '../constants';
import { Ticket } from '../types';

const TicketsView: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>(MOCK_TICKETS);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedTicket = tickets.find(t => t.id === selectedTicketId) || null;

  const handleTicketSelect = useCallback((id: string) => {
    setSelectedTicketId(id);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedTicketId(null);
  }, []);

  const filteredTickets = tickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.requester.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Top Sticky Banner */}
      <div className="bg-yellow-400 text-black py-1 px-4 text-xs font-medium flex items-center justify-center space-x-3">
        <span>Set up email forwarding to get tickets automatically.</span>
        <button className="bg-black text-white px-2 py-0.5 rounded text-[10px] hover:bg-gray-800 transition-colors">
          Read setup instructions
        </button>
      </div>

      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {filteredTickets.length} Tickets
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>14 trial days left</span>
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">1 of 4 completed →</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <TicketTable 
              tickets={filteredTickets} 
              onSelectTicket={handleTicketSelect}
              selectedId={selectedTicketId}
            />
          </div>
        </div>
      </main>

      <TicketDetailPanel 
        ticket={selectedTicket} 
        onClose={handleCloseDetail} 
      />
    </>
  );
};

export default TicketsView;
