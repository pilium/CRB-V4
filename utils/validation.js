export const telRE = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
export const nameRE = /[А-Я][а-я]+\s+[А-Я][а-я]+\s+?[А-Я][а-я]?/;
export const emailRE = /^((\w[^\W]+)[.-:]?){1,}@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function checkOMSNumber(omsNumber) {
  const sNum = `${omsNumber}`.trim();
  if (sNum.length !== 16) return false;

  const arrOdd = [];
  const arrEven = [];
  const controlNum = parseInt(sNum.slice(-1), 10);

  for (let i = sNum.length - 2; i >= 0; i -= 2) arrOdd.push(sNum[i] * 2);
  for (let j = sNum.length - 3; j >= 0; j -= 2) arrEven.push(sNum[j] * 1);

  const arr2 = arrEven.join('') + arrOdd.join('');
  const arrSum = Array.from(`${arr2}`).reduce((acc, item) => acc + parseInt(item, 10), 0);
  const lastNumber = +`${arrSum}`.slice(-1);
  const controlNumResult = lastNumber === 0 ? lastNumber : 10 - lastNumber;

  return controlNum === controlNumResult;
}
