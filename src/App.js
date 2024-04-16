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

  const result = parseInt(sum * (1 + rate / 100) ** timePeriod).toLocaleString('en-us');

  const showResult = () => setShowDetailedResult(!showDetailedResult);

  const createDetailedElements = (n) => {
    if (!n || n === 0) return;
    let elements = [];
    let _sum = Number(sum);
    for (let i = 1; i <= n; i++) {
      elements.push(<li key={i*rate}><span style={{ minWidth: 128  , display: 'inline-block' }}><b>Period #{i}</b></span> {parseInt(_sum)} ➡️ {parseInt(_sum + Number(_sum) * Number(rate) / 100)} </li>);
      _sum = _sum + Number(_sum) * Number(rate) / 100;
    }
    return elements;
  }

  return (
    <div className="App">

      <header><h1 className="site-title">Simple Compound Calculator</h1></header>

      <main className="main-section">

        <InputBlock
          labelFor="rate"
          labelTxt="Rate %"
          inputMin="0.5"
          inputStep="0.5"
          initValue={rate}
          inputOnChange={setRate}
          placeholderValue="Return rate"
        />

        <InputBlock
          labelFor="sum"
          labelTxt="Base sum"
          inputMin="100"
          inputStep="100"
          initValue={sum}
          inputOnChange={setSum}
          placeholderValue="Base $ amount"
        />

        <InputBlock
          labelFor="numcomp"
          labelTxt="Number of compounds"
          inputMin="5"
          inputStep="1"
          initValue={timePeriod}
          inputOnChange={setTimePeriod}
          placeholderValue="# of Re-investments"
        />

        <div className="result">{result}</div>

        <p style={{ cursor: 'pointer' }} onClick={showResult}><u>Click to view detailed result</u></p>

        <div className="detailed-results">
          {
            (showDetailedResult && timePeriod && timePeriod > 0) ? (
              <ul>
                {createDetailedElements(timePeriod).map(el => el)}
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
