import PropTypes from 'prop-types';
import { Btn } from './style';

function Button({ n, click, color }) {
  const handleClick = (e) => {
    click(e.target.innerHTML);
  };

  return (
    <Btn onClick={handleClick} style={color}>

      {n}

    </Btn>
  );
}

Button.propTypes = {
  n: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.shape({}),
  click: PropTypes.func.isRequired,
};

export default Button;
