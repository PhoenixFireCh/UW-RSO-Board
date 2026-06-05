import './App.css';
import Card from './Components/Card'

const App = () => {
  return (
    <div className="App">
      <div className="titleElements">
        <h1 className="head">University of Washington RSOs</h1>
        <h2>For Seattle Campus</h2>
      </div>
      <div className="gridArea">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


    </div>
  )
}

export default App