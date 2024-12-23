import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #e0e0e0;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #2c3e50;
`;

export const Stats = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #2c3e50;
`;

export const BoardSizeControlContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 8px;
`;

export const BoardSizeControlContainerLabel = styled.span`
  font-size: 18px;
  color: #2c3e50;
`;

export const RangeInput = styled.input`
  width: 200px;
  height: 4px;
  margin-left: 18px;
`;

export const Board = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
  gap: 2px;
  background: #2c3e50;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0 auto;
`;

export const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: darkblue;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const Cell = styled.div<{
  isBlack: boolean;
}>`
  aspect-ratio: 1;
  width: 60px;
  background-color: ${({ isBlack }) => (isBlack ? "#34495e" : "#ecf0f1")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ isBlack }) => (isBlack ? "#ecf0f1" : "#34495e")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.95);
    box-shadow: inset 0 0 0 2px #3498db;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const HighlightText = styled.span`
  color: #3498db;
  font-weight: bold;
`;
