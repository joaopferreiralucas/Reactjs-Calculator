import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  width: 100px;
  height: 40px;
  background: ${colors.themeBtnBack};
  margin: 30px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icons{
    color:white;
    margin: 10px;
    cursor: pointer;
    transition: all 300ms;

    &:hover{
      filter: brightness(80%);
    }
  }

  .selected{
    opacity: 20%;
  }
`;
