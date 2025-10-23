import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, // 1. Importer Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import SousNavbar from "./components/SousNavbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ProjectsPage from "./pages/ProjectsPage";
import AwqafPage from "./pages/AwqafPage";
import ReportsPage from "./pages/ReportsPage";
import CertificatesPage from "./pages/CertificatesPage";
import AccountsPage from "./pages/AccountsPage";
import InitiativesPage from "./pages/initiativesPage";
import "./App.css";
import "./index.css";
import InitiativeForm from "./pages/InitiativeForm";
import EditIntiativePage from "./pages/EditInitiativePage";
import InitiativeSuspension from "./pages/IntiativeSuspension";

// 2. Créer un composant "Layout" qui contient la structure de la page
// L'Outlet affichera les pages enfants (InitiativesPage, ProjectsPage, etc.)
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Gallery />
      <SousNavbar />
      <main>
        {/* C'est ici que vos pages s'afficheront */}
        <Outlet />
      </main>
    </>
  );
};

// 3. Configurer le router pour utiliser ce Layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Utiliser le composant Layout comme élément principal
    children: [
      // Ces enfants seront rendus à l'intérieur de l'Outlet
      // 👇 2. MODIFIEZ VOS ROUTES 'initiatives'
      { index: true, element: <InitiativesPage /> }, // Page d'accueil

      // L'ancienne route, vous pouvez la supprimer ou la garder
      // { path: "initiatives", element: <InitiativesPage /> },

      // Les nouvelles routes
      { path: "initiatives", element: <InitiativesPage /> },
      { path: "initiatives/add", element: <InitiativeForm /> },
      { path: "initiatives/edit", element: <EditIntiativePage /> },
      { path: "initiatives/suspension", element: <InitiativeSuspension /> },

      { path: "projects", element: <ProjectsPage /> },
      { path: "awqaf", element: <AwqafPage /> },
      { path: "certificates", element: <CertificatesPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "accounts", element: <AccountsPage /> },
    ],
  },
]);

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
