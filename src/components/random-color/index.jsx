import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [currentColor, setCurrentColor] = useState("#000000");

  function colorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleClick() {
    if (type === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[colorUtility(hex.length)];
      }
      setCurrentColor(hexColor);
    }

    if(type === "rgb") {
        const r = colorUtility(256);
        const g = colorUtility(256);
        const b = colorUtility(256);
        setCurrentColor(`rgb(${r},${g},${b})`);
    }

    console.log(currentColor);
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: currentColor,
      }}
    >
      <button onClick={() => setType("hex")}>Create Hex Color</button>
      <button onClick={() => setType("rgb")}>Create RGB Color</button>
      <button onClick={handleClick}>Genrate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <h3>{type === 'hex' ? "Hex Color" : " RGB Color"}</h3>
        <h4>{currentColor}</h4>
      </div>
    </div>
  );
}
