import React from 'react';
import PropTypes from 'prop-types';
import { NUM_ROWS } from '../constants';
import Row from '../Row';
import './Chart.css';

const Chart = ({
  currentQuestion,
  onNumberClick,
  setAppState,
  currentHover,
  showCorrect,
  wrongAnswers,
}) => (
  <div className="chart">
    {
      Array(NUM_ROWS).fill('').map((a, i) => (
        <Row
          index={i * 10}
          currentQuestion={currentQuestion}
          setAppState={setAppState}
          onNumberClick={onNumberClick}
          currentHover={currentHover}
          wrongAnswers={wrongAnswers}
          showCorrect={showCorrect}
        />
      ))
    }
  </div>
);

Chart.propTypes = {
  currentQuestion: PropTypes.shape({
    starting: PropTypes.number,
    operation: PropTypes.oneOf(['-', '+']),
    amount: PropTypes.number,
  }),
  wrongAnswers: PropTypes.arrayOf(PropTypes.number),
  currentHover: PropTypes.number,
  showCorrect: PropTypes.bool,
  onNumberClick: PropTypes.func,
  setAppState: PropTypes.func,
};
export default Chart;
