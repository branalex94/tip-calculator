import "./selectTip.css";
import SingleTip from "../SingleTip";
import CustomTip from "../CustomTip";

const TIPS = [5, 10, 15, 25, 50];

export default function SelectTip({ tipAmount, setTip }) {
  return (
    <section className="section__select-tip">
      <h2 className="section__title">Select Tip %</h2>
      <div className="section__tips">
        {TIPS.map((tip, i) => (
          <SingleTip tip={tip} key={i} setTip={setTip} tipAmount={tipAmount} />
        ))}
        <CustomTip setTip={setTip} />
      </div>
    </section>
  );
}
