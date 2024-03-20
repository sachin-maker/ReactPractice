import './App.css';
import ImageSlider from './components/ImageSlider';
import LoadProducts from './components/Load_Products';
import TreeView from './components/TreeView';
import menus from './components/TreeView/data';
import QRCodeGenerator from './components/qr-code';
// import Accordian from './components/accordian/SingleAccordian';
import StarRating from './components/star-ratings';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={20} /> */}

      {/* <LoadProducts  /> */}

      {/* <TreeView menus={menus}/> */}
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
