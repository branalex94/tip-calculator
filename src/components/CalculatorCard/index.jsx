import "./calculatorCard.css";
import Input from "../Input";
import SelectTip from "../SelectTip";
import TipResult from "../TipResult";

export default function CalculatorCard() {
  return (
    <main className="main__card">
      <Input name="Bill" type="number" />
      <SelectTip />
      <Input name="Number of People" type="number" />
      <TipResult />
    </main>
  );
}
