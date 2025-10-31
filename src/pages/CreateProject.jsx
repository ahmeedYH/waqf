import React, { useState } from "react";
import "../styles/CreateProject.css";
import jpegIcon from "../assets/jpeg-icon.png";
import pdfIcon from "../assets/pdf-icon.png"; // ✅ import propre

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    projectTitle: "",
    insertionDate: "",
    suspensionDate: "",
    responsibleEntity: "",
    responsibleLogo: null,
    description: "",
    waqfPercentage: "",
    startDate: "",
    exploitationDate: "",
    sustainableGoal: "",
    reportFile: null,
    expectedReturn: "",
    returnType: "",
    beneficiaries: "",
    targetAmount: "",
    beneficiaryAreas: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [logoPreview, setLogoPreview] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [pdfError, setPdfError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      if (name === "responsibleLogo" && file) {
        if (!file.type.startsWith("image/")) {
          setErrors({
            ...errors,
            responsibleLogo: "يجب تحميل صورة (PNG, JPG, ...)",
          });
          return;
        }
        setLogoPreview(URL.createObjectURL(file));
      }

      if (name === "reportFile" && file) {
        if (file.type !== "application/pdf") {
          setPdfError("يجب تحميل ملف PDF فقط.");
          return;
        }
        setPdfError("");
        setPdfName(file.name);
      }

      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.projectTitle.trim())
      newErrors.projectTitle = "يرجى إدخال عنوان المشروع.";

    if (!formData.insertionDate)
      newErrors.insertionDate = "يرجى إدخال تاريخ إدراج المشروع.";

    if (
      formData.waqfPercentage === "" ||
      formData.waqfPercentage < 0 ||
      formData.waqfPercentage > 100
    )
      newErrors.waqfPercentage = "النسبة يجب أن تكون بين 0 و 100.";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح.";

    if (!formData.responsibleEntity.trim())
      newErrors.responsibleEntity = "يرجى إدخال اسم الجهة المسؤولة.";

    if (!formData.responsibleLogo)
      newErrors.responsibleLogo = "يرجى تحميل شعار الجهة.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("✅ تم تأكيد البيانات بنجاح !");
    }
  };

  return (
    <div className="form-container" dir="rtl">
      <h2 className="form-title">نموذج المشروع الوقفي</h2>

      <form className="project-form two-columns" onSubmit={handleSubmit}>
        {/* ======= Colonne 1 ======= */}
        <div className="form-column">
          <div className="form-row">
            <label>عنوان المشروع</label>
            <input type="text" name="projectTitle" onChange={handleChange} />
            {errors.projectTitle && (
              <span className="error">{errors.projectTitle}</span>
            )}
          </div>

          <div className="form-row">
            <label>تاريخ إدراج المشروع</label>
            <input type="date" name="insertionDate" onChange={handleChange} />
            {errors.insertionDate && (
              <span className="error">{errors.insertionDate}</span>
            )}
          </div>

          <div className="form-row">
            <label>تاريخ تعليق المشروع</label>
            <input type="date" name="suspensionDate" onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>نسبة أموال الوقف</label>
            <input
              type="number"
              name="waqfPercentage"
              onChange={handleChange}
            />
            {errors.waqfPercentage && (
              <span className="error">{errors.waqfPercentage}</span>
            )}
          </div>

          <div className="form-row">
            <label>تاريخ بداية المشروع</label>
            <input type="date" name="startDate" onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>تاريخ الشروع في الاستغلال</label>
            <input
              type="date"
              name="exploitationDate"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>هدف التنمية المستدامة</label>
            <input type="text" name="sustainableGoal" onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>المناطق المستفيدة</label>
            <select
              name="returnType"
              onChange={handleChange}
              placeholder="اختر..."
            >
              <option value="المناطق">المناطق1</option>
              <option value="2 المناطق"> 2 المناطق</option>
            </select>
          </div>
        </div>

        {/* ======= Colonne 2 ======= */}
        <div className="form-column">
          <div className="form-row">
            <label>الجهة المسؤولة</label>
            <div className="responsible-entity-row">
              <input
                type="text"
                name="responsibleEntity"
                placeholder="اكتب اسم الجهة"
                onChange={handleChange}
              />
              <label htmlFor="responsibleLogo" className="logo-upload-icon">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="شعار"
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
                id="responsibleLogo"
                name="responsibleLogo"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
            {errors.responsibleEntity && (
              <span className="error">{errors.responsibleEntity}</span>
            )}
            {errors.responsibleLogo && (
              <span className="error">{errors.responsibleLogo}</span>
            )}
          </div>

          <div className="form-row">
            <label>وصف المشروع</label>
            <textarea name="description" onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <label>العائد المأمول</label>
            <input type="text" name="expectedReturn" onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>طبيعة العائد</label>
            <select
              name="returnType"
              onChange={handleChange}
              placeholder="اختر..."
            >
              <option value="مالي">مالي</option>
              <option value="غير مالي">غير مالي</option>
            </select>
          </div>

          <div className="form-row">
            <label>الموقوف عليهم</label>
            <input type="text" name="beneficiaries" onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>المبلغ المستهدف</label>
            <input type="number" name="targetAmount" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label> </label>
            <div className="pdf-upload-row">
              <label htmlFor="reportFile" className="pdf-label-with-icon">
                <span className="pdf-text">تقارير للاطلاع</span>
                <img src={pdfIcon} alt="PDF icon" className="pdf-icon" />
              </label>

              <input
                type="file"
                id="reportFile"
                name="reportFile"
                accept=".pdf"
                onChange={handleChange}
                style={{ display: "none" }}
              />

              {/* File name displayed in a textarea */}
              {pdfName && (
                <textarea
                  className="file-name-textarea"
                  value={pdfName}
                  readOnly
                  rows={1}
                />
              )}
            </div>

            {pdfError && <span className="error">{pdfError}</span>}
          </div>

          <div className="form-row">
            <label>البريد الإلكتروني</label>
            <input type="email" name="email" onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
      </form>

      <div className="form-actions">
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          تأكيد
        </button>
      </div>
    </div>
  );
}
