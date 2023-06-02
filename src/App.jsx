import './App.css'
import Number from './components/Number'
import Users from './components/Users'
import CounterPage from './components/counter'

function App() {

  return (
    <div style={{ display: "flex", justifyContent: 'center',flexDirection:"column", alignItems:"center" }}>
      <div style={{ marginTop: 0, position: "absolute", top: 0, }}><h1>redux tool kit</h1></div>
      <CounterPage></CounterPage>
      <Number></Number>
      <Users></Users>
    </div>
  )
}

export default App
