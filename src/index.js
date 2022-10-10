import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sensor from "./Sensor";
import Table from "./Table";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />
  },
  {
    path: "/sensor",
    element: <Sensor />
  }
]);

root.render(<RouterProvider router={router} />);
