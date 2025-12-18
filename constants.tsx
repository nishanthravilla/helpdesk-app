
import { Ticket, AICategory, Priority, SLAStatus, TicketStatus } from './types';

export const MOCK_TICKETS: Ticket[] = [
  {
    id: 'INC-2045',
    requester: {
      name: 'Sarah Jenkins',
      email: 's.jenkins@enterprise.com',
      avatar: 'https://picsum.photos/seed/sarah/40/40'
    },
    subject: 'VPN connection dropping every 10 minutes 🌐',
    description: 'I am trying to connect to the corporate VPN from home, but it disconnects frequently. This is preventing me from accessing critical internal resources.',
    category: AICategory.Network,
    priority: Priority.P1,
    agent: 'Alex Rivera',
    slaStatus: SLAStatus.AtRisk,
    status: TicketStatus.Open,
    lastUpdated: '12 mins ago',
    aiConfidence: 98,
    aiAutoAssigned: true,
    createdAt: '2023-10-25T09:00:00Z'
  },
  {
    id: 'INC-2046',
    requester: {
      name: 'Michael Chen',
      email: 'm.chen@devops.io',
      avatar: 'https://picsum.photos/seed/michael/40/40'
    },
    subject: 'New Adobe Creative Cloud license request 🎨',
    description: 'The design team needs 3 more licenses for Adobe CC suite. Approved by department head last Tuesday.',
    category: AICategory.Software,
    priority: Priority.P3,
    agent: null,
    slaStatus: SLAStatus.OnTrack,
    status: TicketStatus.Pending,
    lastUpdated: '45 mins ago',
    aiConfidence: 92,
    aiAutoAssigned: false,
    createdAt: '2023-10-25T10:15:00Z'
  },
  {
    id: 'INC-2047',
    requester: {
      name: 'Emma Watson',
      email: 'emma.w@global.com',
      avatar: 'https://picsum.photos/seed/emma/40/40'
    },
    subject: 'Monitor flickering on secondary display 🖥️',
    description: 'My second monitor is flickering violently whenever I open high-resolution spreadsheets. Might be a cable issue.',
    category: AICategory.Hardware,
    priority: Priority.P2,
    agent: 'Samantha Lee',
    slaStatus: SLAStatus.OnTrack,
    status: TicketStatus.Open,
    lastUpdated: '2 hours ago',
    aiConfidence: 85,
    aiAutoAssigned: true,
    createdAt: '2023-10-25T08:30:00Z'
  },
  {
    id: 'INC-2048',
    requester: {
      name: 'David Miller',
      email: 'd.miller@tech.org',
      avatar: 'https://picsum.photos/seed/david/40/40'
    },
    subject: 'Password reset for ERP system 🔑',
    description: 'User locked out after 3 failed attempts. Needs immediate access for month-end reporting.',
    category: AICategory.Access,
    priority: Priority.P1,
    agent: 'Alex Rivera',
    slaStatus: SLAStatus.Breached,
    status: TicketStatus.Open,
    lastUpdated: '10 mins ago',
    aiConfidence: 99,
    aiAutoAssigned: true,
    createdAt: '2023-10-24T15:00:00Z'
  },
  {
    id: 'INC-2049',
    requester: {
      name: 'Lucy Liu',
      email: 'lucy.l@marketing.com',
      avatar: 'https://picsum.photos/seed/lucy/40/40'
    },
    subject: 'Broken coffee machine in Level 4 Breakroom ☕',
    description: 'The automated coffee machine is leaking. Not strictly IT, but filing here as per recent instructions.',
    category: AICategory.Hardware,
    priority: Priority.P4,
    agent: null,
    slaStatus: SLAStatus.OnTrack,
    status: TicketStatus.Open,
    lastUpdated: '5 hours ago',
    aiConfidence: 76,
    aiAutoAssigned: false,
    createdAt: '2023-10-25T07:00:00Z'
  }
];
