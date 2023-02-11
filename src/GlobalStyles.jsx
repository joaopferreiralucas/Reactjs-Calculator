import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    background: ${colors.background};
    font-family: sans-serif;
    color: black;
  }
  html, body, #root{
    height: 100%;
  }
`;

export const Container = styled.section`
  max-width: 400px;
  height: 650px;
  background: ${colors.calcBackground};
  margin: 30px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerPainel = styled.div`
  width: 400px;
  height: 450px;
  margin: 30px auto;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 80px;
  align-items: center;
  justify-content: center;
  padding: 35px 0 0 0;

  background: rgb(57,63,75);
  background: linear-gradient(180deg, #292D36 70%, rgba(34,37,45,1) 100%);
`;
