import "./calculatorCard.css";
import { useState } from "react";
import Input from "../Input";
import SelectTip from "../SelectTip";
import TipResult from "../TipResult";

export default function CalculatorCard() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState("");
  const [customActive, setCustomActive] = useState(false);

  return (
    <main className="main__card">
      <div className="main__left-container--desktop">
        <Input
          name="Bill"
          type="number"
          icon="dollar"
          setFunc={setBill}
          value={bill}
        />
        <SelectTip
          tipAmount={tip}
          setTip={setTip}
          customActive={customActive}
          setCustomActive={setCustomActive}
        />
        <Input
          name="Number of People"
          type="number"
          setFunc={setPeople}
          icon="person"
          value={people}
        />
      </div>
      <TipResult
        bill={bill}
        tip={tip}
        people={people}
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip}
        setCustomActive={setCustomActive}
      />
    </main>
  );
}
