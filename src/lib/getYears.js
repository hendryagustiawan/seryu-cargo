const changeYears = (years) => {
  const dateObject = new Date(years);
  return dateObject.getFullYear();
};

export default changeYears;
