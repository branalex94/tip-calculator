import "./input.css";
import { useRef, useState } from "react";
import Dollar from "/src/images/Dollar.jsx";
import Person from "/src/images/Person.jsx";

const ICONS = {
  dollar: <Dollar />,
  person: <Person />,
};

export default function Input({ name, type, icon, setFunc, value }) {
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const handleClick = () => {
    setFunc("");
  };

  const handleChange = () => {
    const input = inputRef.current.value;
    setFunc(input);
    if (input <= 0) setError(true);
    else setError(false);
  };

  return (
    <div className="main__input-container">
      <div className="input__icon-container">{ICONS[icon]}</div>
      <label htmlFor={name} className="input__label">
        {name}
      </label>
      <input
        type={type}
        id={name}
        className={`main__input ${error ? "input__warning" : ""}`}
        onChange={handleChange}
        ref={inputRef}
        placeholder="0"
        value={value}
        onClick={handleClick}
      />
      {error && <span className="input__warning-msg">Can't be zero</span>}
    </div>
  );
}
