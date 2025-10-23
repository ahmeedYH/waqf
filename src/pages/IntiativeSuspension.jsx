import React from "react";
import { useNavigate } from "react-router-dom";

// ÉTAPE 1: Importez votre nouveau fichier CSS
import "../styles/InitiativeSuspension.css";

export default function InitiativeList() {
  const navigate = useNavigate();

  // Données fictives pour afficher 3 lignes
  const dummyData = [1, 2, 3];

  return (
    // Conteneur de page avec fond gris
    <div className="list-page-container" dir="rtl">
      {/* Carte blanche principale */}
      {"   "}
      <div className="list-card">
        {/* --- Section de recherche (alignée sur la grille) --- */}{" "}
        <div className="list-controls">
          <div className="search-input-group">
            <label>كلمات البحث</label>
            <input type="text" className="search-input" />
          </div>
          <button type="button" className="search-button">
            بحث
          </button>{" "}
        </div>
        {/* --- Grille de la liste --- */}{" "}
        <div className="list-table">
          {/* En-tête de la liste */}{" "}
          <div className="list-header">
            <div>اسم المبادرة</div>
            {"  "}
            <div> هدف التنمية المستدامة</div>
            {"  "}
            <div>المبلغ المراد تعبئته</div>
            <div></div> {/* Cellule vide pour la colonne des actions */} {"  "}
          </div>
          {/* Corps de la liste */}{" "}
          <div className="list-body">
            {dummyData.map((item) => (
              <div key={item} className="list-row">
                {/* Cellules de données (boîtes grises) */}
                <div className="data-placeholder"></div>
                <div className="data-placeholder"></div>
                <div className="data-placeholder"></div>

                {/* Cellule des actions */}
                <div className="action-cell">
                  <button className="action-link">تعديل</button>
                  <button className="action-link action-suspend">تعليق</button>
                  <button className="action-link">اطلاع</button>
                </div>
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
