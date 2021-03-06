const square = (num) => num * num;
function map(arr, f) {
  arr.slice(0, arr.length-1).forEach((el) => {
    arr[el] = f(arr[el]);
  });
  return arr;
}
console.log(map([1,2,3,4,6], square));
// console.log(map([1,4,9,16,25], Math.sqrt)); 

// Another Way of doing
const square = (num) => num * num;
function map(arr, f) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = f(arr[i]);
  }
  return arr;
}
console.log(map([1,2,3,4,6], square));
console.log(map([1,4,9,16,25], Math.sqrt));