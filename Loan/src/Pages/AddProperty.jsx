import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    area: "",
    description: "",
    images: ["", "", "", ""],
    featured: false,
    type: "", // added type field (required)
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image input changes
  const handleImageChange = (index, value) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData({ ...formData, images: updatedImages });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!formData.title || !formData.price || !formData.location || !formData.area || !formData.type) {
      toast.error("Please fill all required fields!");
      return;
    }

    const validImages = formData.images.filter((img) => img.trim() !== "");
    if (validImages.length === 0) {
      toast.error("Please add at least one image URL!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/properties`, {
        ...formData,
        images: validImages,
      });
      toast.success("Property added successfully!");
      navigate("/"); // redirect after success
    } catch (error) {
      console.error(error);
      toast.error("Failed to add property. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🏠 Add Property</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter property title"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter property type (e.g., Villa, Apartment)"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Price (INR)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Area (sq.ft)</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area size"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter property description"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Images */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Image URLs (up to 4)</label>
            {formData.images.map((img, index) => (
              <input
                key={index}
                type="text"
                value={img}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder={`Image URL ${index + 1}`}
                className="w-full p-2 mb-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            ))}
          </div>

          {/* Featured */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="mr-2 w-4 h-4"
            />
            <label className="text-gray-700 font-medium">Featured</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-lg font-semibold text-white rounded-lg transition-all ${
              loading ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 shadow-lg"
            }`}
          >
            {loading ? "Adding..." : "Add Property"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
