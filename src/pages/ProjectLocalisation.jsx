import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectLocalisation.css";

export default function InitiativeList() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // For demonstration: fake data
  const dummyData = [1, 2, 3];

  // Go to Create Project
  const goToCreateProject = () => {
    navigate("/projects/create");
  };

  // Show confirmation popup
  const handleSuspendClick = () => {
    setShowConfirm(true);
  };

  // When user confirms
  const confirmSuspension = () => {
    setShowConfirm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // hide after 3s
  };

  // When user cancels
  const cancelSuspension = () => {
    setShowConfirm(false);
  };

  return (
    <div className="list-page-container" dir="rtl">
      <div className="list-card">
        {/* Search section */}
        <div className="list-controls">
          <div className="search-input-group">
            <label>كلمات البحث</label>
            <input type="text" className="search-input" />
          </div>
          <button type="button" className="search-button">
            بحث
          </button>
        </div>

        {/* Table section */}
        <div className="list-table">
          <div className="list-header">
            <div>اسم المشروع</div>
            <div> الجهة المسؤولة</div>
            <div>المبلغ المراد تعبئته</div>
            <div></div>
          </div>

          <div className="list-body">
            {dummyData.map((item) => (
              <div key={item} className="list-row">
                <div className="data-placeholder">
                  <input type="text" className="data-input" />
                </div>
                <div className="data-placeholder">
                  <input type="text" className="data-input" />
                </div>
                <div className="data-placeholder">
                  <input type="text" className="data-input" />
                </div>

                <div className="action-cell">
                  <button className="action-link" onClick={goToCreateProject}>
                    تعديل
                  </button>
                  <button
                    className="action-link action-suspend"
                    onClick={handleSuspendClick}
                  >
                    تعليق
                  </button>
                  <button className="action-link">اطلاع</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== Confirmation Modal ====== */}
      {showConfirm && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>هل أنت متأكد من تعليق هذه المبادرة؟</h3>
            <div className="popup-actions">
              <button className="confirm-btn" onClick={confirmSuspension}>
                نعم
              </button>
              <button className="cancel-btn" onClick={cancelSuspension}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== Success Message ====== */}
      {showSuccess && (
        <div className="success-message">✅ تم تعليق المبادرة بنجاح</div>
      )}
    </div>
  );
}
