'use client';
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import {dbTimeForHuman} from "@/libs/datetime";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const {loading, data:profile} = useProfile();

  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoadingOrders(true);
    fetch('/api/orders').then(res => {
      res.json().then(orders => {
        setOrders(orders.reverse());
        setLoadingOrders(false);
      })
    })
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={profile.admin} />
      <div className="mt-8">
        {loadingOrders && (
            <div className="loading-container">
              <img src="/Jalapenopizza.png" alt="Loading" className="pizza-spinner" />
              <p className="dark: text-white">Loading user info...</p>
              <style jsx>{`
                .loading-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }
                .pizza-spinner {
                  animation: spin 2s linear infinite;
                  width: 100px; /* Adjust the width as needed */
                }
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
        )}
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {orders?.length > 0 && orders.map((order) => (
              <tr key={order._id} className="bg-gray-100 mb-2 p-4 rounded-lg">
                <td className="p-2 whitespace-nowrap">
                  <div className={
                    (order.paid ? 'bg-green-500' : 'bg-red-400')
                    + ' rounded-md text-white w-24 text-center'
                  }>
                    {order.paid ? 'Paid' : 'Not paid'}
                  </div>
                </td>
                <td className="grow p-2 whitespace-nowrap">
                  <div className="flex gap-2 items-center mb-1">
                    <div className="grow">{order.userEmail}</div>
                    <div className="dark:text-black text-gray-500 text-sm">{dbTimeForHuman(order.createdAt)}</div>
                  </div>
                  <div className="text-gray-500 text-xs dark:text-black">
                    {order.cartProducts.map(p => p.name).join(', ')}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <Link href={"/orders/"+order._id} className="button dark:text-black">
                    Show order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
