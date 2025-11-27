export interface Enquiry {
  id: string;
  name: string;
  contact: string;
  service: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export interface VisitorLog {
  date: string;
  count: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Civil' | 'POP' | 'Furniture';
  imageUrl: string;
  dateAdded: string;
}

export interface AdminStats {
  totalVisitors: number;
  totalEnquiries: number;
  pendingEnquiries: number;
}