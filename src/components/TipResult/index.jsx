import "./tipResult.css";

export default function TipResult({
  bill,
  tip,
  people,
  setBill,
  setTip,
  setPeople,
  setCustomActive,
}) {
  const handleClick = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setCustomActive(false);
  };

  const tipAmount =
    people === 0 || people === ""
      ? 0
      : ((bill * (tip / 100)) / people).toFixed(2);
  const totalPerPeople =
    people === 0 || people === ""
      ? 0
      : Number(bill / people + Number(tipAmount)).toFixed(2);

  return (
    <div className="main__result">
      <div>
        <div className="main__result-top">
          <p className="result__left">
            Tip Amount <br />
            <span className="result__gray-text">/ person</span>
          </p>
          <span className="result__right">${tipAmount}</span>
        </div>
        <div className="main__result-bottom">
          <p className="result__left">
            Total <br />
            <span className="result__gray-text">/ person</span>
          </p>
          <span className="result__right">${totalPerPeople}</span>
        </div>
      </div>
      <button
        className={`result__btn ${!bill && !tip && !people ? "empty-btn" : ""}`}
        onClick={handleClick}
      >
        Reset
      </button>
    </div>
  );
}
