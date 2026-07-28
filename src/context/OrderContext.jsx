import React, { createContext, useState, useEffect, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [insights, setInsights] = useState(
    "Syncing data to generate AI insights...",
  );
  const [isLiveAi, setIsLiveAi] = useState(false); // <-- Added state for AI status
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();

      // Handling the new object structure { orders: [], insights: "", isLiveAi: boolean }
      if (data && data.orders) {
        setOrders(data.orders);
        setInsights(data.insights || "No insights available at this time.");
        setIsLiveAi(data.isLiveAi || false); // <-- Catching the boolean from your backend
      } else {
        // Fallback for empty data or legacy array format
        setOrders(Array.isArray(data) ? data : []);
        setIsLiveAi(false); // Default to false on fallback
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
      setInsights("Error connecting to AI service.");
      setIsLiveAi(false); // Ensure it's false on network error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Calculated Totals with defensive array check to prevent white-screen crashes
  const getTotals = () => {
    if (!Array.isArray(orders) || orders.length === 0) {
      return { revenue: 0, profit: 0, sales: 0, avgOrder: 0 };
    }

    const totals = orders.reduce(
      (acc, order) => {
        const rev = parseFloat(order.revenue || 0);
        const prof = parseFloat(order.profit || 0);

        return {
          revenue: acc.revenue + rev,
          profit: acc.profit + prof,
          sales: acc.sales + 1,
        };
      },
      { revenue: 0, profit: 0, sales: 0 },
    );

    return {
      ...totals,
      avgOrder: totals.revenue / totals.sales,
    };
  };

  const totals = getTotals();

  return (
    <OrderContext.Provider
      value={{
        orders,
        insights,
        isLiveAi, // <-- Exposing it to your components
        totals,
        loading,
        fetchOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};
