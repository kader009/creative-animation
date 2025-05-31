function couter() {
  let count = 100;

  return function Increase(add) {
    console.log(`the amount is ${count + add}`);
  };
}

const addAllvalue = couter();
addAllvalue(300);
