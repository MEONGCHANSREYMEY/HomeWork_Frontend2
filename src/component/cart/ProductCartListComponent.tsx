'use client'

import { addToCart, removeFromCart } from '@/src/redux/cart/cartslide';
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks';

export default function ProductCartListComponent() {
  const dispatch = useAppDispatch();
  // Read the cart from the Redux store
  const { items, totalQuantity, totalAmount } = useAppSelector((state) => state.cart);

  return (
    <aside className="w-full bg-white rounded-lg shadow-lg p-4 dark:bg-gray-700 text-gray-800 dark:text-gray-50">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-500 pb-3"
            >
              <img
                className="h-14 w-14 object-cover rounded"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  ${item.price.toFixed(2)} × {item.quantity} = ${item.totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label={`Remove one ${item.title}`}
                  className="h-8 w-8 rounded-full bg-red-500 text-white font-bold cursor-pointer hover:bg-red-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  aria-label={`Add one ${item.title}`}
                  className="h-8 w-8 rounded-full bg-green-500 text-white font-bold cursor-pointer hover:bg-green-600"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-col gap-1 font-semibold">
        <p>Total items: {totalQuantity}</p>
        <p>Total amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </aside>
  );
}