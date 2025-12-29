import useProductStore from "./store/SsProduct";
import { useState } from "react";
import AdminProducts from "./AdminProducts";

const AdminDashboard = () => {
  const { products, addProduct, deleteProduct } = useProductStore();

  const [form, setForm] = useState({
    name: "",
    price: "",
    brand:"",
    catogory:"",
    image: "",
    description: "",
  });

  const handleAdd = () => {
    addProduct({
      id: Date.now(),
      ...form,
    });

    setForm({ name: "", price: "", image: "", description: "" });
  };
   const [catalog, setCataloog] = useState({
    catogory: " shirts, trousers,hoodies, other"
    
  });
  const handleCatalog =()=>{
    setCataloog({ catogory})
  }
  
 
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-600 text-white p-6">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>

        <nav className="flex flex-col gap-4 text-gray-300">
          <span className="cursor-pointer hover:text-white">Dashboard</span>
          <span className="cursor-pointer hover:text-white">Products</span>
          <span className="cursor-pointer hover:text-white">Add Product</span>
          <span className="cursor-pointer hover:text-white">Orders</span>
          <span className="cursor-pointer hover:text-white">Logout</span>
        </nav>
      </aside>


      <main className="flex-1 p-8">


        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Products</p>
            <h2 className="text-3xl font-bold">128</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Brands</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Categories</p>
            <h2 className="text-3xl font-bold">4</h2>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Orders</p>
            <h2 className="text-3xl font-bold">54</h2>
          </div>
        </div>


        <div className="bg-white p-6 rounded-xl shadow mb-10 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>

          <div className="grid grid-cols-2 gap-4">
           <input className="border p-2 rounded" placeholder="Product Name" 
                value={form.name}
                 onChange={(e) => setForm({ ...form, name: e.target.value })}/>
            <input className="border p-2 rounded" placeholder="Brand" 
                 value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}/>
              <select
              className="border p-2 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Shirts">Shirts</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Trousers">Trousers</option>
              <option value="Other">Other</option>
            </select>
            <input className="border p-2 rounded" placeholder="Price" 
                value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}/>
            <input className="border p-2 rounded col-span-2" placeholder="Image URL"  
                  value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}/>
                      <textarea
                      placeholder="Description"
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      className="border p-2 mb-2 w-full"
                    />

          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded"
          onClick={handleAdd}>
            Add Product
          </button>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
        
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2">Name</th>
                <th>Brand</th>
                <th
                >Category</th>
                <th>Price</th>
                <th>Discription</th>
              </tr>
            </thead>
             {products.map((p) => (
            <tbody>
              <tr className="border-b  ">
                <td className="py-3 h-15">{p.name}</td>
                <td>{p.brand}</td>
                <td>{p.category}</td>
                
                <td>₹ {p.price}</td>
                <td>{p.description}</td>
                <td className="text-red-500 cursor-pointer"
                onClick={() => deleteProduct(p.id)}>Delete</td>
              </tr>
              
            </tbody>
               ))}
          </table>
         
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;
