import { useState, useEffect } from "react";
import "./App.css";
import ContentCard from "./components/content-card.component";
// import { data } from "./config/getJSON.js";

function App() {
  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center bg-lightter">
      <h1 className="text-5xl my-8 font-tiro">Knowledge 365</h1>
      <ContentCard />
    </div>
  );
}

export default App;
