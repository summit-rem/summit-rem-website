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

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
