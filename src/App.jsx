
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
 

  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} />
    </>
  )
}

export default App
