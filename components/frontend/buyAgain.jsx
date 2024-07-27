"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { updateCart } from '@/redux/slices/cartSlice';

const UserOrders = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      fetch(`/api/orders/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setOrders(data))
        .catch((error) => console.error('Error fetching orders:', error));
    }
  }, [userId]);

  const handleBuyAgain = (orderItems) => {
    const cartItems = orderItems.map((item) => ({
      id: item.productId,
      title: item.title,
      product_price: item.price,
      qty: 1, // Default quantity to 1 for repurchase
      discountedPrice: item.price, // Adjust based on your discount logic
      imageUrl: item.imageUrl
    }));

    dispatch(updateCart(cartItems));
  };

  return (
    <div className="p-6 rounded-lg dark:bg-slate-800">
      <h2 className="text-2xl font-semibold mb-4">Your Previous Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          order.orderStatus === "DELIVERED" && (
            <div key={order.orderNumber} className="mb-4 border p-4 rounded-md border-green-600">
              <h3 className="text-xl font-bold mb-2">Order Number: {order.orderNumber}</h3>
              <p className="text-gray-700 mb-2"><strong>Store Name:</strong> {order.storename}</p>
              <p className="text-gray-700 mb-2"><strong>Phone Number:</strong> {order.phoneNumber}</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> {order.streetAddress}, {order.city}, {order.state}, {order.zipCode}</p>
              <p className="text-gray-700 mb-2"><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p className="text-gray-700 mb-2"><strong>Order Status:</strong> {order.orderStatus}</p>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item.id} className="mb-2 flex items-center">
                    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 mr-2" />
                    <span>{item.title} - ₹{item.price} x {item.quantity}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBuyAgain(order.orderItems)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Buy Again
              </button>
            </div>
          )
        ))
      ) : (
        <p>No previous orders found.</p>
      )}
    </div>
  );
};

export default UserOrders;
