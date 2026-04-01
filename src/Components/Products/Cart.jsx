import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, cart) => sum + (cart.price || 0), 0);

  const handleProceedCheckout = () => {
    setCarts([]);
    toast("Thank You!! Your order is now being processed");
  };

  const handleRemove = (cartId) => {
    const filteredCart = carts.filter((item) => cartId !== item.id);
    setCarts(filteredCart);
    toast("Product Removed From Cart");
  };

  return (
    <div className="max-w-7xl m-auto">
      {carts.length === 0 ? (
        <div className="py-20">
          <h2 className="text-3xl text-center my-5 font-bold text-[#101727]">
            Empty Cart
          </h2>
          <p className="text-center my-5 text-lg text-[#627983]">
            Please go to Products tab and click Subscribe to add subscriptions
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 my-15 shadow-sm">
          {/* Header */}
          <h2 className="text-2xl font-bold text-[#101727] mb-8">Your Cart</h2>

          {/* Cart Items */}
          <div className="space-y-6 mb-8">
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="flex items-center justify-between pb-6 border-b border-[#f2f2f2] last:border-b-0"
              >
                {/* Icon + Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#fafafa] border border-[#f2f2f2] shrink-0">
                    <img
                      src={cart.icon}
                      className="w-6 h-6 object-contain"
                      alt={cart.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#101727]">
                      {cart.name}
                    </h3>
                    <p className="text-sm text-[#627983]">${cart.price}</p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="text-sm text-red-400 cursor-pointer"
                  onClick={() => handleRemove(cart.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="flex justify-between items-center mb-6 pt-4">
            <p className="text-[#627983] font-medium">Total:</p>
            <p className="text-3xl font-bold text-[#101727]">${total}</p>
          </div>

          {/* Checkout Button */}
          <button
            className="btn w-full py-3 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none hover:opacity-90 font-medium rounded-full h-auto min-h-12"
            onClick={handleProceedCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
