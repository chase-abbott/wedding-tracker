const timeUntilWedding = () => {
  const currentDateMilliseconds = new Date().valueOf();
  const weddingDateMilliseconds = new Date('June 5, 2022 16:00:00').valueOf();

  const timeUntilWedding = weddingDateMilliseconds - currentDateMilliseconds;
  return timeUntilWedding; 
};

export { timeUntilWedding };