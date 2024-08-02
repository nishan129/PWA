"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChevronDown, CheckCircle } from 'lucide-react';

const OrderStatusEnum = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELED: "CANCELED"
};

const Deliveries = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [orders, setOrders] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      fetch(`/api/orders/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setOrders(data))
        .catch((error) => console.error('Error fetching orders:', error));
    }
  }, [userId]);

  const toggleDetails = (orderNumber) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [orderNumber]: !prevState[orderNumber]
    }));
  };

  const renderOrderStatus = (order) => {
    const { orderStatus, orderCreatedAt, orderShippedAt, orderDeliveredAt } = order;

    return (
      <div className="order-status p-4 bg-white shadow rounded-lg border border-gray-200">
        <div className="timeline">
          {/* Order Placed */}
          <div className="timeline-item flex items-center">
            <div className={`timeline-marker ${orderStatus !== OrderStatusEnum.PENDING ? "bg-green-500" : "bg-gray-300"}`} />
            <div className="timeline-content ml-4">
              <h4 className="font-semibold flex items-center">
                Order Placed
                {orderStatus !== OrderStatusEnum.PENDING && <CheckCircle className="ml-2 text-green-500" size={20} />}
              </h4>
              <p className="text-xs text-gray-600">{orderCreatedAt}</p>
            </div>
          </div>
          {/* Order Confirmed */}
          {(orderStatus === OrderStatusEnum.PROCESSING || orderStatus === OrderStatusEnum.SHIPPED || orderStatus === OrderStatusEnum.DELIVERED) && (
            <div className="timeline-item flex items-center">
              <div className="timeline-marker bg-green-500" />
              <div className="timeline-content ml-4">
                <h4 className="font-semibold flex items-center">
                  Order Confirmed
                  <CheckCircle className="ml-2 text-green-500" size={20} />
                </h4>
                <p className="text-xs text-gray-600">{orderCreatedAt}</p>
              </div>
            </div>
          )}
          {/* Order Shipped */}
          {(orderStatus === OrderStatusEnum.SHIPPED || orderStatus === OrderStatusEnum.DELIVERED) && (
            <div className="timeline-item flex items-center">
              <div className="timeline-marker bg-green-500" />
              <div className="timeline-content ml-4">
                <h4 className="font-semibold flex items-center">
                  Order Shipped
                  <CheckCircle className="ml-2 text-green-500" size={20} />
                </h4>
                <p className="text-xs text-gray-600">{orderShippedAt}</p>
              </div>
            </div>
          )}
          {/* Order Delivered */}
          {orderStatus === OrderStatusEnum.DELIVERED && (
            <div className="timeline-item flex items-center">
              <div className="timeline-marker bg-green-500" />
              <div className="timeline-content ml-4">
                <h4 className="font-semibold flex items-center">
                  Order Delivered
                  <CheckCircle className="ml-2 text-green-500" size={20} />
                </h4>
                <p className="text-xs text-gray-600">{orderDeliveredAt}</p>
              </div>
            </div>
          )}
          {/* Order Canceled */}
          {orderStatus === OrderStatusEnum.CANCELED && (
            <div className="timeline-item flex items-center">
              <div className="timeline-marker bg-red-500" />
              <div className="timeline-content ml-4">
                <h4 className="font-semibold flex items-center text-red-500">
                  Order Canceled
                </h4>
                <p className="text-xs text-gray-600">Your order was canceled.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 rounded-lg">
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.orderNumber} className="mb-4 border p-4 rounded-md border-green-600 bg-white shadow-lg">
            <h3 className="text-green-500 flex justify-between font-bold mb-2">
              Order Number: {order.orderNumber}
              <ChevronDown className="cursor-pointer" onClick={() => toggleDetails(order.orderNumber)} />
            </h3>
            {showDetails[order.orderNumber] && (
              <div className="order-details mt-4">
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.productId} className="flex items-center mb-4">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className='w-16 h-16 object-cover rounded-lg' 
                        width={64} 
                        height={64} 
                      />
                      <span className="ml-4 text-sm">{item.title} - {item.quantity} x ₹{item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="text-green-500 font-semibold mb-4">Order Tracking</h4>
                  {renderOrderStatus(order)}
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No orders found</p>
      )}
    </div>
  );
};

export default Deliveries;
