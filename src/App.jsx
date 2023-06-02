import './App.css'
import Number from './components/Number'
import CounterPage from './components/counter'

function App() {

  return (
    <div style={{ display: "flex", justifyContent: 'center',flexDirection:"column" }}>
      <div style={{ marginTop: 0, position: "absolute", top: 0, }}><h1>redux tool kit</h1></div>
      <CounterPage></CounterPage>
      <Number></Number>
    </div>
  )
}

export default App
