import React from 'react';
import PropTypes from 'prop-types';
import { NUMS_PER_ROW } from '../constants';
import { getAnswerFromQuestion } from '../helpers/questions';
import NumberItem from '../NumberItem/index';
import './Row.css';

const Row = ({
  index,
  currentQuestion,
  onNumberClick,
  setAppState,
  currentHover,
  showCorrect,
  wrongAnswers,
}) => (
  <div className="row">
    {
      Array(NUMS_PER_ROW).fill('').map((a,i) => {
        let number = (index + i + 1);
        let difference = number - currentQuestion.starting;

        return (
          <NumberItem
            key={i + index}
            active={currentQuestion.starting === number}
            onClick={e => onNumberClick(e, number)}
            onMouseEnter={e => setAppState({ currentHover: number })}
            onMouseLeave={e => setAppState({ currentHover: null })}
            isHovered={currentHover === number}
            showCorrect={showCorrect && number === getAnswerFromQuestion(currentQuestion)}
            isWrongAnswer={wrongAnswers.includes(number)}
          >
            { (!showCorrect && currentHover === number) ? difference : number }
          </NumberItem>
        )
      })
    }
  </div>
);

Row.propTypes = {
  index: PropTypes.number,
  currentQuestion: PropTypes.shape({
    starting: PropTypes.number,
    operation: PropTypes.oneOf(['-', '+']),
    amount: PropTypes.number,
  }),
  wrongAnswers: PropTypes.arrayOf(PropTypes.number),
  showCorrect: PropTypes.bool,
  currentHover: PropTypes.number,
  onNumberClick: PropTypes.func,
  setAppState: PropTypes.func,
};

export default Row;
