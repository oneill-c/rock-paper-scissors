export enum RPSEnum {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export enum RPSBeatsEnum {
  ROCK = 'SCISSORS',
  PAPER = 'ROCK',
  SCISSORS = 'PAPER',
}

export const allPossibleChoices: RockPaperScissors[] = [RPSEnum.ROCK, RPSEnum.PAPER, RPSEnum.SCISSORS];
