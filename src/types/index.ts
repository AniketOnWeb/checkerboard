export interface GameState {
  board: number[];
  totalMoveCount: number;
  boardSize: number;
}

export interface CheckerboardContextType {
  gameState: GameState;
  handleCellClick: (index: number) => void;
  resetGame: () => void;
  maxClickCount: number;
  handleBoardSizeChange: (size: number) => void;
}

export interface CheckerboardProps {
  minBoardSize: number;
  maxBoardSize: number;
  defaultBoardSize: number;
}
