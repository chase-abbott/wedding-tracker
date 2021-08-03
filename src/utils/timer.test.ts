import { timeUntilWedding, millisecondsToDays } from './timer';

describe('countdown timer', () => {
  it('counts down the remaining time left until wedding', () => {
    const timeLeft = timeUntilWedding();
    
    expect(timeLeft).toBeLessThan(26455402771);
  });

  it('converts milliseconds to days/hours/minutes/seconds object', () => {
    const timeLeft = timeUntilWedding();
    const timeLeftObject = millisecondsToDays(timeLeft);
    console.log(timeLeftObject);
  });
});

export {};