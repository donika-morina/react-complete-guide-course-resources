import InputGroup from "./components/InputGroup";


function App() {
  return (
    <>
    <header id="header">
      <img src="investment-calculator-logo.png" alt="Money bags" />
      <h1>React Investment Calculator</h1>
    </header>
    <div id="user-input">
      <div className="input-group">
        <InputGroup type="number" label="Initial Investment" />
        <InputGroup type="number" label="Annual Investment" />
        </div>
        <div className="input-group">
        <InputGroup type="number" label="Expected Return" />
        <InputGroup type="number" label="Duration" />
      </div>
    </div>

    </>
  )
}

export default App
