import { useRef } from "react";

export default function ScrollToSection() {
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Secound Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  const sectionRef = useRef(null);

  function handleClick() {
    let pos = sectionRef.current.getBoundingClientRect().top;

    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
  }

  return (
    <div>
      <h1>Scroll To A Particular Section Feature</h1>
      <button onClick={handleClick}>Scroll to Section</button>
      {data.map((items, index) => (
        <div style={items.style} ref={index === 2 ? sectionRef : null}>
          <h3>{items.label}</h3>
        </div>
      ))}
    </div>
  );
}
