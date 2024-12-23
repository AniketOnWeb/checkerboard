import { createContext, ReactNode, useContext } from "react";
import {
  DEFAULT_BOARD_SIZE as defaultBoardSize,
  MAX_BOARD_SIZE as maxBoardSize,
  MIN_BOARD_SIZE as minBoardSize,
} from "../constants";
import { useCheckerboard } from "../hooks/useCheckerboard";
import { CheckerboardContextType } from "../types";

const CheckerBoardContext = createContext<CheckerboardContextType | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const {
    gameState,
    handleCellClick,
    resetGame,
    maxClickCount,
    handleBoardSizeChange,
  } = useCheckerboard({ defaultBoardSize, minBoardSize, maxBoardSize });

  return (
    <CheckerBoardContext.Provider
      value={{
        gameState,
        handleCellClick,
        resetGame,
        maxClickCount,
        handleBoardSizeChange,
      }}
    >
      {children}
    </CheckerBoardContext.Provider>
  );
};

export const useCheckerBoardContext = () => {
  const context = useContext(CheckerBoardContext);
  if (!context) {
    throw new Error("Context must be used within a Provider :p");
  }
  return context;
};
