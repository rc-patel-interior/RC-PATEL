import { Enquiry, PortfolioItem, VisitorLog } from '../types';

/**
 * NOTE: In a real Node.js environment, this file would use 'mongoose' or 'mongodb' driver
 * to connect to the provided cluster: mongodb+srv://rc:rc@cluster0.18dj3xx.mongodb.net/
 * 
 * Since this is a browser-side React SPA, we cannot securely connect to MongoDB directly
 * without exposing credentials or facing CORS issues. 
 * 
 * This service MOCKS the database using localStorage so the Admin Panel works 
 * for the demo immediately.
 */

const STORAGE_KEYS = {
  ENQUIRIES: 'rc_patel_enquiries',
  PORTFOLIO: 'rc_patel_portfolio',
  VISITORS: 'rc_patel_visitors',
};

// Initialize Dummy Data if empty
const initData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.VISITORS)) {
    const logs: VisitorLog[] = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      return {
        date: d.toLocaleDateString(),
        count: Math.floor(Math.random() * 50) + 10
      };
    });
    localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(logs));
  }
};

initData();

export const dbService = {
  // --- Enquiries ---
  addEnquiry: async (enquiry: Omit<Enquiry, 'id' | 'date' | 'status'>): Promise<boolean> => {
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: 'New'
    };
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify([newEnquiry, ...current]));
    return true;
  },

  getEnquiries: async (): Promise<Enquiry[]> => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
  },

  // --- Portfolio/Photos ---
  uploadPhoto: async (title: string, category: PortfolioItem['category'], imageFile: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const newItem: PortfolioItem = {
          id: crypto.randomUUID(),
          title,
          category,
          imageUrl: base64,
          dateAdded: new Date().toISOString()
        };
        const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.PORTFOLIO) || '[]');
        localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify([newItem, ...current]));
        resolve(true);
      };
      reader.readAsDataURL(imageFile);
    });
  },

  getPortfolio: async (): Promise<PortfolioItem[]> => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PORTFOLIO) || '[]');
  },

  // --- Visitors (Simulated) ---
  logVisitor: async () => {
    const currentLogs: VisitorLog[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITORS) || '[]');
    const today = new Date().toLocaleDateString();
    const todayLog = currentLogs.find(l => l.date === today);
    
    if (todayLog) {
      todayLog.count += 1;
    } else {
      currentLogs.push({ date: today, count: 1 });
      if (currentLogs.length > 30) currentLogs.shift(); // Keep last 30 days
    }
    localStorage.setItem(STORAGE_KEYS.VISITORS, JSON.stringify(currentLogs));
  },

  getVisitorStats: async (): Promise<VisitorLog[]> => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.VISITORS) || '[]');
  }
};
