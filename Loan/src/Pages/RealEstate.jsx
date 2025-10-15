import { useState, useEffect } from "react";
import { FiHeart, FiMapPin, FiHome, FiDollarSign, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RealEstate = () => {
  const [favorites, setFavorites] = useState([]);
  const [properties, setProperties] = useState([]); // Only backend properties
  const navigate = useNavigate();

  // 🧠 Fetch properties from backend API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/properties`);
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // 💰 Price formatter
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // ❤️ Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🌅 Hero Section */}
      <div className="relative bg-gradient-to-br from-[#A5DD9B] to-[#C5EBAA] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Find Your Dream Property
          </h1>
          <p className="text-xl mb-8 drop-shadow-md">
            Discover the perfect home, land, or commercial space
          </p>

          {/* 🏠 Add Property Button */}
         <button
  onClick={() => window.open("https://wa.me/917276240084", "_blank")}
  className="mt-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
>
  Add / Buy Property
</button>

        </div>
      </div>

      {/* 📋 Property Listings */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Properties for Sale</h2>
          <div className="text-gray-600 font-medium">{properties.length} properties found</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={property.images?.[0] || "https://via.placeholder.com/400x250"}
                  alt={property.title || "Property"}
                  className="w-full h-56 object-cover"
                />
                {property.featured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(property._id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all hover:scale-110 ${
                    favorites.includes(property._id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700 hover:text-red-500"
                  }`}
                >
                  <FiHeart />
                </button>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                  <span className="text-lg font-bold text-blue-600">{formatPrice(property.price)}</span>
                </div>

                <p className="text-gray-600 mb-4 flex items-center">
                  <FiMapPin className="mr-1" size={16} /> {property.location || "Unknown Location"}
                </p>

                <div className="flex justify-between text-sm text-gray-600 border-t pt-3">
                  <span className="flex items-center">
                    <FiHome className="mr-1" size={14} /> {property.type || "Property"}
                  </span>
                  <span className="flex items-center">
                    <FiLayers className="mr-1" size={14} /> {property.area || "N/A"} sq.ft
                  </span>
                  <span className="flex items-center">
                    <FiDollarSign className="mr-1" size={14} /> {property.bedrooms || 0} beds | {property.bathrooms || 0} baths
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
