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
import FeatureFlagGlobalState from './components/feature-flag/ContextAPI/index.js';
import FeatureFlags from './components/feature-flag/feature_flag.jsx';
import UseFetchHookTest from './components/use-fetch/test.jsx';
import UseOnclickOutsideClick from './components/Click-outSide-hook/test.jsx';
import UseWindowResizeTest from './components/use-window-resize-hook/test.jsx';

function App() {
  return (
    <div className="App">

      {/* task 1 */}
      {/* <Accordian /> */}

      {/* task 1 */}
      {/* <StarRating noOfStars={10} /> */}

      {/* task 1 */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={20} /> */}

      {/* task 1 */}
      {/* <LoadProducts  /> */}

      {/* task 1 */}
      {/* <TreeView menus={menus}/> */}

      {/* task 1 */}
      {/* <QRCodeGenerator/> */}

      {/* task 1 */}
      {/* <DarkTheme /> */}

      {/* task 1 */}
      {/* <CustomScroll url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* task 1 */}
      {/* <TabTest/> */}

      {/* task 1 */}
      {/* <ModalPopup/> */}

      {/* task 1 */}
      {/* <GithubProfileFinder/> */}

      {/* task 1 */}
      {/* <SearchAutoComplete /> */}

      {/* task 1 */}
      {/* <TicTacToe /> */}

      {/* task 1 */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <UseFetchHookTest /> */}

      {/* <UseOnclickOutsideClick/> */}

      <UseWindowResizeTest/>



    </div>
  );
}

export default App;
