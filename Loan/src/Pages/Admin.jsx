import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [operationLoading, setOperationLoading] = useState(null);
  const [error, setError] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    loans: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  const API_URL = "https://loanfinance.onrender.com/api/contacts";
  const navigate = useNavigate();

  // --- Fetch contacts ---
  const fetchContacts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to fetch contacts: ${res.status}`);
      }
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // --- Pagination ---
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
  const totalPages = Math.ceil(contacts.length / contactsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // --- Delete Contact ---
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    setOperationLoading(id);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to delete contact: ${res.status}`);
      }
      setContacts((prev) => prev.filter((c) => c._id !== id));
      alert("Contact deleted successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(null);
    }
  };

  // --- Edit handlers ---
  const handleEditChange = (e) => {
    const { id, value } = e.target;
    setEditData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoanChange = (e) => {
    const { value, checked } = e.target;
    setEditData((prev) => ({
      ...prev,
      loans: checked
        ? [...prev.loans, value]
        : prev.loans.filter((loan) => loan !== value),
    }));
  };

  const openEditModal = (contact) => {
    setEditingContact(contact._id);
    setEditData({
      name: contact.name || "",
      email: contact.email || "",
      contact: contact.contact || "",
      message: contact.message || "",
      loans: contact.loans || [],
    });
  };

  // --- Update Contact ---
  const handleUpdate = async () => {
    if (!editingContact) return;

    setOperationLoading("update");
    try {
      const res = await fetch(`${API_URL}/${editingContact}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to update contact: ${res.status}`);
      }
      const updatedContact = await res.json();
      setContacts((prev) =>
        prev.map((c) => (c._id === editingContact ? updatedContact : c))
      );
      setEditingContact(null);
      alert("Contact updated successfully!");
    } catch (err) {
      alert(err.message);
    } finally {
      setOperationLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage all contact inquiries</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  Loading...
                </>
              ) : (
                "Refresh"
              )}
            </button>

            <button
              onClick={() => navigate("/realestateadmin")}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
            >
              RealEstate
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p>{error}</p>
          </div>
        )}

        {/* Contacts Table */}
        {!loading && currentContacts.length > 0 ? (
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">#</th>
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Name</th>
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Email</th>
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Contact</th>
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Loans</th>
                    <th className="py-4 px-6 text-left font-semibold uppercase tracking-wider">Message</th>
                    <th className="py-4 px-6 text-center font-semibold uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentContacts.map((contact, index) => (
                    <tr key={contact._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-4 px-6">{indexOfFirstContact + index + 1}</td>
                      <td className="py-4 px-6 font-medium text-gray-900">{contact.name}</td>
                      <td className="py-4 px-6 text-blue-600">{contact.email || "N/A"}</td>
                      <td className="py-4 px-6">{contact.contact}</td>
                      <td className="py-4 px-6">
                        {contact.loans?.length ? (
                          <div className="flex flex-wrap gap-1">
                            {contact.loans.map((loan, i) => (
                              <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                                {loan}
                              </span>
                            ))}
                          </div>
                        ) : "None"}
                      </td>
                      <td className="py-4 px-6 max-w-xs truncate">{contact.message}</td>
                      <td className="py-4 px-6 flex gap-2 justify-center">
                        <button
                          onClick={() => openEditModal(contact)}
                          disabled={operationLoading}
                          className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-200 text-white px-4 py-2 rounded-lg"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(contact._id)}
                          disabled={operationLoading === contact._id}
                          className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-4 py-2 rounded-lg flex items-center gap-1"
                        >
                          {operationLoading === contact._id ? (
                            <div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-white"></div>
                          ) : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-2 p-4">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          !loading && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mt-4">No contacts available</h3>
              <p className="text-gray-500 mt-2">No contact inquiries have been submitted yet.</p>
            </div>
          )
        )}

        {/* Edit Modal */}
        {editingContact && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white">
                <h2 className="text-2xl font-bold">Edit Contact</h2>
              </div>
              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                {["name", "email", "contact"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      id={field}
                      value={editData[field] || ""}
                      onChange={handleEditChange}
                      className="border p-2 w-full rounded"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    value={editData.message || ""}
                    onChange={handleEditChange}
                    className="border p-2 w-full rounded"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loans:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Personal Loan", "Business Loan", "Home Loan", "Car Loan", "Education Loan", "Furniture Loan", "Agriculture Loan", "Loan Against Property"].map((loan) => (
                      <label key={loan} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={loan}
                          checked={editData.loans?.includes(loan)}
                          onChange={handleLoanChange}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{loan}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end p-4 gap-2 bg-gray-50">
                <button
                  onClick={() => setEditingContact(null)}
                  disabled={operationLoading === "update"}
                  className="px-4 py-2 border rounded disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  disabled={operationLoading === "update"}
                  className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-blue-400 flex items-center gap-2"
                >
                  {operationLoading === "update" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  ) : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
