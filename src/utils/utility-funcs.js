export const formatNumber = (num) => {
  let numSplit, int, dec;
  num = Math.abs(num).toFixed(2);
  numSplit = num.split(".");
  int = numSplit[0];
  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input 2310 = 2,310
  }

  dec = numSplit[1];
  return `${int}.${dec}`;
};
