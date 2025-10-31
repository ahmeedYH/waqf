import React, { useState } from "react";
import "../styles/SearchAttestationPage.css";
import certificateImage from "../assets/certificate-logo.png"; // ← ajoute ton image ici

export default function SearchAttestationPage() {
  const [formData, setFormData] = useState({
    operationNumber: "",
    identifierNumber: "",
    operationDate: "",
    operationAmount: "",
    certificateType: "",
  });

  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [showPdfScreen, setShowPdfScreen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const fakeResults = [
      {
        id: 1,
        operationNumber: "WAQF001",
        operationDate: "2025-04-11",
        operationAmount: "25000",
        waqfType: "وقف خيري",
        certificateType: "شهادة تبرع",
        status: "طلب قيد الإنجاز",
        pdfReady: false,
      },
      {
        id: 2,
        operationNumber: "WAQF002",
        operationDate: "2025-02-18",
        operationAmount: "18000",
        waqfType: "وقف استثماري",
        certificateType: "شهادة استثمار",
        status: "شهادة جاهزة",
        pdfReady: true,
      },
    ];
    setResults(fakeResults);
    setShowResults(true);
  };

  const handlePrepare = (id) => {
    setResults((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "شهادة جاهزة", pdfReady: true } : r
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف هذه الشهادة؟")) {
      setResults((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handlePdfClick = () => {
    setShowPdfScreen(true);
  };

  const handleSendCertificate = () => {
    alert(
      "✅ تم إرسال الشهادة بنجاح إلى البريد الإلكتروني ورقم الهاتف المحددين"
    );
    setShowPdfScreen(false);
  };

  // --- ÉCRAN D’AFFICHAGE DU CERTIFICAT (PDF) ---
  if (showPdfScreen) {
    return (
      <div className="pdf-screen" dir="rtl">
        <h2 className="pdf-title">معاينة الشهادة</h2>
        <div className="pdf-container">
          <div className="pdf-left">
            <div className="form-row">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>رقم الهاتف</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className="send-btn" onClick={handleSendCertificate}>
              إرسال
            </button>
          </div>

          <div className="pdf-right">
            <div className="certificate-box">
              {/* ✅ Ajout de l’image du certificat */}
              <img
                src={certificateImage}
                alt="certificate"
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- ÉCRAN DE RECHERCHE NORMAL ---
  return (
    <div className="attestation-search-page" dir="rtl">
      <div className="attestation-search-card">
        <h2 className="attestation-title">البحث عن طلب شهادة</h2>

        <div className="form-grid">
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
            <label>رقم التعريف</label>
            <input
              type="text"
              name="identifierNumber"
              value={formData.identifierNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>تاريخ العملية</label>
            <input
              type="date"
              name="operationDate"
              value={formData.operationDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>مبلغ العملية</label>
            <input
              type="number"
              name="operationAmount"
              value={formData.operationAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>طبيعة الشهادة</label>
            <select
              name="certificateType"
              value={formData.certificateType}
              onChange={handleChange}
            >
              <option value="">اختر نوع الشهادة</option>
              <option value="تبرع">تبرع</option>
              <option value="استثمار">استثمار</option>
              <option value="صيانة">صيانة</option>
            </select>
          </div>
        </div>

        <button className="search-btn" onClick={handleSearch}>
          بحث
        </button>

        {showResults && (
          <div className="results-table">
            <h3>قائمة طلبات الشهادات</h3>
            <table>
              <thead>
                <tr>
                  <th>رقم العملية الوقفية</th>
                  <th>تاريخ العملية</th>
                  <th>مبلغ العملية</th>
                  <th>طبيعة الوقف</th>
                  <th>طبيعة الشهادة</th>
                  <th>حالة الطالب</th>
                  <th>إعداد / PDF</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.id}>
                    <td>{r.operationNumber}</td>
                    <td>{r.operationDate}</td>
                    <td>{r.operationAmount}</td>
                    <td>{r.waqfType}</td>
                    <td>{r.certificateType}</td>
                    <td>{r.status}</td>
                    <td>
                      {r.pdfReady ? (
                        <button className="pdf-btn" onClick={handlePdfClick}>
                          PDF
                        </button>
                      ) : (
                        <button
                          className="prepare-btn"
                          onClick={() => handlePrepare(r.id)}
                        >
                          إعداد
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(r.id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
