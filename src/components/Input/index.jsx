import "./input.css";
import Dollar from "/src/images/Dollar.jsx";
import Person from "/src/images/Person.jsx";

const ICONS = {
  dollar: <Dollar />,
  person: <Person />,
};

export default function Input({ name, type, icon }) {
  return (
    <div className="main__input-container">
      <div className="input__icon-container">{ICONS[icon]}</div>
      <label htmlFor={name} className="input__label">
        {name}
      </label>
      <input type={type} id={name} className="main__input" />
    </div>
  );
}
