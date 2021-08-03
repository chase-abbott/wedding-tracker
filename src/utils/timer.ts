const timeUntilWedding = () => {
  const currentDateMilliseconds = new Date().valueOf();
  const weddingDateMilliseconds = new Date('June 5, 2022 16:00:00').valueOf();

  const timeUntilWedding = weddingDateMilliseconds - currentDateMilliseconds;
  return timeUntilWedding;
};

const millisecondsToDays = (ms: number) => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const daysms = ms % (1000 * 60 * 60 * 24);
  const hours = Math.floor((daysms) / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor((hoursms) / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const seconds = Math.floor(minutesms / 1000);
  
  return { days, hours, minutes, seconds };
};

export { 
  timeUntilWedding, 
  millisecondsToDays
};