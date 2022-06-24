import "./customTip.css";
import { useRef, useState } from "react";

export default function CustomTip({ setTip }) {
  const [customActive, setCustomActive] = useState(false);
  const customTipRef = useRef();
  const handleClick = () => {
    setTip(0);
    setCustomActive(true);
  };

  const handleChange = () => {
    const customTip = Number(customTipRef.current.value);
    setTip(customTip);
  };

  return (
    <div className="custom-tip-container">
      <button className="section__custom-tip" onClick={handleClick}>
        Custom
      </button>
      {customActive && (
        <input
          type="number"
          className="custom-tip--active"
          ref={customTipRef}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
