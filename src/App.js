import Descriptor from "./components/descriptor/Descriptor";
import PlayerSelection from "./components/play-selector/PlayerSelection";
import Scores from "./components/scores/Scores";


function App() {
  return (
    <div >
      <Descriptor />
      {/* <Scores /> */}
      <PlayerSelection />
      
    </div>
  );
}

export default App;
