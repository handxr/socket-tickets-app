import { Spin } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import { MainLayout } from "../components/layouts";
import { Login } from "../features/auth";
import { Desk } from "../features/misc";
import { CreateTicket, Queue } from "../features/tickets";

const App = () => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spin tip="Loading" size="large" />
        </div>
      }
    >
      <MainLayout>
        <Outlet />
      </MainLayout>
    </React.Suspense>
  );
};

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/access",
        element: <Login />,
      },
      {
        path: "/create-ticket",
        element: <CreateTicket />,
      },
      {
        path: "/desk",
        element: <Desk />,
      },
      {
        path: "/queue",
        element: <Queue />,
      },
    ],
  },
];
