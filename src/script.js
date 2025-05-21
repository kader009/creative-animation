const original = {
  name:'kader',
  address:{
    city: 'Dhaka'
  }
}

const shallowCopy = {...original}
shallowCopy.name = 'Jane'
shallowCopy.address.city = 'Noakhali'

console.log(original.name);
console.log(original.address.city);