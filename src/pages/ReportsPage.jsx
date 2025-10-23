import React from "react";
// ÉTAPE 1: Importez l'icône PDF
import { FaFilePdf } from "react-icons/fa";

// ÉTAPE 2: Importez votre nouveau fichier CSS
import "../styles/ReportsPage.css";

// Données pour les rapports
const reports = [
  {
    title: "خطة عمل المؤسسة لمساعدة مرضى السرطان",
    url: "#", // Mettez le lien vers le PDF ici
  },
  {
    title: "التقرير السنوي لمنصة الأوقاف",
    url: "#",
  },
  {
    title: "دراسة جدوى للمركز التجاري",
    url: "#",
  },
];

export default function ReportList() {
  return (
    <div className="report-page-container" dir="rtl">
           {" "}
      <div className="report-card">
        {/* --- Section de recherche --- */}       {" "}
        <div className="report-search-bar">
          <div className="search-input-group">
            <label>كلمات البحث</label>
            <input type="text" className="search-input" />
          </div>
          <button type="button" className="search-button">
            بحث
          </button>
                 {" "}
        </div>
        {/* --- Grille des rapports --- */}       {" "}
        <div className="report-grid">
          {reports.map((report) => (
            // "target_blank" pour ouvrir dans un nouvel onglet
            <a
              key={report.title}
              href={report.url}
              className="report-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf className="pdf-icon" />
              <span className="report-title">{report.title}</span>
            </a>
          ))}
                 {" "}
        </div>
        {/* --- Pied de page avec lien de retour --- */}
        <div className="report-footer">
          <a href="#" className="return-link">
            الرجوع إلى القائمة الرئيسية
          </a>
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
