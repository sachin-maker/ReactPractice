import './App.css';
// import Accordian from './components/accordian/SingleAccordian';
import StarRating from './components/star-ratings';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
