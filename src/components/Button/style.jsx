import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Btn = styled.button`
  width: 60px;
  height: 60px;
  background: ${colors.calcBackground};
  margin: 30px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border: none;

  cursor: pointer;
  transition: all 200ms;

  &:hover{
    filter: brightness(80%);
  }


  color: #fff;
  font-family: sans-serif;
  font-size: 25px;

`;
