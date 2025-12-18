
import React from 'react';
import { X, Bot, Clock, User, Tag, AlertCircle, CheckCircle } from 'lucide-react';
import { Ticket } from '../types';

interface TicketDetailPanelProps {
  ticket: Ticket | null;
  onClose: () => void;
}

const TicketDetailPanel: React.FC<TicketDetailPanelProps> = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[450px] bg-white shadow-2xl z-30 flex flex-col transform transition-transform duration-300 border-l border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">Ticket Details</span>
          <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase">#{ticket.id}</span>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <X size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Basic Title/Description */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold leading-snug">{ticket.subject}</h2>
          <div className="flex items-center space-x-3 text-sm">
            <img src={ticket.requester.avatar} className="w-8 h-8 rounded-full" alt="" />
            <div>
              <p className="font-semibold">{ticket.requester.name}</p>
              <p className="text-xs text-gray-500">{ticket.requester.email}</p>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-500">{new Date(ticket.createdAt).toLocaleString()}</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-sm leading-relaxed text-gray-700 border border-gray-100">
            {ticket.description}
          </div>
        </section>

        {/* AI Classification Summary */}
        <section className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-blue-700 font-bold text-sm">
              <Bot size={18} />
              <span>AI Classification Insights</span>
            </div>
            <div className="text-[10px] font-bold text-blue-500 bg-white border border-blue-100 px-2 py-0.5 rounded-full uppercase">
              {ticket.aiConfidence}% Confidence
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-50">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Category</p>
              <p className="text-sm font-bold text-blue-900">{ticket.category}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-50">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Priority</p>
              <p className="text-sm font-bold text-blue-900">{ticket.priority}</p>
            </div>
          </div>

          <div className="bg-white/60 p-3 rounded-lg text-xs text-blue-800 italic leading-relaxed">
            "Based on natural language processing, this ticket has been identified as a <strong>{ticket.category}</strong> issue with <strong>{ticket.priority}</strong> urgency. Auto-routing successfully assigned this to {ticket.agent || 'the triage queue'}."
          </div>
        </section>

        {/* Management Controls */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Assigned Technician</label>
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:border-blue-400 transition-colors">
                  <User size={14} className="text-gray-400" />
                  <span className="text-sm font-medium">{ticket.agent || 'Select Agent'}</span>
                </div>
             </div>
             <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase">SLA Timer</label>
                <div className="flex items-center space-x-2 bg-orange-50 text-orange-700 rounded-lg px-3 py-2 border border-orange-100">
                  <Clock size={14} />
                  <span className="text-sm font-mono font-bold tracking-wider">02:14:10</span>
                </div>
             </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Ticket Actions</label>
            <div className="flex flex-wrap gap-2">
              <button className="flex-1 bg-green-600 text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-green-700 transition-all shadow-md shadow-green-100 flex items-center justify-center space-x-2">
                <CheckCircle size={18} />
                <span>Mark as Solved</span>
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                <AlertCircle size={18} className="text-gray-400" />
                <span>Escalate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Quick Reply */}
      <div className="p-4 border-t border-gray-100">
        <div className="relative">
          <textarea 
            className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            placeholder="Type a public reply or internal note..."
          ></textarea>
          <div className="absolute bottom-3 right-3 flex items-center space-x-2">
            <button className="bg-gray-100 text-gray-600 p-1.5 rounded-lg hover:bg-gray-200 transition-colors">
               <Tag size={16} />
            </button>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-100">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailPanel;
