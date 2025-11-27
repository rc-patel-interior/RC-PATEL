import React, { useState } from 'react';
import { dbService } from '../services/dbService';
import { SERVICES_LIST } from '../constants';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await dbService.addEnquiry(form);
      setStatus('success');
      setForm({ name: '', contact: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900">Get In Touch</h1>
          <p className="mt-2 text-gray-600">Start your dream project with RC Patel today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Info Side */}
          <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Our Office</h3>
                    <p className="text-gray-400 text-sm">Dr. BabaSaheb Ambedkar Nagar No. 2, Mankhurd, Mumbai - 43</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-400 text-sm">+91 89766 37493</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-400 text-sm">crpmumbai15@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Working Hours</h3>
                    <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-800 rounded-lg border border-slate-700">
              <p className="italic text-gray-300">
                "Quality means doing it right when no one is looking."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send an Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="+91..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                {status === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>

              {status === 'success' && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center text-sm font-semibold">
                  Thank you! Your enquiry has been submitted. We will contact you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};