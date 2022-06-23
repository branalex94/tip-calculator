import "./tipResult.css";

export default function TipResult() {
  return (
    <div className="main__result">
      <div className="main__result-top">
        <p className="result__left">
          Tip Amount <br /> <span className="result__gray-text">/ person</span>
        </p>
        <span className="result__right">$0</span>
      </div>
      <div className="main__result-bottom">
        <p className="result__left">
          Total <br />
          <span className="result__gray-text">/ person</span>
        </p>
        <span className="result__right">$0</span>
      </div>
      <button className="result__btn">Reset</button>
    </div>
  );
}
