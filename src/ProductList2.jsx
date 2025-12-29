import { useState } from "react";

const ProductList2 = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ NORMAL LOCAL DATA (like you asked)
  const products = [
    {
      id: 1,
      title: "Black Hoodie",
      price: 999,
      thumbnail:
        "https://image.hm.com/assets/hm/83/82/8382674e3d631141f9eeb7effd0305733e2e5cc2.jpg",
    },
    {
      id: 2,
      title: "White T-Shirt",
      price: 499,
      thumbnail:
        "https://image.hm.com/assets/hm/3a/34/3a34c07b3dfd3500dfd262be127cc5808b0d1f1b.jpg",
    },
    {
      id: 3,
      title: "Printed Shirt",
      price: 799,
      thumbnail:
        "https://image.hm.com/assets/hm/fa/4e/fa4ef490806006bbcb162842f5bd05aaa412869a.jpg",
    },
    {
      id: 4,
      title: "Slim Jeans",
      price: 1199,
      thumbnail:
        "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg?imwidth=2160",
    },
    {
      id: 5,
      title: "Casual Sneakers",
      price: 1599,
      thumbnail:
        "https://image.hm.com/assets/hm/55/44/5544e3f1234567890.jpg",
    },
  ];


  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="p-10">


      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mr-0 max-w-40 text-lg  bg-white text-cyan-500 font-semibold"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 mx-auto object-cover"
            />

            <h2 className="font-semibold mt-2">
              {product.title}
            </h2>

            <p>₹ {product.price}</p>

            <button className="mt-2 w-full bg-black text-white py-2 rounded">
              Add to Cart
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductList2;
