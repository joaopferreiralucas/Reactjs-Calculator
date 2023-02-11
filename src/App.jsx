/* eslint-disable no-undef */
import React, { useState } from 'react';
import GlobalStyles, { Container, ContainerPainel } from './GlobalStyles';

import ThemeBtn from './components/ThemeBtn';
import Button from './components/Button';
import Result from './components/Result';

function App() {
  const [num, setNum] = useState('');
  const [op, setOp] = useState('');
  const [oldNum, setOld] = useState('');

  const red = {
    color: '#dc6262',
  };

  const green = {
    color: '#26e5c3',
  };

  const handleClick = (props) => {
    setNum(num + props);
  };

  const acClick = () => {
    setNum('');
  };

  const opDefine = (props) => {
    setOp(props);
    setOld(num);
    setNum(num + props);
  };

  const resultExec = () => {
    switch (op) {
      case '+': {
        let txt = num.replace(oldNum, '');
        txt = txt.replace(op, '');
        const newNumber = parseFloat(txt);

        const result = parseFloat(oldNum) + newNumber;

        setNum(result);
        break;
      }
      case 'X': {
        let txt = num.replace(oldNum, '');
        txt = txt.replace(op, '');
        const newNumber = parseFloat(txt);

        const result = parseFloat(oldNum) * newNumber;

        setNum(result);
        break;
      }

      case '-': {
        let txt = num.replace(oldNum, '');
        txt = txt.replace(op, '');
        const newNumber = parseFloat(txt);

        const result = parseFloat(oldNum) - newNumber;

        setNum(result);
        break;
      }

      case '/': {
        let txt = num.replace(oldNum, '');
        txt = txt.replace(op, '');
        const newNumber = parseFloat(txt);

        const result = parseFloat(oldNum) / newNumber;

        setNum(result);
        break;
      }

      default:
        acClick();
    }
  };

  return (
    <Container>
      <ThemeBtn />
      <Result numero={num} />
      <ContainerPainel>
        <Button n="AC" click={acClick} color={green} />
        <Button n="+/-" click={handleClick} color={green} />
        <Button n="%" click={opDefine} color={green} />
        <Button n="/" click={opDefine} color={red} />
        <Button n="7" click={handleClick} />
        <Button n="8" click={handleClick} />
        <Button n="9" click={handleClick} />
        <Button n="X" click={opDefine} color={red} />
        <Button n="4" click={handleClick} />
        <Button n="5" click={handleClick} />
        <Button n="6" click={handleClick} />
        <Button n="-" click={opDefine} color={red} />
        <Button n="1" click={handleClick} />
        <Button n="2" click={handleClick} />
        <Button n="3" click={handleClick} />
        <Button n="+" click={opDefine} color={red} />
        <Button n="0" click={handleClick} />
        <Button n="." click={handleClick} />
        <Button n="AC" click={acClick} color={green} />
        <Button n="=" click={resultExec} color={red} />
      </ContainerPainel>
      <GlobalStyles />
    </Container>
  );
}

export default App;
