import React from "react";
import ReactDOMClient from "react-dom/client";
import { DentalHomepage } from "./screens/DentalHomepage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DentalHomepage />);
