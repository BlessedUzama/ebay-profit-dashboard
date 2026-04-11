import React, { createContext, useState, useContext } from 'react';
import initialOrders from '../orders.json';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(initialOrders);

  // Calculate metrics for the dashboard cards
  const totalRevenue = orders.reduce((acc, curr) => acc + curr.price, 0);
  const totalSales = orders.length;
  const averageOrderValue = (totalRevenue / totalSales).toFixed(2);

  return (
    <OrderContext.Provider value={{ orders, totalRevenue, totalSales, averageOrderValue }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);