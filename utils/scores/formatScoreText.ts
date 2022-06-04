const padZero = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
};

export const formatScoreText = (time: number) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};
