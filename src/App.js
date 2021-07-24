import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [quoteValue, setQuoteValue] = useState(90)
  const [dy, setDy] = useState(0.7)
  const [initialQuote, setInitialQuote] = useState(0)
  const [investmentValue, setInvestmentValue] = useState(100)
  const [monthInvest, setMonthInvest] = useState(12)
  const [result, setResult] = useState(0)
  const [montlyIncome, setMontlyIncome] = useState(0)
  useEffect(() => {

    if (dy > 0) {
      setResult((quoteValue * initialQuote) + quoteValue * (monthInvest * investmentValue))
      const income = (quoteValue % dy) * (initialQuote + investmentValue)
      setMontlyIncome(income)

    }

  }, [dy, quoteValue, initialQuote, investmentValue, monthInvest])
  return (
    <div className="App">
      <div className="flex-container">
        <div className="card-holder">
          <p>Tesouro Direto</p>
        </div>
        <div className="card-holder selected">
          <p>Fundo Imobiliario</p>
        </div>
        <div className="card-holder ">
          <p>Poupança</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginLeft: "10%", marginTop: "20px" }}>
        <div className="variable-holder">
          <div>
            <label>valor da cota</label>
            <br />

            <input value={quoteValue} onChange={(e) => { setQuoteValue(e.target.value) }} type="number" className="input-check" />
          </div>
          <div>
            <label>Dividend Yield (DY)</label>
            <br />

            <input value={dy} onChange={(e) => { setDy(e.target.value) }} type="number" className="input-check" />
          </div>
          <div>
            <label>Quantidade inicial de cotas</label>
            <br />

            <input value={initialQuote} onChange={(e) => { setInitialQuote(e.target.value) }} type="number" className="input-check" />
          </div>
          <div>
            <label>Meses Investindo</label>
            <br />

            <input value={monthInvest} onChange={(e) => { setMonthInvest(e.target.value) }} type="number" className="input-check" />
          </div>
          <div>
            <label>Valor do investimento mensal (em cotas)</label>
            <br />
            <input value={investmentValue} onChange={(e) => { setInvestmentValue(e.target.value) }} type="number" className="input-check" />
          </div>
          <div>
            <label>Reinvestir</label>
            <br />
            <input type="checkbox" />
          </div>
        </div>
        <div className="result-holder">
          <div className="result-container">
            <br />
            <label style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}>Em X meses você teria</label>
            <h1 className="result-value">R$ {result}</h1>
          </div>
          <div className="calc-result">
            <label>Valor investido</label>
            <h3>8000,00</h3>
          </div>
          <div className="calc-result">
            <label>Pagamento mensal</label>
            <h3>{montlyIncome
            }</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
