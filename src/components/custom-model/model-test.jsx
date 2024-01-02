import { useState } from "react";
import Model from "./model";
import "./model.css";

export default function ModelTest() {
  const [showModel, setShowModel] = useState(false);

  function handleToggle() {
    setShowModel(!showModel);
  }

  function onClose() {
    
    setShowModel(false);
  }
  return (
    <div>
      <button onClick={handleToggle}>Open Model</button>
      {showModel && <Model onClose={onClose} body={"Random Body Data"} />}
    </div>
  );
}
