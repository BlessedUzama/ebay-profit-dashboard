import React from "react";
import { useOrders } from "../context/OrderContext";
import { ExternalLink, Package } from "lucide-react";

const OrderTable = () => {
  const { orders, loading } = useOrders();

  if (loading)
    return (
      <div className="p-8 text-center text-gray-500 dark:text-slate-400">
        Loading your store data...
      </div>
    );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm overflow-hidden transition-colors duration-200">
      <div className="p-6 border-b border-gray-50 dark:border-slate-700 flex justify-between items-center transition-colors duration-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Recent Sales (Live eBay Data)
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-slate-800/50 transition-colors duration-200">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Item Details
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Net Profit
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-700">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-150"
              >
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-slate-200 truncate max-w-xs transition-colors duration-200">
                    {order.title}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-slate-500 mt-1 transition-colors duration-200">
                    ID: {order.id}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-slate-400 font-mono transition-colors duration-200">
                  {order.sku}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  ${order.revenue.toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-bold transition-colors duration-200 ${order.profit > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`}
                >
                  ${order.profit.toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800 transition-colors duration-200">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
