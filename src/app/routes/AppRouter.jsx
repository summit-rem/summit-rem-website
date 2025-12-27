import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

import HomePage from "../../pages/home/HomePage";
import PropertiesPage from "../../pages/properties/PropertiesPage";
import VacanciesPage from "../../pages/vacancies/VacanciesPage";
import ManagementPage from "../../pages/management/ManagementPage";
import AboutPage from "../../pages/about/AboutPage";
import ContactPage from "../../pages/contact/ContactPage";
import PayRentPage from "../../pages/payrent/PayRentPage";
import AccountPage from "../../pages/account/AccountPage";
import NotFoundPage from "../../pages/not-found/NotFoundPage";
import TeamsPage from "../../pages/team/TeamsPage";
import ResourcesPage from "../../pages/resources/ResourcesPage";
import ResourceDetailPage from "../../pages/resources/ResourceDetailPage";

import CommercialPage from "../../pages/services/CommercialPage";
import MultiFamilyPage from "../../pages/services/MultiFamilyPage";
import CommercialBrokeragePage from "../../pages/services/CommercialBrokeragePage";
import AccountingFinancialReportingPage from "../../pages/services/AccountingFinancialReportingPage";
import LeaseManagementPage from "../../pages/services/LeaseManagementPage";
import TenantServicesSafetyPage from "../../pages/services/TenantServicesSafetyPage";
import TransitionStrategyPage from "../../pages/services/TransitionStrategyPage";
import PrivacyPolicyPage from "../../pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "../../pages/legal/TermsOfServicePage";
import CookiePolicyPage from "../../pages/legal/CookiePolicyPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "properties", element: <PropertiesPage /> },
      { path: "vacancies", element: <VacanciesPage /> },
      { path: "management", element: <ManagementPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "pay-rent", element: <PayRentPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "about/team", element: <TeamsPage /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "articles/:id/:slug", element: <ResourceDetailPage />,},
      { path: "podcast/:id/:slug", element: <ResourceDetailPage /> },
      { path: "videos/:id/:slug", element: <ResourceDetailPage /> },
      { path: "news/:id/:slug", element: <ResourceDetailPage /> },

      { path: "commercial", element: <CommercialPage /> },
      { path: "multi-family", element: <MultiFamilyPage /> },
      { path: "commercial-brokerage", element: <CommercialBrokeragePage /> },
      { path: "accounting-financial-reporting", element: <AccountingFinancialReportingPage /> },
      { path: "lease-management", element: <LeaseManagementPage /> },
      { path: "tenant-services-and-safety", element: <TenantServicesSafetyPage /> },
      { path: "transition-strategy", element: <TransitionStrategyPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms-and-conditions", element: <TermsOfServicePage /> },
      { path: "cookie-policy", element: <CookiePolicyPage /> },


      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
