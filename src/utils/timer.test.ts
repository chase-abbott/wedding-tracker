import { timeUntilWedding } from './timer';

describe('countdown timer', () => {
  it('counts down the remaining time left until wedding', () => {
    const timeLeft = timeUntilWedding();
    
    expect(timeLeft).toBeLessThan(26455402771);
  });
});

export {};