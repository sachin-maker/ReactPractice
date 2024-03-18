import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
 

  const handleSingleClick = (dataId) => {
    setSelected(dataId === selected ? null : dataId);
  };


  return (
    <div className="wrappers">
     
      <div className="accordians">
        {data.map((item) => (
          <div className="item">
            <div
              className="title"
              onClick={
               
                  () => handleSingleClick(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>

            {selected === item.id ? (
              <div className="content">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordian;
