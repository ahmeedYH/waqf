import React from "react";
import "./../styles/Navbar.css";
import { Home } from "lucide-react"; // Icône Home

const Navbar = () => {
  const links = [
    {
      name: "إمارة المؤمنين",
      path: "https://habous.gov.ma/%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8.html",
    },
    {
      name: "الأوقاف",
      path: "https://habous.gov.ma/%D8%A7%D9%84%D8%A3%D9%88%D9%82%D8%A7%D9%81-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html",
    },
    {
      name: "الشؤون الإسلامية",
      path: "https://habous.gov.ma/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.html",
    },
    {
      name: "المساجد",
      path: "https://habous.gov.ma/%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html",
    },
    {
      name: "القيمون الدينيون",
      path: "https://habous.gov.ma/%D8%A7%D9%84%D9%82%D9%8A%D9%85%D9%88%D9%86-%D8%A7%D9%84%D8%AF%D9%8A%D9%86%D9%8A%D9%88%D9%86-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9",
    },
    {
      name: "التعليم العتيق ومحو الأمية بالمساجد",
      path: "https://www.habous.gov.ma/%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%B9%D8%AA%D9%8A%D9%82-%D9%88%D9%85%D8%AD%D9%88-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AC%D8%AF-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html",
    },
    {
      name: "الشؤون  الإدارية و التعاون",
      path: "https://www.habous.gov.ma/%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html",
    },
    {
      name: "الشؤون القانونية",
      path: "https://www.habous.gov.ma/%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9.html",
    },
    {
      name: "المؤسسات",
      path: "https://www.habous.gov.ma/2015-06-22-10-20-39/877-%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81-%D8%A8%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA/3853-%D8%A7%D9%84%D9%83%D8%AA%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9-%D9%84%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%84%D9%89.html",
    },
    {
      name: "كرونولوجيا",
      path: "https://www.habous.gov.ma/%D9%83%D8%B1%D9%88%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7.html",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Icône Home (vers la page d’accueil) */}
        <div className="navbar-right">
          <a
            href="https://www.habous.gov.ma/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%82%D8%A7%D9%81-%D9%88%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9.html"
            className="home-link"
          >
            <Home className="home-icon" size={20} />
          </a>
        </div>

        {/* Liens centraux */}
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index} className="navbar-item">
              <a href={link.path}>{link.name}</a>
              {/* Séparateur sauf pour le dernier élément */}
              {index !== links.length && <span className="divider">|</span>}
            </li>
          ))}
        </ul>

        {/* Bouton de langue */}
        <div className="navbar-left">
          <button className="lang-btn">Fr</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
