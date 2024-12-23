import { memo } from "react";
import { useCheckerBoardContext } from "../../context/CheckerBoardContext";
import { CheckerboardProps } from "../../types";
import {
  Board,
  BoardSizeControlContainer,
  BoardSizeControlContainerLabel,
  Button,
  Cell,
  Container,
  RangeInput,
  Stats,
  Title,
} from "./styles";

export const Checkerboard = memo(
  ({ maxBoardSize, minBoardSize }: CheckerboardProps) => {
    const {
      gameState,
      handleCellClick,
      maxClickCount,
      resetGame,
      handleBoardSizeChange,
    } = useCheckerBoardContext();
    const { board, totalMoveCount, boardSize } = gameState;

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSize = Number(e.target.value);
      handleBoardSizeChange(newSize);
    };

    return (
      <Container>
        <Title>Checkerboard</Title>

        <Button onClick={resetGame} className="warning">
          Reset Game
        </Button>

        <BoardSizeControlContainer>
          <BoardSizeControlContainerLabel>
            Board Size: {boardSize}x{boardSize}
          </BoardSizeControlContainerLabel>
          <RangeInput
            type="range"
            min={minBoardSize}
            max={maxBoardSize}
            value={boardSize}
            onChange={handleSizeChange}
          />
        </BoardSizeControlContainer>

        <Stats>
          Highest Click Count: <b>{maxClickCount}</b>
          <br />
          Total Moves: <b>{totalMoveCount}</b>
        </Stats>

        <Board size={boardSize}>
          {board.map((cellItem, index) => {
            const row = Math.floor(index / boardSize);
            const col = index % boardSize;
            const isBlack = (row + col) % 2 === 1;

            return (
              <Cell
                key={index}
                isBlack={isBlack}
                onClick={() => handleCellClick(index)}
              >
                {cellItem}
              </Cell>
            );
          })}
        </Board>
      </Container>
    );
  }
);

Checkerboard.displayName = "Checkerboard";
