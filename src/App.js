import './App.css';
import ImageSlider from './components/ImageSlider';
// import Accordian from './components/accordian/SingleAccordian';
import StarRating from './components/star-ratings';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <StarRating noOfStars={10} /> */}

      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={20} />
    </div>
  );
}

export default App;
