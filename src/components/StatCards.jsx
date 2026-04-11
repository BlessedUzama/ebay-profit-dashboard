import React from 'react';
import { useOrders } from '../context/OrderContext';
import { DollarSign, ShoppingBag, TrendingUp, CreditCard } from 'lucide-react';

const StatCards = () => {
  const { orders, totalRevenue, totalSales, averageOrderValue } = useOrders();

  // Simulate real-world eBay fees (~13% + $0.30 per order)
  const estimatedFees = (totalRevenue * 0.1325) + (totalSales * 0.30);
  const netProfit = (totalRevenue - estimatedFees).toFixed(2);

  const stats = [
    { 
      label: 'Total Revenue', 
      value: `$${totalRevenue.toFixed(2)}`, 
      icon: DollarSign, 
      color: 'text-blue-600', 
      bg: 'bg-blue-100' 
    },
    { 
      label: 'Net Profit', 
      value: `$${netProfit}`, 
      icon: TrendingUp, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-100' 
    },
    { 
      label: 'Total Sales', 
      value: totalSales, 
      icon: ShoppingBag, 
      color: 'text-purple-600', 
      bg: 'bg-purple-100' 
    },
    { 
      label: 'Avg. Order Value', 
      value: `$${averageOrderValue}`, 
      icon: CreditCard, 
      color: 'text-orange-600', 
      bg: 'bg-orange-100' 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
            <div className={`${stat.bg} p-3 rounded-lg`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;