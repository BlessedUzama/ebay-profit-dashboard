import React from 'react';
import { OrderProvider } from './context/OrderContext';
import StatCards from './components/StatCards';

function App() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Simple Header */}
        <header className="bg-white border-b border-slate-200 py-4 px-8 mb-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600 tracking-tight">eBayProfit.io</h1>
            <div className="text-sm text-slate-500 font-medium">Sandbox Environment</div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-8">
          <header className="mb-8">
            <h2 className="text-3xl font-bold">Store Overview</h2>
            <p className="text-slate-500 mt-1">Real-time performance metrics from your eBay store.</p>
          </header>

          {/* Our Analytics Cards */}
          <StatCards />

          {/* Table Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <p className="text-slate-400 italic">Order table coming up next...</p>
          </div>
        </main>
      </div>
    </OrderProvider>
  );
}

export default App;