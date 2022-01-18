import { RPSBeatsEnum } from '../constants';

/**
 * determineIfUserWon
 *
 * Determine if the user won.
 *
 * This will check the user and the house choice
 * and determine if the user has won based on whether their choice beats
 * the house.
 */
export const determineIfUserWon = (userChoice: RockPaperScissors, houseChoice: RockPaperScissors): boolean => {
  // return early for this invalid case
  if (userChoice === houseChoice) {
    return false;
  }

  // use enum to check if what `userChoice` can beat matches the value of `houseChoice`
  return RPSBeatsEnum[userChoice] === houseChoice;
};
