import "./singleTip.css";
import { useEffect, useState } from "react";

export default function SingleTip({ tipAmount, tip, setTip, setCustomActive }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setCustomActive(false);
    setTip(tip);
  };

  useEffect(() => {
    if (tip === tipAmount) setActive(true);
    else setActive(false);
  });
  return (
    <button
      className={`section__tip ${active ? "tip--active" : ""}`}
      onClick={handleClick}
    >
      {tip}%
    </button>
  );
}
