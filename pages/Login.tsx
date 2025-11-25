import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_USER, ADMIN_PASS } from '../constants';
import { Lock, ArrowRight, Shield } from 'lucide-react';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid Access Credentials');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 relative z-10">
        <div className="text-center mb-8">
          <div className="bg-slate-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon border border-slate-700">
            <Shield className="text-accent" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white">Admin Portal</h2>
          <p className="text-gray-400 text-sm mt-2">RC PATEL Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
              type="text"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          {error && <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">{error}</div>}

          <button
            type="submit"
            className="w-full bg-accent hover:bg-amber-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-neon group"
          >
            Access Dashboard <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>
        
        <div className="mt-8 text-center">
            <button onClick={() => navigate('/')} className="text-gray-500 hover:text-white text-sm transition-colors">
                &larr; Back to Home
            </button>
        </div>
      </div>
    </div>
  );
};