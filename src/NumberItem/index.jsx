import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NumberItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  width: 50px;
  height: 50px;
  border: 2px dotted black;
  padding: 0.75rem;
  margin: 0.25rem;
  font-family: 'missKindergarten';

  :focus {
    outline: 0;
  }

  ${({ active }) => active && `
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0,43,255,0.29);
    -moz-box-shadow: 0px 0px 10px 5px rgba(0,43,255,0.29);
    box-shadow: 0px 0px 10px 5px rgba(0,43,255,0.29);
  `}

  ${({ isHovered }) => isHovered && `
    background-color: rgba(100,100,100,0.1);
    font-weight: bold;
  `}

  ${({ isWrongAnswer }) => isWrongAnswer && `
    background-color: rgba(255, 0, 0, 0.1);
  `}

  ${({ showCorrect }) => showCorrect && `
    background-color: rgba(0, 255, 0, 0.1);
    height: 100px;
    width: 100px;
    font-weight: bold;
    font-size: 60px;
    transition: background-color 1s, width 300ms, height 300ms;
  `}
`;

NumberItem.propTypes = {
  number: PropTypes.number,
  active: PropTypes.bool,
};
export default NumberItem;
