import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* BNI Corporate Header */}
      <nav className="bg-[#005E6A] p-5 text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">BNI <span className="text-orange-400">IT MIM</span></h1>
          <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">LIVE STATUS</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6">Major Incident Management</h2>
        <p className="text-gray-600 text-lg mb-10">
          This is the central landing page for BNI's IT Major Incident coordination. 
          Additional modules and real-time dashboards are currently under development.
        </p>

        {/* Temporary Placeholder Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-[#005E6A] text-lg">MIM Protocol</h3>
            <p className="text-gray-500 mt-2 text-sm">Access the latest SOP for P1/P2 incidents.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-[#005E6A] text-lg">Contact Matrix</h3>
            <p className="text-gray-500 mt-2 text-sm">Directory for On-Call Engineers and Duty Managers.</p>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full p-6 text-center text-gray-400 text-xs">
        © 2026 PT. Bank Negara Indonesia (Persero) Tbk. | IT Service Management - Major Incident Management
      </footer>
    </main>
  );
}