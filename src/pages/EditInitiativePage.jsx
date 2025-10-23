import React, { useRef } from "react";
import { PlusSquare, File, BookOpen } from "lucide-react";

import "../styles/EditInitiativePage.css";

export default function InitiativeForm() {
  const fileInputRef = useRef(null);
  const goalSelectRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click(); // open file selector
  };

  const handleGoalClick = () => {
    goalSelectRef.current.focus(); // focus the select
  };

  return (
    <div className="initiative-page">
      <div className="initiative-container">
        <div className="initiative-header-bar"></div>

        <form dir="rtl" className="initiative-form">
          <div className="initiative-sections">
            {/* Section 1 */}
            <div className="initiative-section section-basic">
              <div className="form-field">
                <label>اسم المبادرة</label>
                <input type="text" className="form-input-grey" />
              </div>

              <div className="form-field icon-field">
                <label>صورة للمبادرة</label>
                <button
                  type="button"
                  className="icon-button"
                  onClick={handleFileClick}
                >
                  <File size={24} />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden-input"
                  accept="image/*"
                  onChange={(e) => console.log(e.target.files[0])}
                />
              </div>

              <div className="form-field icon-field">
                <label>هدف التنمية المستدامة</label>
                <button
                  type="button"
                  className="icon-button"
                  onClick={handleGoalClick}
                >
                  <BookOpen size={24} />
                </button>
                <select ref={goalSelectRef} className="form-select-grey">
                  <option>الولوج إلى التعليم</option>
                  <option>القضاء على الفقر</option>
                  <option>الصحة الجيدة</option>
                </select>
              </div>

              <div className="form-field ">
                <label>إضافةإنجاز</label>
                <input type="text" className="form-input-grey" />
              </div>

              <div className="form-field icon-field">
                <label>صور</label>
                <button
                  type="button"
                  className="icon-button"
                  onClick={handleFileClick}
                >
                  <File size={24} />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden-input"
                  accept="image/*"
                  onChange={(e) => console.log(e.target.files[0])}
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="initiative-section section-details">
              <div className="form-field">
                <label>وصف المبادرة</label>
                <textarea rows="6" className="form-input-grey"></textarea>
              </div>

              <div className="form-field">
                <label>المبلغ المراد تعبئته</label>
                <input type="number" className="form-input-blue-border" />
              </div>

              <div className="form-field">
                <label>نص الإنجاز</label>
                <textarea rows="6" className="form-input-grey"></textarea>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="form-actions-new">
            <button type="submit" className="btn-confirm">
              تأكيد
            </button>
            <button type="button" className="btn-link-return">
              الرجوع إلى القائمة الرئيسية
            </button>
            <p className="add-aciev">إضافةإنجازات خاصة بالمبادرة</p>
            <button type="button" className="btn-add-achievement-icon-only">
              <PlusSquare size={36} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
