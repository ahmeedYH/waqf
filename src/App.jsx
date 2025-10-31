import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import SousNavbar from "./components/SousNavbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import "./index.css";

// 🔹 Lazy import des pages
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const AwqafPage = lazy(() => import("./pages/AwqafPage"));
const ReportsPage = lazy(() => import("./pages/ReportsPage"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const AccountsPage = lazy(() => import("./pages/AccountsPage"));
const InitiativesPage = lazy(() => import("./pages/InitiativesPage"));
const InitiativeForm = lazy(() => import("./pages/InitiativeForm"));
const EditIntiativePage = lazy(() => import("./pages/EditInitiativePage"));
const InitiativeSuspension = lazy(() => import("./pages/IntiativeSuspension"));
const CreateProject = lazy(() => import("./pages/CreateProject"));
const ProjectLocalisation = lazy(() => import("./pages/ProjectLocalisation"));
const SearchOperationWaqf = lazy(() => import("./pages/SearchOperationWaqf"));
const SearchAttestationPage = lazy(() =>
  import("./pages/SearchAttestationPage")
);
const UserCreationPage = lazy(() => import("./pages/UserCreationPage"));

// 🧩 Layout principal
const AppLayout = () => (
  <>
    <Navbar />
    <Gallery />
    <SousNavbar />
    <main>
      <Suspense fallback={<div className="loading">Chargement...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
);

// ⚙️ Configuration du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <InitiativesPage /> },
      { path: "initiatives", element: <InitiativesPage /> },
      { path: "initiatives/add", element: <InitiativeForm /> },
      { path: "initiatives/edit", element: <EditIntiativePage /> },
      { path: "initiatives/suspension", element: <InitiativeSuspension /> },
      { path: "operation", element: <SearchOperationWaqf /> },

      { path: "projects", element: <ProjectLocalisation /> },
      { path: "projects/create", element: <CreateProject /> },
      { path: "projects/localisation", element: <ProjectLocalisation /> },
      { path: "operation", element: <SearchOperationWaqf /> },

      { path: "awqaf", element: <AwqafPage /> },
      { path: "attestation", element: <SearchAttestationPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "accounts", element: <AccountsPage /> },
      { path: "accounts/add", element: <UserCreationPage /> },
    ],
  },
]);

// 🚀 App principale
export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
