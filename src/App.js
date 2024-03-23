import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [rate, setRate] = useState(10);
  const [initialSum, setInitialSum] = useState(100);
  const [timePeriod, setTimePeriod] = useState(90);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <h1>Simple compound calculator</h1>
      </header>
      <main className="main-section">
        <div className="rate-input">
          <label>Rate %</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} />
          {!rate && (
            <div>
            <span style={{ color: 'red' }}>Rate required</span>
            </div>
          )}
        </div>
        <div className="rate-input">
          <label>Base sum</label>
          <input type="number" value={initialSum} onChange={e => setInitialSum(e.target.value)}/>
        </div>
        <div className="rate-input">
          <label>Number of compounds</label>
          <input type="number" value={timePeriod} onChange={e => setTimePeriod(e.target.value)}/>
        </div>
        <div className="result">
        {parseInt(initialSum*(1+rate/100)**timePeriod).toLocaleString('en-us')}
          {/* result: {(initialSum*(1+rate/100)**timePeriod)} */}
          {/* {console.log(initialSum*(1+rate/100)**timePeriod)} */}
          {/* <div>rate: {rate}</div>
          <div>initialSum {initialSum}</div>
          <div>timePeriod {timePeriod}</div> */}
        </div>
        <section className="how-to">
          <b>How to use</b>
          <p>Let's assume that we start with 100$ and we add 10% to it 90 times in a compounding way, which is the default example</p>
          <p>It will result that adding 10% to the initial sum of 100$, 90 times compounded, will net <b><u>531,302$</u></b></p>
        </section>
      </main>
      <footer>
        <p>I was frustrated from most simple google searches for a simple compound calculator, so I've decided to make a small website to offer it at its basic form</p>
        <p>It follows the simple formula of initialSum*(1 + Rate)<sup>#compound period</sup></p>
        <p>I hope you find this useful and easy to use! Best, A.</p>
      </footer>
    </div>
  );
}

export default App;
