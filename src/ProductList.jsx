import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductStore from "./store/useProductStore";
import useCartStore from "./useCartStore";

const ProductList = () => {
  const { products, fetchProducts, loading } = useProductStore();
  const addToCart = useCartStore((state) => state.addToCart);

  // ✅ toggle state
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  // ✅ show 4 or all
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex flex-col">
        <h1 className="text-4xl pt-5 pl-5">New Arrivals</h1>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mr-0 max-w-40 text-lg ml-320 bg-white text-cyan-500 font-semibold"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-6 p-6 overflow-hidden">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <div className="border p-4 rounded-xl">
              <Link to={`/product/${product.id}`}  target="_blank"
  rel="noopener noreferrer">
                <img
                  src={product.thumbnail || "https://via.placeholder.com/300"}
                  alt={product.title}
                  className="h-60 mx-auto object-cover"
                />
              </Link>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 mt-2">
               <h2 className="font-light mt-2 max-w-50">
                {product.title}
              </h2>
              


              <span className="text-lg font-semibold text-right">
                ₹ {product.price}
              </span>
              <span></span>
            <button
                className="text-sm text-blue-500 text-right self-end"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
