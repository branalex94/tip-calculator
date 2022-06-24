import "./calculatorCard.css";
import Input from "../Input";
import SelectTip from "../SelectTip";
import TipResult from "../TipResult";

export default function CalculatorCard() {
  return (
    <main className="main__card">
      <div className="main__left-container--desktop">
        <Input name="Bill" type="number" icon="dollar" />
        <SelectTip />
        <Input name="Number of People" type="number" icon="person" />
      </div>
      <TipResult />
    </main>
  );
}
