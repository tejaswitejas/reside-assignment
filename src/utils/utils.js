export const getCurrentDate = () => {
  const dateString = new Date().toLocaleDateString();
  const dateArray = dateString.split();

  return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
};
