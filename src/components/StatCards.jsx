import React from "react";
import { useOrders } from "../context/OrderContext";
import { DollarSign, TrendingUp, ShoppingBag, CreditCard } from "lucide-react";

const StatCards = () => {
  const { totals, loading } = useOrders();

  const stats = [
    {
      label: "Total Revenue",
      value: `$${(totals?.revenue || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/40",
    },
    {
      label: "Net Profit",
      value: `$${(totals?.profit || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
    },
    {
      label: "Total Sales",
      value: totals?.sales || 0,
      icon: ShoppingBag,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/40",
    },
    {
      label: "Avg. Order Value",
      value: `$${(totals?.avgOrder || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: CreditCard,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/40",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-slate-400">
                {stat.label}
              </p>
              <h3
                className={`text-2xl font-bold mt-1 transition-colors duration-200 ${loading ? "animate-pulse text-gray-300 dark:text-slate-600" : "text-gray-900 dark:text-white"}`}
              >
                {loading ? "---" : stat.value}
              </h3>
            </div>
            <div
              className={`${stat.bgColor} p-3 rounded-xl transition-colors duration-200`}
            >
              <stat.icon
                className={`w-6 h-6 ${stat.color} transition-colors duration-200`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
