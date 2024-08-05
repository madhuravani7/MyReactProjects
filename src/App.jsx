import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import Star from './components/star-rating/star'
import './App.scss' 
function App() {

  return (
    <div className="App">
      {/* this is our accordian component */}
      <Accordian/>

      {/* this is random color component*/}
      <RandomColor/>

      {/* this is star rating component*/}
      <Star/>
    </div>
  )
}

export default App
