import React, { useState } from "react";
import "../styles//UserCreationPage.css";

export default function UserCreationPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: generatePassword(),
    permissions: {
      initiatives: { add: false, edit: false, suspend: false, view: false },
      projects: { add: false, edit: false, suspend: false, view: false },
      waqf: { add: false, edit: false, suspend: false, view: false },
      certificates: { add: false, edit: false, suspend: false, view: false },
      reports: { add: false, edit: false, suspend: false, view: false },
      accounts: { add: false, edit: false, suspend: false, view: false },
    },
  });

  // 🔐 Génération d’un mot de passe alphanumérique
  function generatePassword() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pwd = "";
    for (let i = 0; i < 10; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pwd;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionChange = (section, action) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [section]: {
          ...prev.permissions[section],
          [action]: !prev.permissions[section][action],
        },
      },
    }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 Validation des règles
    if (!formData.nom || !formData.prenom || !formData.email) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    if (formData.nom.length > 100 || formData.prenom.length > 100) {
      alert("Le nom et le prénom doivent contenir moins de 100 caractères.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    alert("✅ Compte créé avec succès !");
    console.log(formData);
  };

  const sections = [
    { key: "initiatives", label: "المبادرات الوقفية" },
    { key: "projects", label: "المشاريع الوقفية" },
    { key: "waqf", label: "الأوقاف العينية" },
    { key: "certificates", label: "الشهادات" },
    { key: "reports", label: "التقارير والإفصاح" },
    { key: "accounts", label: "إدارة الحسابات" },
  ];

  const actions = [
    { key: "view", label: "اطلاع" },
    { key: "suspend", label: "تعليق" },
    { key: "edit", label: "تعديل" },
    { key: "add", label: "إضافة" },
  ];

  return (
    <div className="user-page" dir="rtl">
      <form className="user-form" onSubmit={handleSubmit}>
        {/* FORMULAIRE UTILISATEUR */}
        <div className="user-info-section">
          <div className="form-row">
            <label>الاسم العائلي</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              maxLength="100"
            />
          </div>

          <div className="form-row">
            <label>الاسم الشخصي</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              maxLength="100"
            />
          </div>

          <div className="form-row">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>كلمة السر</label>
            <input type="password" value={formData.password} readOnly />
          </div>

          <button type="submit" className="submit-btn">
            تأكيد
          </button>
        </div>

        {/* TABLEAU DES DROITS */}
        <div className="permissions-section">
          <table>
            <thead>
              <tr>
                <th>العمليات</th>
                {actions.map((action) => (
                  <th key={action.key}>{action.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <tr key={section.key}>
                  <td>{section.label}</td>
                  {actions.map((action) => (
                    <td key={action.key}>
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={formData.permissions[section.key][action.key]}
                        onChange={() =>
                          handlePermissionChange(section.key, action.key)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
