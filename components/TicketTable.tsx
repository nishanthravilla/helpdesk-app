
import React from 'react';
import { MoreHorizontal, Bot, CheckCircle2 } from 'lucide-react';
import { Ticket, Priority, TicketStatus, SLAStatus } from '../types';

interface TicketTableProps {
  tickets: Ticket[];
  onSelectTicket: (id: string) => void;
  selectedId: string | null;
}

const TicketTable: React.FC<TicketTableProps> = ({ tickets, onSelectTicket, selectedId }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <th className="px-4 py-3 w-10">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
            </th>
            <th className="px-4 py-3">Requester</th>
            <th className="px-4 py-3">Subject</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Agent</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">SLA Status</th>
            <th className="px-4 py-3">Last Updated</th>
            <th className="px-4 py-3 w-10"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {tickets.map((ticket) => (
            <tr 
              key={ticket.id} 
              onClick={() => onSelectTicket(ticket.id)}
              className={`group hover:bg-blue-50/40 cursor-pointer transition-colors ${selectedId === ticket.id ? 'bg-blue-50' : ''}`}
            >
              <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center space-x-3">
                  <img src={ticket.requester.avatar} className="w-8 h-8 rounded-full bg-gray-200" alt={ticket.requester.name} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate leading-tight text-gray-800">{ticket.requester.name}</p>
                    <p className="text-xs text-gray-500 truncate">{ticket.requester.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-800 line-clamp-1">{ticket.subject}</span>
                    <span className="shrink-0 flex items-center space-x-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-md font-bold group-hover:from-blue-100 group-hover:to-indigo-100 transition-all cursor-help relative" title={`AI confidence: ${ticket.aiConfidence}%`}>
                      <Bot size={12} className="text-blue-600" />
                      <span>AI Classified</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px]">
                    <span className="text-gray-400 font-medium">#{ticket.id}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-gray-500 font-semibold">{ticket.category}</span>
                    {ticket.aiAutoAssigned && (
                      <span className="text-green-600 flex items-center space-x-0.5">
                        <CheckCircle2 size={10} />
                        <span>Auto-assigned</span>
                      </span>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <PriorityBadge priority={ticket.priority} />
              </td>
              <td className="px-4 py-4">
                <p className="text-xs font-medium text-gray-600">
                  {ticket.agent || <span className="text-gray-400 italic font-normal">unassigned</span>}
                </p>
              </td>
              <td className="px-4 py-4">
                <StatusBadge status={ticket.status} />
              </td>
              <td className="px-4 py-4">
                <SLABadge status={ticket.slaStatus} />
              </td>
              <td className="px-4 py-4 text-xs text-gray-500 whitespace-nowrap">
                {ticket.lastUpdated}
              </td>
              <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PriorityBadge: React.FC<{ priority: Priority }> = ({ priority }) => {
  const colors = {
    [Priority.P1]: 'bg-red-50 text-red-700 border-red-200',
    [Priority.P2]: 'bg-orange-50 text-orange-700 border-orange-200',
    [Priority.P3]: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    [Priority.P4]: 'bg-green-50 text-green-700 border-green-200',
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors[priority]}`}>
      {priority}
    </span>
  );
};

const StatusBadge: React.FC<{ status: TicketStatus }> = ({ status }) => {
  const colors = {
    [TicketStatus.Open]: 'bg-blue-50 text-blue-700 border-blue-100',
    [TicketStatus.Pending]: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    [TicketStatus.OnHold]: 'bg-orange-50 text-orange-700 border-orange-100',
    [TicketStatus.Solved]: 'bg-gray-100 text-gray-600 border-gray-200',
    [TicketStatus.Closed]: 'bg-gray-200 text-gray-800 border-gray-300',
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${colors[status]}`}>
      {status}
    </span>
  );
};

const SLABadge: React.FC<{ status: SLAStatus }> = ({ status }) => {
  const colors = {
    [SLAStatus.OnTrack]: 'text-green-600',
    [SLAStatus.AtRisk]: 'text-orange-600',
    [SLAStatus.Breached]: 'text-red-600',
  };
  return (
    <div className="flex items-center space-x-1.5">
      <div className={`w-1.5 h-1.5 rounded-full bg-current ${colors[status]}`}></div>
      <span className={`text-[11px] font-medium ${colors[status]}`}>{status}</span>
    </div>
  );
};

export default TicketTable;
