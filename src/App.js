import './App.css';
import ImageSlider from './components/ImageSlider';
import LoadProducts from './components/Load_Products';
import TreeView from './components/TreeView';
import menus from './components/TreeView/data';
import QRCodeGenerator from './components/qr-code';
import Accordian from './components/accordian/SingleAccordian';
import StarRating from './components/star-ratings';
import DarkTheme from './components/Theme-dark';
import CustomScroll from './components/CustomScroll';
import TabTest from './components/custom-tabs/index.js';
import ModalPopup from './components/custom-model-popup/index.js';
import GithubProfileFinder from './components/github-profile-finder/index.js';
import SearchAutoComplete from './components/Search-AutoComplete-API/index.js';
import TicTacToe from './components/Tic-tac-toe/TicTacToe.jsx';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}

      {/* <StarRating noOfStars={10} /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={20} /> */}

      {/* <LoadProducts  /> */}

      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator/> */}

      {/* <DarkTheme /> */}

      {/* <CustomScroll url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* <TabTest/> */}

      {/* <ModalPopup/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutoComplete /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
