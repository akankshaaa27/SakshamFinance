import { useState } from "react";

export default function LoanApplicationForm() {
  const API_URL = import.meta.env.VITE_API_URL; // Your backend URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    bank: "",
    loan: "",
    duration: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const banks = [
    "State Bank of India (SBI)",
    "Bank of Maharashtra (BoM)",
    "Bank of Baroda (BoB)",
    "Punjab National Bank (PNB)",
    "Canara Bank",
    "Union Bank of India",
    "Central Bank of India",
    "Indian Bank",
    "Indian Overseas Bank (IOB)",
    "UCO Bank",
    "Bank of India (BoI)",
    "Punjab & Sind Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "IDFC First Bank",
    "RBL Bank",
    "Other",
  ];

  const loans = [
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Education Loan",
    "Loan Against Property",
    "Vehicle Loan",
    "Electronics Loan",
    "Agriculture Loan",
  ];

  // Handle input blur events
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const fieldErrors = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, ...fieldErrors }));
  };

  // Handle input changes with formatting
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "contact":
        const digits = value.replace(/\D/g, "").slice(0, 10);
        setFormData((prev) => ({ ...prev, [name]: digits }));
        break;
      case "duration":
        const numbers = value.replace(/\D/g, "");
        setFormData((prev) => ({ ...prev, [name]: numbers }));
        break;
      case "name":
        const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
        setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
        break;
      default:
        setFormData((prev) => ({ ...prev, [name]: value }));
        break;
    }

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate individual fields
  const validateField = (fieldName, value) => {
    const newErrors = {};

    switch (fieldName) {
      case "name":
        if (!value.trim()) newErrors.name = "Name is required";
        else if (value.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
        else if (value.trim().length > 50) newErrors.name = "Name must be less than 50 characters";
        else if (!/^[a-zA-Z\s]+$/.test(value)) newErrors.name = "Only letters and spaces allowed";
        break;
      case "email":
        if (!value.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Invalid email address";
        else if (value.length > 100) newErrors.email = "Email must be less than 100 characters";
        break;
      case "contact":
        const digits = value.replace(/\D/g, "");
        if (!value.trim()) newErrors.contact = "Contact number is required";
        else if (digits.length !== 10) newErrors.contact = "Contact number must be 10 digits";
        else if (!/^[6-9]\d{9}$/.test(digits)) newErrors.contact = "Enter valid Indian mobile number";
        break;
      case "bank":
        if (!value) newErrors.bank = "Please select a bank";
        break;
      case "loan":
        if (!value) newErrors.loan = "Please select a loan type";
        break;
      case "duration":
        if (!value.trim()) newErrors.duration = "Loan duration is required";
        else if (!/^\d+$/.test(value)) newErrors.duration = "Duration must be a number";
        else if (parseInt(value) < 1) newErrors.duration = "Minimum 1 year";
        else if (parseInt(value) > 30) newErrors.duration = "Cannot exceed 30 years";
        break;
      case "message":
        if (value.length > 500) newErrors.message = "Message cannot exceed 500 characters";
        break;
      default:
        break;
    }

    return newErrors;
  };

  // Validate the entire form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== "message") Object.assign(newErrors, validateField(field, formData[field]));
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const allTouched = {};
    Object.keys(formData).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsSubmitting(false);
      return;
    }

    try {
      const submissionData = { ...formData, contact: formData.contact.replace(/\D/g, "") };
      const response = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      await response.json();
      setSuccess("Your loan application has been submitted successfully! Our representative will contact you within 24 hours.");

      setFormData({
        name: "",
        email: "",
        contact: "",
        bank: "",
        loan: "",
        duration: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const shouldShowError = (fieldName) => touched[fieldName] && errors[fieldName];
  const isFormValid = () => Object.keys(validateForm()).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="bg-gradient-to-b from-blue-600 to-indigo-700 p-8 text-white flex flex-col justify-center md:w-1/3">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Loan Application</h2>
              <p className="text-blue-100 mb-6">Fill in your details to get started with your loan process</p>
            </div>
            {/* Progress Steps */}
            <div className="space-y-6 mt-4">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${formData.name && formData.email && formData.contact && !errors.name && !errors.email && !errors.contact ? 'bg-green-500 shadow-lg' : 'bg-blue-500'}`}>
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <span className="font-semibold block">Basic Information</span>
                  <span className="text-blue-200 text-sm">Name, Email, Contact</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${formData.bank && formData.loan && formData.duration && !errors.bank && !errors.loan && !errors.duration ? 'bg-green-500 shadow-lg' : 'bg-blue-400'}`}>
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <span className="font-semibold block">Loan Details</span>
                  <span className="text-blue-200 text-sm">Bank, Loan Type, Duration</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${success ? 'bg-green-500 shadow-lg' : 'bg-blue-300'}`}>
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <span className="font-semibold block">Submission</span>
                  <span className="text-blue-200 text-sm">Review & Apply</span>
                </div>
              </div>
            </div>

            {/* Error Summary */}
            {Object.keys(errors).length > 0 && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Please fix the following errors:
                </h4>
                <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
                  {Object.values(errors).map((error, index) => (<li key={index}>{error}</li>))}
                </ul>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Application Submitted!
                </h4>
                <p className="text-sm text-green-700">{success}</p>
              </div>
            )}
          </div>

          {/* Right Panel Form */}
          <div className="p-8 md:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter full name"
                  className={`w-full p-3 border rounded-lg ${shouldShowError("name") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  maxLength={50}
                />
                {shouldShowError("name") && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your.email@example.com"
                  className={`w-full p-3 border rounded-lg ${shouldShowError("email") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  maxLength={100}
                />
                {shouldShowError("email") && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact ? `+91 ${formData.contact}` : ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 9876543210"
                  className={`w-full p-3 border rounded-lg ${shouldShowError("contact") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  maxLength={14}
                />
                {shouldShowError("contact") && <p className="text-red-500 text-sm">{errors.contact}</p>}
              </div>

              {/* Bank */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Select Bank *</label>
                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border rounded-lg ${shouldShowError("bank") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                >
                  <option value="">Choose your bank</option>
                  {banks.map((bank, idx) => (<option key={idx} value={bank}>{bank}</option>))}
                </select>
                {shouldShowError("bank") && <p className="text-red-500 text-sm">{errors.bank}</p>}
              </div>

              {/* Loan */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Loan Type *</label>
                <select
                  name="loan"
                  value={formData.loan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border rounded-lg ${shouldShowError("loan") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                >
                  <option value="">Select loan type</option>
                  {loans.map((loan, idx) => (<option key={idx} value={loan}>{loan}</option>))}
                </select>
                {shouldShowError("loan") && <p className="text-red-500 text-sm">{errors.loan}</p>}
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Loan Duration (Years) *</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1-30 years"
                  className={`w-full p-3 border rounded-lg ${shouldShowError("duration") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                />
                {shouldShowError("duration") && <p className="text-red-500 text-sm">{errors.duration}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Any additional information..."
                  className={`w-full p-3 border rounded-lg ${shouldShowError("message") ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  rows={4}
                  maxLength={500}
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Processing..." : "Submit Loan Application"}
                </button>
              </div>

              {/* Submission Errors */}
              {errors.submit && <p className="md:col-span-2 text-red-600 mt-3">{errors.submit}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
