import { useState } from 'react';

import './App.css';

function App() {
  const [rate, setRate] = useState(7);
  const [initialSum, setInitialSum] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(20);

  return (
    <div className="App">
      <header className="site-title">
        <h1>Simple compound calculator</h1>
      </header>
      <main className="main-section">
        <div className="rate-input">
          <label for="rate">Rate %</label>
          <input id="rate" type="number" value={rate} onChange={e => setRate(e.target.value)} />
          {!rate && (
            <div>
              <span style={{ color: 'red' }}>Rate required</span>
            </div>
          )}
        </div>
        <div className="rate-input">
          <label for="sum">Base sum</label>
          <input id="sum" type="number" value={initialSum} onChange={e => setInitialSum(e.target.value)} />
        </div>
        <div className="rate-input">
          <label for="numcomp">Number of compounds</label>
          <input id="numcomp" type="number" value={timePeriod} onChange={e => setTimePeriod(e.target.value)} />
        </div>
        <div className="result">
          {parseInt(initialSum * (1 + rate / 100) ** timePeriod).toLocaleString('en-us')}
          {/* {(initialSum*(1+rate/100)**timePeriod).toLocaleString('en-us')} */}
          {/* result: {(initialSum*(1+rate/100)**timePeriod)} */}
          {/* {console.log(initialSum*(1+rate/100)**timePeriod)} */}
          {/* <div>rate: {rate}</div>
          <div>initialSum {initialSum}</div>
          <div>timePeriod {timePeriod}</div> */}
        </div>
        <section className="how-to">
          <b>How to use</b>
          <p>For example, let's say we make a 7% return on our 1000$ initial deposit, and we continue re-investing the money (with the gains!) and make another 7%, and do it again, for 20 times.</p>
          <p>That's default site example</p>
        </section>
      </main>
      <footer>
        <h4>Personal note:</h4>
        <p>I was frustrated from most simple google search results for a compound calculator, so I've decided to make a small website to offer it in its basic form for free</p>
        <p>It follows the formula of <br />
          <span className="formula">initialSum*(1 + Rate)<sup>#compound period</sup></span>
        </p>
        <p>I hope you find this useful and be surprised by the power of compound interest!</p>
        <h5>Best, A.</h5>
      </footer>
    </div>
  );
}

export default App;
