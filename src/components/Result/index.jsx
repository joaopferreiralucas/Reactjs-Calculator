import PropTypes from 'prop-types';
import { Container } from './style';

function Result({ numero }) {
  return (
    <Container>
      <h1>{numero}</h1>
    </Container>
  );
}

Result.propTypes = {
  numero: PropTypes.string.isRequired,
};

export default Result;
