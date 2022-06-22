import "./tipResult.css";

export default function TipResult() {
  return (
    <div className="main__result">
      <div className="main__result-top">
        <span className="result__left">Tip Amount / person</span>
        <span className="result__right">0$</span>
      </div>
      <div className="main__result-bottom">
        <span className="result__left">Total / person</span>
        <span className="result__right">0$</span>
      </div>
      <button>Reset</button>
    </div>
  );
}
