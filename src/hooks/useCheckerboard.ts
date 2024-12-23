import { useCallback, useMemo, useState } from "react";
import { CheckerboardProps, GameState } from "../types";

const initializeBoard = (size: number): number[] => {
  return new Array(size * size).fill(0);
};

export const useCheckerboard = ({
  defaultBoardSize,
  maxBoardSize,
  minBoardSize,
}: CheckerboardProps) => {
  const [gameState, setGameState] = useState<GameState>({
    board: initializeBoard(defaultBoardSize),
    totalMoveCount: 0,
    boardSize: defaultBoardSize,
  });

  const handleCellClick = useCallback((index: number) => {
    setGameState((prevState) => {
      const newBoard = [...prevState.board];
      newBoard[index] = (newBoard[index] || 0) + 1;

      return {
        ...prevState,
        board: newBoard,
        totalMoveCount: prevState.totalMoveCount + 1,
      };
    });
  }, []);

  const resetGame = () => {
    setGameState({
      board: initializeBoard(defaultBoardSize),
      totalMoveCount: 0,
      boardSize: defaultBoardSize,
    });
  };

  const maxClickCount = useMemo(() => {
    return Math.max(...gameState.board);
  }, [gameState.board]);

  const handleBoardSizeChange = useCallback((newSize: number) => {
    const validSize = Math.min(Math.max(newSize, minBoardSize), maxBoardSize);
    setGameState((prev) => ({
      ...prev,
      board: initializeBoard(validSize),
      boardSize: validSize,
      totalMoveCount: 0,
    }));
  }, []);

  return {
    gameState,
    handleCellClick,
    resetGame,
    maxClickCount,
    handleBoardSizeChange,
  };
};
