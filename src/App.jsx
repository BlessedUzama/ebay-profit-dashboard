import React from "react";
import { OrderProvider } from "./context/OrderContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import StatCards from "./components/StatCards";
import OrderTable from "./components/OrderTable";
import AIInsights from "./components/AIInsights";
// 1. Import Sun and Moon from lucide-react
import { Sun, Moon } from "lucide-react";

// 2. Updated toggle to match the style in Screenshot (265).png
const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
      title="Toggle Theme"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <OrderProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-50 pb-12 transition-colors duration-200">
          <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-4 px-8 mb-8 sticky top-0 z-10 shadow-sm transition-colors duration-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                  EB
                </span>
                eBayProfit.io
              </h1>
              <div className="flex items-center gap-4">
                <ThemeToggle />

                <span className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  Sandbox Mode
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 border border-slate-300 dark:border-slate-500"></div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-8">
            <header className="mb-8">
              <h2 className="text-3xl font-bold">Store Overview</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg">
                Detailed performance breakdown for your developer portfolio
                items.
              </p>
            </header>

            <AIInsights />
            <StatCards />
            <OrderTable />
          </main>
        </div>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
