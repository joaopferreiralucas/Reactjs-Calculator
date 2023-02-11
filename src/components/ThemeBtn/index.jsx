import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

import { Container } from './style';

function ThemeBtn() {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (selected === true) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <Container>
      <BsSunFill className={`icons ${selected === true ? 'selected' : ''}`} size={18} onClick={handleClick} />
      <BsMoonFill className={`icons ${selected === false ? 'selected' : ''}`} size={18} onClick={handleClick} />
    </Container>
  );
}

export default ThemeBtn;
