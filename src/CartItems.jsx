import useCartStore from "./useCartStore";

function CartItems() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = useCartStore((state) => state.cartTotal(state));

  return (
    <div>


      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-row justify-between items-center p-4  border-b-gray-300 border-b"
        >
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="h-auto w-12 object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-md">{item.name}</h3>
            <p className="text-sm text-gray-600">₹{item.price}</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 text-lg"
            >
              🗑️
            </button>
            <p className="text-sm text-gray-600">₹{item.price}</p>
          </div>
        </div>
      ))}


      <div className="mt-4 p-3 flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>₹{total}</span>
        
      </div>
      <button className="bg-sky-300 px-6 py-2 text-center h-13 rounded-4xl w-70 font-light mt-5 ml-20 mb-3">Check out</button>
    </div>
  );
}

export default CartItems;
