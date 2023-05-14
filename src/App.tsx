import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { connect } from 'react-redux/es/exports'

function App({ count, increment, incrementAmount }) {
  function handleOnClick() {
    increment()
  }
  function handleOnClickAmount() {
    incrementAmount(5)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={handleOnClickAmount}>Increment Amount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'counter/increment' }),
    incrementAmount: (amount) =>
      dispatch({ type: 'counter/incrementAmount', payload: amount }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
