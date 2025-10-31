import React, { useState } from "react";
import "../styles/SearchOperationWaqf.css";

export default function SearchAwqafPage() {
  const [formData, setFormData] = useState({
    operationNumber: "",
    operationDate: "",
    operationAmount: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null); // ✅ for confirmation modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const results = [
      {
        id: 1,
        operationNumber: "12345",
        operationDate: "2025-05-20",
        operationAmount: "20000",
      },
      {
        id: 2,
        operationNumber: "67890",
        operationDate: "2025-07-12",
        operationAmount: "45000",
      },
    ];
    setSearchResults(results);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setSearchResults([]);
  };

  // ✅ Show center message
  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleDelete = (id) => {
    // ✅ Open confirmation modal instead of deleting directly
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    setSearchResults((prev) =>
      prev.filter((item) => item.id !== confirmDeleteId)
    );
    setConfirmDeleteId(null);
    showMessage("تم حذف العملية بنجاح 🗑️", "delete");
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const handleEdit = (id) => {
    setEditRow(id);
  };

  const handleSave = (id) => {
    setEditRow(null);
    showMessage("تم حفظ التعديلات بنجاح 💾", "success");
  };

  const handleConfirm = (id) => {
    showMessage("تم تأكيد العملية الوقفية ✅", "success");
  };

  const handleFieldChange = (e, id, field) => {
    const { value } = e.target;
    setSearchResults((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="awqaf-search-container" dir="rtl">
      {/* ✅ Floating message */}
      {message && (
        <div className={`floating-message ${messageType}`}>{message}</div>
      )}

      {/* ✅ Confirmation Modal */}
      {confirmDeleteId && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>⚠️ هل أنت متأكد من رغبتك في حذف هذه العملية الوقفية؟</p>
            <div className="confirm-actions">
              <button className="btn-confirm-delete" onClick={confirmDelete}>
                نعم، احذف
              </button>
              <button className="btn-cancel-delete" onClick={cancelDelete}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {!showResults ? (
        <div className="awqaf-search-card">
          <div className="form-row">
            <label>رقم العملية الوقفية</label>
            <input
              type="text"
              name="operationNumber"
              value={formData.operationNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>تاريخ العملية الوقفية</label>
            <input
              type="date"
              name="operationDate"
              value={formData.operationDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>مبلغ العملية الوقفية</label>
            <input
              type="number"
              name="operationAmount"
              value={formData.operationAmount}
              onChange={handleChange}
            />
          </div>

          <button className="search-btn" onClick={handleSearch}>
            بحث
          </button>
        </div>
      ) : (
        <div className="awqaf-results-card">
          <table className="results-table">
            <thead>
              <tr>
                <th>رقم العملية الوقفية</th>
                <th>تاريخ العملية الوقفية</th>
                <th>مبلغ العملية الوقفية</th>
                <th>تأكيد</th>
                <th>تعديل</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((item) => (
                <tr key={item.id}>
                  <td>
                    {editRow === item.id ? (
                      <input
                        type="text"
                        value={item.operationNumber}
                        onChange={(e) =>
                          handleFieldChange(e, item.id, "operationNumber")
                        }
                      />
                    ) : (
                      item.operationNumber
                    )}
                  </td>

                  <td>
                    {editRow === item.id ? (
                      <input
                        type="date"
                        value={item.operationDate}
                        onChange={(e) =>
                          handleFieldChange(e, item.id, "operationDate")
                        }
                      />
                    ) : (
                      item.operationDate
                    )}
                  </td>

                  <td>
                    {editRow === item.id ? (
                      <input
                        type="number"
                        value={item.operationAmount}
                        onChange={(e) =>
                          handleFieldChange(e, item.id, "operationAmount")
                        }
                      />
                    ) : (
                      item.operationAmount
                    )}
                  </td>

                  <td
                    className="action confirm"
                    onClick={() => handleConfirm(item.id)}
                  >
                    تأكيد
                  </td>

                  <td
                    className="action edit"
                    onClick={() =>
                      editRow === item.id
                        ? handleSave(item.id)
                        : handleEdit(item.id)
                    }
                  >
                    {editRow === item.id ? "حفظ" : "تعديل"}
                  </td>

                  <td
                    className="action delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    حذف
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="back-btn" onClick={handleBack}>
            ← الرجوع إلى القائمة الرئيسية
          </button>
        </div>
      )}
    </div>
  );
}
