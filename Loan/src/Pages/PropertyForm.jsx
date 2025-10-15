import React, { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    area: "",
    location: "",
    price: "",
    clientName: "",
    contactNo: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });

  const [loading, setLoading] = useState(false);
  const API_URL = "https://loanfinance.onrender.com/api/properties";

  // Dropdown options
  const cities = ["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Mumbai","Pune","Delhi","Bangalore","Chennai"];
  const propertyTypes = ["Apartment", "Villa", "Row House", "Penthouse", "Studio", "Duplex"];
  const bedroomOptions = [1,2,3,4,5,6];
  const bathroomOptions = [1,2,3,4,5];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert numeric fields
      const payload = {
        ...formData,
        area: Number(formData.area),
        price: formData.price ? Number(formData.price) : undefined,
        minPrice: formData.minPrice ? Number(formData.minPrice) : undefined,
        maxPrice: formData.maxPrice ? Number(formData.maxPrice) : undefined,
        bedrooms: formData.bedrooms ? Number(formData.bedrooms) : undefined,
        bathrooms: formData.bathrooms ? Number(formData.bathrooms) : undefined,
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to submit property: ${text}`);
      }

      const data = await res.json();
      alert("✅ Property submitted successfully!");

      // Reset form
      setFormData({
        title: "",
        type: "",
        area: "",
        location: "",
        price: "",
        clientName: "",
        contactNo: "",
        propertyType: "",
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        bathrooms: "",
      });
    } catch (err) {
      console.error("❌ Error submitting property:", err);
      alert("❌ Failed to submit property. Check required fields.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">🏠 Add Property</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">Title *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full border rounded-lg p-2"/>
        </div>

        {/* Type */}
        <div>
          <label className="block mb-2 font-medium">Type *</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required className="w-full border rounded-lg p-2"/>
        </div>

        {/* Area */}
        <div>
          <label className="block mb-2 font-medium">Area (sq.ft) *</label>
          <input type="number" name="area" value={formData.area} onChange={handleChange} required className="w-full border rounded-lg p-2"/>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-medium">Location *</label>
          <select name="location" value={formData.location} onChange={handleChange} required className="w-full border rounded-lg p-2">
            <option value="">Select City</option>
            {cities.map((city, i) => <option key={i} value={city}>{city}</option>)}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-medium">Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded-lg p-2"/>
        </div>

        {/* Client Name */}
        <div>
          <label className="block mb-2 font-medium">Client Name</label>
          <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} className="w-full border rounded-lg p-2"/>
        </div>

        {/* Contact No */}
        <div>
          <label className="block mb-2 font-medium">Contact No</label>
          <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} className="w-full border rounded-lg p-2"/>
        </div>

        {/* Property Type */}
        <div>
          <label className="block mb-2 font-medium">Property Type</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full border rounded-lg p-2">
            <option value="">Select Property Type</option>
            {propertyTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block mb-2 font-medium">Min Price</label>
          <input type="number" name="minPrice" value={formData.minPrice} onChange={handleChange} className="w-full border rounded-lg p-2"/>
        </div>

        {/* Max Price */}
        <div>
          <label className="block mb-2 font-medium">Max Price</label>
          <input type="number" name="maxPrice" value={formData.maxPrice} onChange={handleChange} className="w-full border rounded-lg p-2"/>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block mb-2 font-medium">Bedrooms</label>
          <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full border rounded-lg p-2">
            <option value="">Select Bedrooms</option>
            {bedroomOptions.map((b,i)=> <option key={i} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block mb-2 font-medium">Bathrooms</label>
          <select name="bathrooms" value={formData.bathrooms} onChange={handleChange} className="w-full border rounded-lg p-2">
            <option value="">Select Bathrooms</option>
            {bathroomOptions.map((b,i)=> <option key={i} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center mt-4">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300">
            {loading ? "Submitting..." : "Submit Property"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default PropertyForm;
