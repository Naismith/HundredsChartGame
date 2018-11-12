import React, { Component } from 'react';
import Avatar from 'avataaars';
import Chart from './Chart';
import Stats from './Stats';
import { generateQuestion, getAnswer } from './helpers/questions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: {
        starting: null,
        operation: null,
        amount: null,
      },
      wrongAnswers: [],
      stats: {
        correct: 0,
      },
      showCorrect: false,
      currentHover: null,
      isLoading: true,
    }
  }

  setAppState = (newState) => this.setState(newState);

  handleNumberClick = (e, number) => {
    const { operation, starting, amount } = this.state.currentQuestion;
    const correctAnswer = getAnswer(operation, starting, amount);

    if (number === correctAnswer) {
      this.setState({ showCorrect: true, wrongAnswers: [] });

      setTimeout(() => {
        const nextQuestion = Object.assign({}, generateQuestion());
        this.setState(prevState => ({
          showCorrect: false,
          stats: {
            correct: prevState.stats.correct + 1
          },
          currentQuestion: nextQuestion,
        }));
      }, 1000)
    } else {
      this.setState(prevState => ({
        wrongAnswers: prevState.wrongAnswers.concat(number),
      }));
    }
  }

  componentDidMount() {
    const nextQuestion = Object.assign({}, generateQuestion());
    this.setState({ currentQuestion: nextQuestion });
  }

  render() {
    const { starting, operation, amount } = this.state.currentQuestion;
    return (
      <div className="app">
          <Avatar
            avatarStyle='Transparent'
            topType='LongHairCurvy'
            accessoriesType='Blank'
            hairColor='BrownDark'
            facialHairType='Blank'
            clotheType='ShirtScoopNeck'
            clotheColor='Blue01'
            eyeType='Happy'
            eyebrowType='UpDown'
            mouthType='Tongue'
            skinColor='Pale'
          />
        <div className="app-container">
          <h1>100's Chart Test</h1>
          <h3>What is {starting} {operation} {amount}</h3>
          <Stats {...this.state.stats} />
          <Chart
            currentQuestion={this.state.currentQuestion}
            onNumberClick={this.handleNumberClick}
            setAppState={this.setAppState}
            currentHover={this.state.currentHover}
            showCorrect={this.state.showCorrect}
            wrongAnswers={this.state.wrongAnswers}
          />
        </div>

        <Avatar
          avatarStyle='Transparent'
          topType='LongHairStraight2'
          accessoriesType='Blank'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='ShirtVNeck'
          clotheColor='Heather'
          eyeType='Happy'
          eyebrowType='DefaultNatural'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
    );
  }
};
export default App;
