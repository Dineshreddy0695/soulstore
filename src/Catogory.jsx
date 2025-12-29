import { Shirt, ShoppingBag, Footprints, Layers, SprayCan } from "lucide-react";
import { Link } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";

const CategoryCard = ({ Icon, label }) => (
  <div className="h-15 w-50 flex items-center gap-4 px-4 border rounded-xl hover:shadow-sm hover:-translate-y-1 transition cursor-pointer">
    <Icon className="w-5 h-5 text-gray-700" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

function Category() {
  return (
    <div className="flex gap-50 mt-5">

      <div className="pl-20">
        <h1 className="text-4xl">Shop by Category</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 auto-rows-min">

        <Link to="/mens/shirts"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={Shirt} label="Shirts" />
        </Link>

        <Link to="/mens/hoodie"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={Layers} label="Hoodies" />
        </Link>

        <Link to="/mens/trousers"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={ShoppingBag} label="Trousers" />
        </Link>

        <Link to="/mens/Tshirts"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={Shirt} label="T-Shirts" />
        </Link>

        <Link to="/mens/perfumes"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={SprayCan} label="Perfumes" />
        </Link>

        <Link to="/mens/sneakers"  target="_blank"
  rel="noopener noreferrer">
          <CategoryCard Icon={FiBriefcase} label="Sneakers" />
        </Link>

      </div>
    </div>
  );
}

export default Category;
