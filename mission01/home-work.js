const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};
const getValueAtObject = (obj, findKey) => {
  let objectKeys = Object.keys(person);
  let objectValues = Object.values(person);
  if (!objectKeys.includes(findKey)) throw new Error("찾는거 없음!!!");
  return obj[findKey];
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
// console.log(getValueAtObject(person, "country")); // Error

const numbers = [10, 20, 30, 40, 50];

const getNumberAtArray = (arr, index) => {
  let result = 0;
  if (arr.length - 1 < index || index < 0) throw new Error("숫자다시잘봐봐");
  arr.forEach((_, numIdx, array) => {
    if (numIdx === index) result += array[numIdx];
  });
  return result;
};
console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!
