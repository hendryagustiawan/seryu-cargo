const formatTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const formattedTime = `${hours}h ${minutes}m`;

  return formattedTime;
};

export default formatTime;
