import "./selectTip.css";
import SingleTip from "../SingleTip";
import CustomTip from "../CustomTip";

const TIPS = [5, 10, 15, 25, 50];

export default function SelectTip() {
  return (
    <section>
      <h2>Select Tip %</h2>
      {TIPS.map((tip, i) => (
        <SingleTip tip={tip} key={i} />
      ))}
      <CustomTip />
    </section>
  );
}
