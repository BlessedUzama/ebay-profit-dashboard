import React from "react";
import { useOrders } from "../context/OrderContext";
import { Sparkles } from "lucide-react";

const AIInsights = () => {
  const { insights, loading, isLiveAi } = useOrders();

  if (loading)
    return (
      <div className="bg-indigo-50 dark:bg-slate-800 p-6 rounded-2xl border border-indigo-100 dark:border-slate-700 mb-8 animate-pulse transition-colors duration-200">
        <div className="h-4 bg-indigo-200 dark:bg-slate-600 rounded w-1/4 mb-4"></div>
        <div className="h-3 bg-indigo-100 dark:bg-slate-700 rounded w-full mb-2"></div>
        <div className="h-3 bg-indigo-100 dark:bg-slate-700 rounded w-3/4"></div>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/80 p-6 rounded-2xl border border-indigo-100 dark:border-slate-700 mb-8 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles
          className={`w-5 h-5 transition-colors duration-300 ${
            isLiveAi ? "text-green-500" : "text-gray-400 dark:text-slate-500"
          }`}
        />
        <h2 className="text-sm font-bold text-indigo-900 dark:text-slate-200 uppercase tracking-wider transition-colors duration-200">
          Gemini AI Business Intelligence
        </h2>
      </div>
      <div className="text-indigo-800 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line transition-colors duration-200">
        {insights || "Syncing data to generate AI insights..."}
      </div>
    </div>
  );
};

export default AIInsights;
