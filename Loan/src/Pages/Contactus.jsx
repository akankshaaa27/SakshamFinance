// import React, { useState } from 'react';

// function Contactus() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     bank: '',
//     loanType: '',
//     loanDuration: '',
//     message: '',
//     loans: [],
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   // Validation
//   const validate = () => {
//     const tempErrors = {};

//     // Name validation
//     if (!formData.name.trim()) {
//       tempErrors.name = 'Full Name is required';
//     }

//     // Contact validation
//     if (!formData.contact.trim()) {
//       tempErrors.contact = 'Contact number is required';
//     } else if (!/^\d{10}$/.test(formData.contact)) {
//       tempErrors.contact = 'Enter a valid 10-digit contact number';
//     }

//     // Email validation
//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       tempErrors.email = 'Enter a valid email address';
//     }

//     // Bank validation
//     if (!formData.bank.trim()) {
//       tempErrors.bank = 'Please select a bank';
//     }

//     // Loan Type validation
//     if (!formData.loanType || formData.loanType.trim() === '') {
//       tempErrors.loanType = 'Please select a loan type';
//     }

//     // Loan Duration validation
//     if (!formData.loanDuration.trim()) {
//       tempErrors.loanDuration = 'Loan duration is required';
//     } else if (isNaN(formData.loanDuration) || Number(formData.loanDuration) <= 0) {
//       tempErrors.loanDuration = 'Enter a valid loan duration in years';
//     }

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validate()) return;

//   setLoading(true);
//   setSuccessMessage('');

//   try {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) throw new Error('Failed to submit form');

//     const data = await response.json();
//     console.log('Form submitted successfully:', data);
//     setSuccessMessage('Your message has been sent successfully!');

//     setFormData({
//       name: '',
//       email: '',
//       contact: '',
//       bank: '',
//       loanType: '',
//       loanDuration: '',
//       message: '',
//     });
//     setErrors({});
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     alert('Something went wrong! Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="max-w-7xl mx-auto px-12 py-20">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Have questions or want to discuss a project? We'd love to hear from you.
//         </p>
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded-lg">
//           {successMessage}
//         </div>
//       )}

//       {/* Contact Info Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//         {/* Address Card */}
//         <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="bg-blue-100 p-3 rounded-full mr-4">
//               <svg
//                 className="w-6 h-6 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
//           </div>
//           <a
//             href="https://www.google.com/maps?q=Sr+No.+19/1,+Hingne+Home+Colony,+Karve+Nagar,+Pune-411052"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
//           >
//             Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
//           </a>
//         </div>

//         {/* Contact Card */}
//         <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="bg-blue-100 p-3 rounded-full mr-4">
//               <svg
//                 className="w-6 h-6 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
//           </div>
//           <a
//             href="tel:+917276240084"
//             className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
//           >
//             +91 7276240084
//           </a>
//         </div>

//         {/* Email Card */}
//         <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2">
//           <div className="flex items-center mb-4">
//             <div className="bg-blue-100 p-3 rounded-full mr-4">
//               <svg
//                 className="w-6 h-6 text-blue-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
//           </div>
//           <a
//             href="mailto:sakshamfinance@gmail.com"
//             className="text-gray-600 pl-14 hover:text-blue-600 transition-colors duration-200 underline"
//           >
//             sakshamfinance@gmail.com
//           </a>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Google Map */}
//         <div className="h-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.888144677903!2d73.81075417426985!3d18.48872517014805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0054aa893b%3A0xd717ce15265054cf!2sSaksham%20softech!5e0!3m2!1sen!2sin!4v1742295671442!5m2!1sen!2sin"
//             className="w-full h-full min-h-[400px]"
//             allowFullScreen
//             loading="lazy"
//           />
//         </div>

//         {/* Contact Form */}
//         <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
//           <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.name ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                 placeholder="Enter your name"
//               />
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//             </div>

//             {/* Contact Number */}
//             <div>
//               <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
//                 Contact Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.contact ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                 placeholder="Enter your contact number"
//               />
//               {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.email ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//             </div>

//             {/* Bank */}
//             <div>
//               <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Bank
//               </label>
//               <select
//                 id="bank"
//                 value={formData.bank}
//                 onChange={handleChange}
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.bank ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//               >
//                 <option value="">-- Choose a bank --</option>
//                 <option value="HDFC Bank">HDFC Bank</option>
//                 <option value="ICICI Bank">ICICI Bank</option>
//                 <option value="State Bank of India">State Bank of India</option>
//                 <option value="Axis Bank">Axis Bank</option>
//                 <option value="Bank of Baroda">Bank of Baroda</option>
//               </select>
//               {errors.bank && <p className="text-red-500 text-sm mt-1">{errors.bank}</p>}
//             </div>

//             {/* Loan Type */}
//             <div>
//               <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Loan Type <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="loanType"
//                 value={formData.loanType || ''}
//                 onChange={handleChange}
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.loanType ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//               >
//                 <option value="">-- Choose a loan type --</option>
//                 {[
//                   'Personal Loan',
//                   'Business Loan',
//                   'Home Loan',
//                   'Car Loan',
//                   'Education Loan',
//                   'Furniture Loan',
//                   'Agriculture Loan',
//                   'Loan Against Property',
//                 ].map((loan) => (
//                   <option key={loan} value={loan}>
//                     {loan}
//                   </option>
//                 ))}
//               </select>
//               {errors.loanType && <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>}
//             </div>

//             {/* Loan Duration */}
//             <div>
//               <label htmlFor="loanDuration" className="block text-sm font-medium text-gray-700 mb-2">
//                 Loan Duration (Years) <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="number"
//                 id="loanDuration"
//                 value={formData.loanDuration}
//                 onChange={handleChange}
//                 min="1"
//                 className={`w-full px-5 py-3 border rounded-xl ${
//                   errors.loanDuration ? 'border-red-500' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
//                 placeholder="e.g. 5"
//               />
//               {errors.loanDuration && (
//                 <p className="text-red-500 text-sm mt-1">{errors.loanDuration}</p>
//               )}
//             </div>

//             {/* Additional Message */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                 Additional Message (Optional)
//               </label>
//               <textarea
//                 id="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Type your message here..."
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contactus;



import React, { useState } from "react";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    bank: "",
    loanType: "",
    loanDuration: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.contact.trim()) {
      tempErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      tempErrors.contact = "Enter a valid 10-digit contact number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Enter a valid email address";
    if (!formData.bank.trim()) tempErrors.bank = "Please select a bank";
    if (!formData.loanType.trim()) tempErrors.loanType = "Please select a loan type";
    if (!formData.loanDuration.trim()) {
      tempErrors.loanDuration = "Loan duration is required";
    } else if (isNaN(formData.loanDuration) || Number(formData.loanDuration) <= 0) {
      tempErrors.loanDuration = "Enter a valid loan duration in years";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Submit form to backend + send WhatsApp
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // 1️⃣ Save form data to backend
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save data");

      // 2️⃣ Create WhatsApp message
      const message = `
📩 *New Contact Form Submission*
---------------------------------
👤 *Name:* ${formData.name}
📞 *Contact:* ${formData.contact}
📧 *Email:* ${formData.email || "N/A"}
🏦 *Bank:* ${formData.bank}
💰 *Loan Type:* ${formData.loanType}
🕒 *Loan Duration:* ${formData.loanDuration} years
📝 *Message:* ${formData.message || "N/A"}
---------------------------------
`.trim();

      // ✅ Replace with your WhatsApp number here (with country code, no +)
      const phoneNumber = "917276240084"; // +91 7276240084
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // 3️⃣ Open WhatsApp chat directly
      window.open(whatsappURL, "_blank");

      alert("✅ Form submitted successfully! Message sent to WhatsApp.");

      // 4️⃣ Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        bank: "",
        loanType: "",
        loanDuration: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Google Map */}
        <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.888144677903!2d73.81075417426985!3d18.48872517014805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0054aa893b%3A0xd717ce15265054cf!2sSaksham%20softech!5e0!3m2!1sen!2sin!4v1742295671442!5m2!1sen!2sin"
            className="w-full h-full min-h-[400px]"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send Us a Message
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Contact */}
            <div>
              <label className="block font-medium mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.contact ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="10-digit mobile number"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Bank */}
            <div>
              <label className="block font-medium mb-2">Select Bank</label>
              <select
                id="bank"
                value={formData.bank}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.bank ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">-- Choose a bank --</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="SBI">State Bank of India</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
              </select>
              {errors.bank && (
                <p className="text-red-500 text-sm mt-1">{errors.bank}</p>
              )}
            </div>

            {/* Loan Type */}
            <div>
              <label className="block font-medium mb-2">
                Loan Type <span className="text-red-500">*</span>
              </label>
              <select
                id="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.loanType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">-- Choose a loan type --</option>
                {[
                  "Personal Loan",
                  "Business Loan",
                  "Home Loan",
                  "Car Loan",
                  "Education Loan",
                  "Furniture Loan",
                  "Agriculture Loan",
                  "Loan Against Property",
                ].map((loan) => (
                  <option key={loan} value={loan}>
                    {loan}
                  </option>
                ))}
              </select>
              {errors.loanType && (
                <p className="text-red-500 text-sm mt-1">{errors.loanType}</p>
              )}
            </div>

            {/* Loan Duration */}
            <div>
              <label className="block font-medium mb-2">
                Loan Duration (Years) <span className="text-red-500">*</span>
              </label>
              <input
                id="loanDuration"
                type="number"
                value={formData.loanDuration}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.loanDuration ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g. 5"
              />
              {errors.loanDuration && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.loanDuration}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all"
            >
              {loading ? "Submitting..." : "Submit & Send via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
