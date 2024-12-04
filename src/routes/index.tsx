import { Route, Routes } from "react-router-dom";

import { allRoutes } from "./allRoutes";

export default function Router() {
  return (
    <Routes>
      {allRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
