import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { publicRoutes } from "./public";

export function AppRoutes() {
  const routes = [...publicRoutes];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
