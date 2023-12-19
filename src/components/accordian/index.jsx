import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSelected(id) {
    setSelected(id === selected ? null : id);

    
  }

  return (
    <>
      <div className="wrapper">
        <div className="title">Accordian</div>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((disData) => (
              <div>
                <div onClick={() => handleSelected(disData.id)} className="questionTittle">
                  <h3>{disData.question}</h3>
                  <span>+</span>
                </div>
                <div> 
                    {
                        selected === disData.id ? 
                        <div className="answer">{disData.answer}</div>
                        : null
                    }
                </div>
              </div>
            ))
          ) : (
            <div>No Data found</div>
          )}
        </div>
      </div>
    </>
  );
}
