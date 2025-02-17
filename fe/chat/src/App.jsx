import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
