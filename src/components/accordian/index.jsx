import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  function handleSelected(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelect(id) {
    let copyMultiple = [...multi];
    const findIndexOfCurrentId = copyMultiple.indexOf(id);

    if(findIndexOfCurrentId === -1) {
      copyMultiple.push(id);
    }else{
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMulti(copyMultiple);
    console.log(multi);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMulti(!enableMulti)}>
          Enable Multi Select
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((disData) => (
              <div className="item">
                <div
                  onClick={
                    enableMulti
                      ? () => handleMultiSelect(disData.id)
                      : () => handleSelected(disData.id)
                  }
                  className="title"
                >
                  <h3>{disData.question}</h3>
                  <span>+</span>
                </div>
                <div>
                {
                  enableMulti ? multi.indexOf(disData.id) !== -1 && (
                    <div className="content">{disData.answer}</div>
                  )
                  :
                  selected === disData.id && (
                    <div className="content">{disData.answer}</div>
                  )
                }

                  {/* {selected === disData.id || multi.indexOf(disData.id !== -1) ? (
                    <div className="content">{disData.answer}</div>
                  ) : null} */}
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
