import { determineIfUserWon } from './';

describe('actions tests', () => {
  describe('determineIfUserWon tests', () => {
    describe('`userChoice` and `houseChoice` are the same', () => {
      it('returns false', () => {
        expect(determineIfUserWon('PAPER', 'PAPER')).toBe(false);
      });
    });

    describe('`userChoice` is `paper` and `houseChoice` is `scissors`', () => {
      it('returns false', () => {
        expect(determineIfUserWon('PAPER', 'SCISSORS')).toBe(false);
      });
    });

    describe('`userChoice` is `rock` and `houseChoice` is `paper`', () => {
      it('returns true', () => {
        expect(determineIfUserWon('ROCK', 'PAPER')).toBe(false);
      });
    });

    describe('`userChoice` is `paper` and `houseChoice` is `rock`', () => {
      it('returns false', () => {
        expect(determineIfUserWon('PAPER', 'ROCK')).toBe(true);
      });
    });

    describe('`userChoice` is `scissors` and `houseChoice` is `paper`', () => {
      it('returns true', () => {
        expect(determineIfUserWon('SCISSORS', 'PAPER')).toBe(true);
      });
    });

    describe('`userChoice` is `rock` and `houseChoice` is `scissors`', () => {
      it('returns false', () => {
        expect(determineIfUserWon('ROCK', 'SCISSORS')).toBe(true);
      });
    });

    describe('`userChoice` is `scissors` and `houseChoice` is `rock`', () => {
      it('returns false', () => {
        expect(determineIfUserWon('SCISSORS', 'ROCK')).toBe(false);
      });
    });
  });
});
