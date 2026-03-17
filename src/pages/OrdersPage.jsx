import { useState, useEffect } from "react";
import axios from "axios";
import { formatMoney } from "../utils/money";
import { useNavigate } from "react-router";
const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    }).catch((error) => {
      console.error("Error fetching orders:", error);
    });
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pre-order":
        return "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300";
      case "Processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Delivered":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "";
    }
  };

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                My orders
              </h2>

              <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                <div>
                  <select
                    id="order-type"
                    className="block w-full min-w-32 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  >
                    <option>All orders</option>
                    <option value="pre-order">Pre-order</option>
                    <option value="transit">In transit</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <span className="inline-block text-gray-500 dark:text-gray-400">
                  {" "}
                  from{" "}
                </span>

                <div>
                  <select
                    id="duration"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  >
                    <option>this week</option>
                    <option value="this month">this month</option>
                    <option value="last 3 months">the last 3 months</option>
                    <option value="lats 6 months">the last 6 months</option>
                    <option value="this year">this year</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">

                {orders.map((order, index) => (
                  <div key={index} className="flex flex-wrap items-center gap-y-4 py-6">

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Order ID:
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        <a href="#" className="hover:underline">
                          {order._id.slice(-6).toUpperCase()}
                        </a>
                      </dd>
                    </dl>

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Date :
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </dd>
                    </dl>

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Price:
                      </dt>
                      <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                        {formatMoney(order.totalAmount)}
                      </dd>
                    </dl>

                    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                      <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                        Status:
                      </dt>

                      <dd
                        className={`me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </dd>
                    </dl>

                    <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">

                      {order.status === "Confirmed" ||
                        order.status === "Cancelled" ? (
                        <button
                          type="button"
                          className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 lg:w-auto"
                        >
                          Order again
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full rounded-lg border border-red-700 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white lg:w-auto"
                        >
                          Cancel order
                        </button>
                      )}

                      <button
                        onClick={() => {
                          navigate(`/orders/${order._id}`)
                        }}
                        className="w-full inline-flex cursor-pointer justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 lg:w-auto"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default OrdersPage;