import { useState } from 'react';

import InputBlock from './components/InputBlock';
import HowTo from './components/HowTo';
import Footer from './components/Footer';
import NavLinks from './components/NavLinks';

function App() {

  const [rate, setRate] = useState(7);
  const [sum, setSum] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(20);
  const [showDetailedResult, setShowDetailedResult] = useState(false);

  const formula = sum * (1 + rate / 100) ** timePeriod;

  const parseAndLocalize = (num) => {
    if (!num || isNaN(num)) return;
    return parseInt(num).toLocaleString('en-us');
  };

  const showResult = () => setShowDetailedResult(!showDetailedResult);

  const createDetailedElements = (timePeriod) => {
    if (!timePeriod || isNaN(timePeriod)) return;

    let elements = [];
    let _sum = Number(sum);
    let _rate = Number(rate);

    for (let i = 1; i <= timePeriod; i++) {
      elements.push(
        <li key={i * rate} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ minWidth: 128, display: 'inline-block' }}><b>Period #{i}</b></span>
          <span style={{ minWidth: 240, display: 'inline-block' }}>
            {parseAndLocalize(_sum)} ➡️ {parseAndLocalize(_sum + (_sum * _rate / 100))}
          </span>
        </li>
      );
      _sum = _sum + (_sum * _rate / 100);
    }
    return elements;
  };

  return (
    <div className="App">

      <header><h1 className="site-title">Simple Compound Calculator</h1></header>

      <main className="main-section">

        <InputBlock
          labelFor="rate"
          labelTxt="Rate %"
          inputMin="0.1"
          inputStep="0.5"
          initValue={rate}
          inputOnChange={setRate}
          placeholderValue="Return rate"
        />

        <InputBlock
          labelFor="sum"
          labelTxt="Base sum"
          inputMin="1"
          inputStep="100"
          initValue={sum}
          inputOnChange={setSum}
          placeholderValue="Base $ amount"
        />

        <InputBlock
          labelFor="numcomp"
          labelTxt="Number of compounds"
          inputMin="2"
          inputStep="1"
          initValue={timePeriod}
          inputOnChange={setTimePeriod}
          placeholderValue="# of Re-investments"
        />

        <div className="result">{parseAndLocalize(formula)}</div>

        <p style={{ cursor: 'pointer' }} onClick={showResult}><u>Click to view detailed result</u></p>

        <div className="detailed-results">
          {
            (showDetailedResult && timePeriod && timePeriod > 0) ? (
              <ul>
                {createDetailedElements(timePeriod)}
              </ul>
            )
              : null
          }
        </div>

        <HowTo />
      </main>

      <Footer />
      <NavLinks />

    </div>
  );
}


export default App;
