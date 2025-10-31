import React, { useState, useRef } from "react";
import { PlusSquare, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ needed for navigation
import jpegIcon from "../assets/jpeg-icon.png";
import "../styles/InitiativeForm.css";

export default function InitiativeForm() {
  const navigate = useNavigate(); // ✅ initialize navigate
  const fileInputRef = useRef(null);
  const goalSelectRef = useRef(null);

  const [initiativeImage, setInitiativeImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setInitiativeImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("📸 يرجى اختيار صورة صالحة (PNG أو JPG)");
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleGoalClick = () => {
    if (goalSelectRef.current) {
      goalSelectRef.current.focus();
    }
  };

  const goToAddPage = () => {
    navigate("/initiatives/edit"); // ✅ full path for navigation
  };

  return (
    <div className="initiative-page">
      <div className="initiative-container">
        <div className="initiative-header-bar"></div>

        <form dir="rtl" className="initiative-form">
          <div className="initiative-sections">
            {/* --- Section 1 --- */}
            <div className="initiative-section section-basic">
              {/* اسم المبادرة */}
              <div className="form-field">
                <label>اسم المبادرة</label>
                <input
                  type="text"
                  name="initiativeName"
                  className="form-input-grey"
                  placeholder="اكتب اسم المبادرة"
                />
              </div>

              {/* ✅ صورة المبادرة */}
              <div className="form-field">
                <label>صورة للمبادرة</label>
                <div className="initiative-image-row">
                  <label
                    htmlFor="initiativeImage"
                    className="logo-upload-icon"
                    onClick={handleFileClick}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="صورة المبادرة"
                        className="logo-preview-small"
                      />
                    ) : (
                      <img
                        src={jpegIcon}
                        alt="icone jpeg"
                        className="logo-default-icon"
                      />
                    )}
                  </label>

                  <input
                    type="file"
                    id="initiativeImage"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
                <small className="helper-text">صورة واحدة فقط (JPEG/PNG)</small>
              </div>

              {/* هدف التنمية المستدامة */}
              <div className="form-field">
                <label>هدف التنمية المستدامة</label>
                <div className="goal-select-row">
                  <select ref={goalSelectRef} className="form-select-grey">
                    <option>الولوج إلى التعليم</option>
                    <option>القضاء على الفقر</option>
                    <option>الصحة الجيدة</option>
                  </select>
                </div>
              </div>
            </div>

            {/* --- Section 2 --- */}
            <div className="initiative-section section-details">
              <div className="form-field">
                <label>وصف المبادرة</label>
                <textarea
                  rows="6"
                  className="form-input-grey"
                  placeholder="أدخل وصفًا موجزًا للمبادرة"
                ></textarea>
              </div>

              <div className="form-field">
                <label>المبلغ المراد تعبئته</label>
                <input
                  type="number"
                  className="form-input-blue-border"
                  placeholder="أدخل المبلغ بالدرهم"
                />
              </div>
            </div>
          </div>

          {/* --- Buttons --- */}
          <div className="form-actions-new">
            <button type="submit" className="btn-confirm">
              تأكيد
            </button>
            <button type="button" className="btn-link-return">
              الرجوع إلى القائمة الرئيسية
            </button>
            <p className="add-aciev">إضافة إنجازات خاصة بالمبادرة</p>
            <button
              type="button"
              className="btn-add-achievement-icon-only"
              onClick={goToAddPage}
            >
              <PlusSquare size={36} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
