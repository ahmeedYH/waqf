import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./../styles/SousNavbar.css";

const SousNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (key) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const menus = [
    {
      key: "initiatives",
      label: "المبادرات الوقفية",
      items: [
        { label: "إضافة مبادرة وقفية", to: "/initiatives/add" },
        { label: "تعديل مبادرة وقفية", to: "/initiatives/edit" },
        { label: "تعليق مبادرة وقفية", to: "/initiatives/suspension" },
        { label: "عرض المبادرات", to: "/initiatives" },
        { label: "التحويلات و  الايداعات", to: "/operation" },
      ],
    },
    {
      key: "projects",
      label: "المشاريع الوقفية",
      items: [
        { label: "إضافة مشروع وقفي", to: "/projects/create" },
        { label: "تعديل مشروع وقفي", to: "/projects/localisation" },
        { label: "تعليق مشروع وقفي", to: "/projects" },
        { label: "الاطلاع على المشاريع", to: "/projects" }, // "projects/show" ou "/projects"
        { label: "التحويلات والإيداعات", to: "/operation" },
      ],
    },
    {
      key: "awqaf",
      label: "الأوقاف العينية",
      items: [{ label: "عرض الأوقاف", to: "/awqaf" }],
    },
    {
      key: "certificates",
      label: "الشهادات",
      items: [{ label: "عرض الشهادات", to: "/attestation" }],
    },
    {
      key: "reports",
      label: "التقارير والإفصاح",
      items: [{ label: "عرض التقارير", to: "/reports" }],
    },
    {
      key: "accounts",
      label: "إدارة الحسابات",
      items: [
        { label: "عرض الحسابات", to: "/accounts" },
        { label: "إضافة الحسابات", to: "/accounts/add" },
      ],
    },
  ];

  return (
    <nav className="sous-navbar" ref={navbarRef} dir="rtl">
      <ul className="sousnav-list">
        {menus.map((menu) => (
          <li key={menu.key} className="nav-item">
            <button onClick={() => toggleMenu(menu.key)}>{menu.label}</button>
            <ul className={`submenu ${activeMenu === menu.key ? "show" : ""}`}>
              {menu.items.map((item, i) => (
                <li key={i}>
                  <Link to={item.to} onClick={() => setActiveMenu(null)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SousNavbar;
