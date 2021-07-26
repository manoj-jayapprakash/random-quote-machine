export const getJSON = async () => {
  const res = await fetch('https://api.quotable.io/random');
  return res.json();
};
