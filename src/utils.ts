import { allPossibleChoices } from './constants';

/**
 * isBoolean
 *
 * Returns true if value is a boolean. This is helpful to determine whether
 * value is an actual boolean value or just not defined. More exact than a
 * basic truthy check.
 *
 * @param {boolean | null | undefined} val
 * @returns {boolean}
 */
export const isBoolean = (val: boolean | null | undefined) => {
  return 'boolean' === typeof val;
};

/**
 * getRandomHouseResult
 *
 * Will return rock, paper or scissors randomly
 *
 */
export const getRandomHouseResult = (uChoice: RockPaperScissors): RockPaperScissors => {
  // filter all possible choices to exclude what the user has already chosen
  const choices: RockPaperScissors[] = allPossibleChoices.filter((c) => c !== uChoice);
  const min = 0;
  const max = choices.length - 1;

  return choices[Math.floor(Math.random() * (max - min + 1)) + min];
};
