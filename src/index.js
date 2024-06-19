import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ImageSlider from "./index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
  </React.StrictMode>
);
