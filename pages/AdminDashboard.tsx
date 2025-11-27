import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dbService } from '../services/dbService';
import { Enquiry, VisitorLog } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Users, FileText, Image, LogOut, Upload, Database, Check, Server } from 'lucide-react';
import { DB_CONNECTION_STRING } from '../constants';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'enquiries' | 'upload'>('dashboard');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [visitorStats, setVisitorStats] = useState<VisitorLog[]>([]);
  
  // Upload State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Civil');
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState('');

  useEffect(() => {
    // Auth check handled by ProtectedRoute, but double check doesn't hurt
    if (localStorage.getItem('isAdmin') !== 'true') {
      navigate('/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    const enqs = await dbService.getEnquiries();
    setEnquiries(enqs);
    const visits = await dbService.getVisitorStats();
    setVisitorStats(visits);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;
    
    setUploadStatus('Uploading...');
    await dbService.uploadPhoto(uploadTitle, uploadCategory as any, uploadFile);
    setUploadStatus('Upload Successful!');
    setUploadTitle('');
    setUploadFile(null);
    setTimeout(() => setUploadStatus(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark flex flex-col md:flex-row transition-colors">
      {/* Sidebar */}
      <aside className="bg-slate-900 text-white w-full md:w-72 flex-shrink-0 flex flex-col border-r border-slate-800">
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h2 className="text-2xl font-bold font-serif text-white tracking-wide">RC ADMIN</h2>
          <div className="flex items-center gap-2 mt-2 text-xs text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
        </div>
        
        <nav className="p-4 space-y-2 flex-1">
          {[
            { id: 'dashboard', icon: Users, label: 'Dashboard' },
            { id: 'enquiries', icon: FileText, label: 'Enquiries' },
            { id: 'upload', icon: Image, label: 'Gallery Upload' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as any)} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id 
                ? 'bg-accent text-white shadow-neon' 
                : 'hover:bg-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <div className="bg-slate-800/50 p-3 rounded-lg mb-4 text-xs text-gray-400 break-all">
              <div className="flex items-center gap-2 mb-1 text-gray-300 font-bold">
                 <Database size={12} /> MongoDB Connected
              </div>
              <span className="opacity-50">Cluster0.18dj3xx</span>
           </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white transition-colors border border-red-500/20 hover:border-transparent"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Dashboard Overview</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Total Visits (7 Days)</h3>
                <p className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
                  {visitorStats.reduce((acc, curr) => acc + curr.count, 0)}
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-accent/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Total Enquiries</h3>
                <p className="text-4xl font-bold text-accent mt-2">{enquiries.length}</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-green-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider">Database Link</h3>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-green-500">Active</span>
                    <Server size={18} className="text-green-500" />
                </div>
                <p className="text-xs text-gray-400 mt-1 truncate">rc@cluster0.18dj3xx...</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 h-96">
              <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">Visitor Traffic Analytics</h3>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={visitorStats}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="date" stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                  <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', color: '#fff', border: 'none', borderRadius: '8px' }}
                    itemStyle={{ color: '#d97706' }}
                    cursor={{fill: 'rgba(217, 119, 6, 0.1)'}}
                  />
                  <Bar dataKey="count" fill="#d97706" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'enquiries' && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Recent Enquiries</h1>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Contact</th>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Service</th>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Message</th>
                      <th className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                    {enquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">No enquiries found.</td>
                      </tr>
                    ) : (
                      enquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-gray-50 dark:hover:bg-slate-750 transition-colors">
                          <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{new Date(enq.date).toLocaleDateString()}</td>
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{enq.name}</td>
                          <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{enq.contact}</td>
                          <td className="px-6 py-4"><span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-semibold">{enq.service}</span></td>
                          <td className="px-6 py-4 text-gray-600 dark:text-gray-400 max-w-xs truncate" title={enq.message}>{enq.message}</td>
                          <td className="px-6 py-4">
                            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold">{enq.status}</span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Upload to Gallery</h1>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700">
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent outline-none text-slate-900 dark:text-white"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Modern Villa Renovation"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                  <select
                    className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent outline-none text-slate-900 dark:text-white"
                    value={uploadCategory}
                    onChange={(e) => setUploadCategory(e.target.value)}
                  >
                    <option value="Civil">Civil Construction</option>
                    <option value="POP">POP / Ceiling</option>
                    <option value="Furniture">Furniture & Decor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image Selection</label>
                  <div className={`border-2 border-dashed rounded-lg p-10 text-center transition-colors ${uploadFile ? 'border-accent bg-accent/5' : 'border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-750'}`}>
                    <input
                      type="file"
                      required
                      accept="image/*"
                      onChange={(e) => setUploadFile(e.target.files ? e.target.files[0] : null)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                      {uploadFile ? (
                        <Check className="text-green-500 mb-2" size={40} />
                      ) : (
                        <Upload className="text-gray-400 mb-2" size={40} />
                      )}
                      <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {uploadFile ? uploadFile.name : "Click to select image"}
                      </span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!!uploadStatus}
                  className="w-full bg-accent hover:bg-amber-500 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-70 shadow-neon"
                >
                  {uploadStatus || "Upload Photo"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};