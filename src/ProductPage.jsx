import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "./useCartStore";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <div className="max-w- mx-auto p-6 grid grid-cols-2 gap-8">
      
      {/* Image Section */}
      <div className="">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded"
        />
      </div>

      {/* Details Section */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <p className="text-xl font-semibold mt-4">₹ {product.price}</p>
         <div className="flex flex-col">
        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-75 bg-black text-white py-3 rounded"
        >
          Add to Cart
        </button>
        
     <button className="mt-6 w-75 bg-black text-white py-3 rounded">
      buy now
     </button>
     </div>
      </div>

    </div>
  );
};

export default ProductPage;
