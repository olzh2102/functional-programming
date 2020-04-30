// argument order

const map = (array) => (cb) => array.map(cb)

const arr = [1, 2, 3, 4, 5]
const double = (n) => n * 2

const withArr = map(arr)

// now only thing we can change is cb parameter
console.log(withArr(double))
console.log(withArr((n) => n * 3))

// if we change order of parameters we derive more
// from this map function
const newMap = (cb) => (array) => array.map(cb)

const withDouble = newMap(double)

console.log(withDouble(arr))
console.log(withDouble([2, 4, 6, 8]))

// Most specific => least specific

const prop = (key) => (obj) => obj[key]

const propName = prop('name')

const people = [
	{ name: 'Jack' },
	{ name: 'Johnson' },
	{ name: 'Lenny' },
	{ name: 'Katie' },
]

console.log(newMap(propName)(people))
