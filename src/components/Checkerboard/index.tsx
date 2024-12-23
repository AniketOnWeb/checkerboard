import { memo } from "react";
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
import { useCheckerboard } from "../../hooks/useCheckerboard";

export const Checkerboard = memo(
  ({ maxBoardSize, minBoardSize, defaultBoardSize }: CheckerboardProps) => {
    const {
      gameState,
      handleCellClick,
      resetGame,
      maxClickCount,
      handleBoardSizeChange,
    } = useCheckerboard({ defaultBoardSize, minBoardSize, maxBoardSize });

    const { board, totalMoveCount, boardSize } = gameState;

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSize = Number(e.target.value);
      handleBoardSizeChange(newSize);
    };

    return (
      <Container>
        <Title>Checkerboard</Title>

        <Button onClick={resetGame}>Reset Game</Button>

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
