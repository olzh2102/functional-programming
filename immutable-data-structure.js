/* 
Immutable Data

Mutable = can be changed after creation
Immutable = can't be changed after creation
*/

const a = [1, 2, 3]
const b = a
console.log(a === b)

b.push(4) // mutating a as well
console.log(a)

const push = (value) => (array) => {
	const clone = [...array]
	clone.push(value)
	return clone
}

const a = [1, 2, 3]
const b = push(4)(a)
