import "./input.css";

export default function Input({ name, type }) {
  return (
    <div className="main__input-container">
      <label htmlFor="input">{name}</label>
      <input type={type} id="input" className="main__input" />
    </div>
  );
}
