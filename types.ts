
export enum Priority {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4'
}

export enum TicketStatus {
  Open = 'Open',
  Pending = 'Pending',
  OnHold = 'On Hold',
  Solved = 'Solved',
  Closed = 'Closed'
}

export enum SLAStatus {
  OnTrack = 'On Track',
  AtRisk = 'At Risk',
  Breached = 'Breached'
}

export enum AICategory {
  Network = 'Network',
  Software = 'Software',
  Hardware = 'Hardware',
  Access = 'Access'
}

export interface Ticket {
  id: string;
  requester: {
    name: string;
    email: string;
    avatar: string;
  };
  subject: string;
  description: string;
  category: AICategory;
  priority: Priority;
  agent: string | null;
  slaStatus: SLAStatus;
  status: TicketStatus;
  lastUpdated: string;
  aiConfidence: number;
  aiAutoAssigned: boolean;
  createdAt: string;
}
