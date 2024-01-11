import "./App.css";
import Accordian from "./components/accordian";
import ModelTest from "./components/custom-model/model-test";
import TabTest from "./components/custom-tabs/tabs-test";
import FeatureFlag from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfile from "./components/github-profile";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMore from "./components/load-more";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete-withApi";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOutsideClickHookTest from "./components/use-outside-click/test";
import UseWindowResizeHook from "./components/use-window-resize/test";


function App() {
  return (
    <>
       {/* <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} /> 
      <LoadMore /> 
      <TreeView menus={menus} />
      <QrCodeGenerator /> 
       <LightDarkMode />   */}
     {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />  */}
      {/* <TabTest /> 
      <ModelTest /> */}
       {/* <GithubProfile /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}

    {/* <FeatureFlagGlobalState>
      <FeatureFlag />
    </FeatureFlagGlobalState> */}
    {/* <UseFetchHookTest /> */}
    {/* <UseOutsideClickHookTest /> */}
    {/* <UseWindowResizeHook /> */}
    <ScrollToTopAndBottom />
    
    </>
  );
}

export default App;
