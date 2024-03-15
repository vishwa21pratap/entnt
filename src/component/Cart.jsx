import React from 'react';

const Cart = () => {
  return (
    <div className="m-12">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="border p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=50&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D"
              alt="Product"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <p className="text-lg font-bold">Brush</p>
              <p className="text-gray-600">Price: $58</p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
        </div>

        {/* Add more items similarly */}
      </div>

      <div className="mt-8">
        <p className="text-lg font-bold">Total: $58</p>
        <button className="bg-green-500 text-white px-6 py-3 mt-4 rounded">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
