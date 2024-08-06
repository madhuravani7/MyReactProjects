import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import Star from './components/star-rating/star'
import Image from './components/image-slider/image'
import './App.scss' 
function App() {

  return (
    <div className="App">
      {/* this is our accordian component */}
      {/* <Accordian/> */}

      {/* this is random color component*/}
      {/* <RandomColor/> */}

      {/* this is star rating component */}
      {/* <Star/> */}

      {/* this is Image slider */}
      <Image url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/>
    </div>
  )
}

export default App
