import React, { ReactElement, useEffect, useState } from 'react';

import Layout from '../components/layout';
import Step1 from '../components/steps/step-1';
import Step2 from '../components/steps/step-2';
import Step3 from '../components/steps/step-3';
import Step4Result from '../components/steps/step-4-result';
import { isBoolean, getRandomHouseResult } from '../utils';
import { determineIfUserWon } from '../actions';

const IndexPage = (): ReactElement => {
  const [userChoice, setUserChoice] = useState<RockPaperScissors | undefined>(undefined);
  const [houseChoice, setHouseChoice] = useState<RockPaperScissors | undefined>(undefined);
  const [isWin, setIsWin] = useState<boolean | undefined>(undefined);
  const [score, setScore] = useState<number>(0);

  // useEffect to set score from localStorage on component load
  useEffect(() => {
    const lsScore = localStorage.getItem('score');
    if (lsScore) {
      setScore(parseInt(lsScore) || 0);
    }
  }, []);

  // useEffect to detect changes to `userChoice` and set `houseChoice` based on that
  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        setHouseChoice(getRandomHouseResult(userChoice));
      }, 2000);
    }
  }, [userChoice]);

  // useEffect to detect changes to `userChoice` and set `houseChoice` based on that
  useEffect(() => {
    if (userChoice) {
      setTimeout(() => {
        setHouseChoice(getRandomHouseResult(userChoice));
      }, 2000);
    }
  }, [userChoice]);

  // useEffect to detect changes to `houseChoice` and set whether user has won or not
  useEffect(() => {
    if (houseChoice) {
      setTimeout(() => {
        if (userChoice && houseChoice) {
          setIsWin(determineIfUserWon(userChoice, houseChoice));
        }
      }, 2000);
    }
  }, [houseChoice]);

  // useEffect to detect changes to `isWin` and set whether user has won or not
  useEffect(() => {
    if (isWin) {
      incrementScore();
    }
  }, [isWin]);

  /**
   * reset
   *
   * Reset all state and begin game again
   */
  const reset = () => {
    setUserChoice(undefined);
    setHouseChoice(undefined);
    setIsWin(undefined);
  };

  /**
   * incrementScore
   *
   * Increment score by 1
   */
  const incrementScore = () => {
    setScore(score + 1);
    localStorage.setItem('score', JSON.stringify(score + 1));
  };

  let componentToDisplay: ReactElement = <Step1 onChoiceClick={setUserChoice} />;

  // check if `isWin` has been set so we know the game is complete
  if (isBoolean(isWin) && userChoice && houseChoice) {
    componentToDisplay = (
      <Step4Result isWin={Boolean(isWin)} userChoice={userChoice} houseChoice={houseChoice} onPlayAgainClick={reset} />
    );
  } else if (userChoice && houseChoice) {
    // show both user and house choices
    componentToDisplay = <Step3 userChoice={userChoice} houseChoice={houseChoice} />;
  } else if (userChoice) {
    // show just user choice
    componentToDisplay = <Step2 userChoice={userChoice} />;
  }

  return <Layout score={score}>{componentToDisplay}</Layout>;
};

export default IndexPage;
