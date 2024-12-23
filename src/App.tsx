import { Checkerboard } from "./components/Checkerboard";
import {
  MAX_BOARD_SIZE,
  MIN_BOARD_SIZE,
  DEFAULT_BOARD_SIZE,
} from "./constants";

const App = () => {
  return (
    <Checkerboard
      maxBoardSize={MAX_BOARD_SIZE}
      minBoardSize={MIN_BOARD_SIZE}
      defaultBoardSize={DEFAULT_BOARD_SIZE}
    />
  );
};

export default App;
