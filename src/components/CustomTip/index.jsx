import "./customTip.css";
import { useRef } from "react";

export default function CustomTip({ setTip, customActive, setCustomActive }) {
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
