function couter() {
  // closure
  let count = 100;

  return function Increase(add) {
    console.log(`the amount is ${count + add}`);
  };
}

const addAllvalue = couter();
// addAllvalue(300);

// higher order function

function greet(name) {
  return `Hello! ${name}`;
}

function showName(name, callback) {
  return callback(name);
}

// console.log(showName('kader', greet));
