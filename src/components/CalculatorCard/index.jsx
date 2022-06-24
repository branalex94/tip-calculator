import "./calculatorCard.css";
import { useState } from "react";
import Input from "../Input";
import SelectTip from "../SelectTip";
import TipResult from "../TipResult";

export default function CalculatorCard() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  console.log({ bill, people });

  return (
    <main className="main__card">
      <div className="main__left-container--desktop">
        <Input name="Bill" type="number" icon="dollar" setFunc={setBill} />
        <SelectTip />
        <Input
          name="Number of People"
          type="number"
          setFunc={setPeople}
          icon="person"
        />
      </div>
      <TipResult />
    </main>
  );
}
