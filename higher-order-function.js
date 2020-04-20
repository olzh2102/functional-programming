/* 
    higher order fn-s 
    to modify fn-s

    1. accepts a function as an argument
    2. returns a new function
*/

const withCount = (fn) => {
	let count = 0

	return (...args) => {
		console.log(`Call count ${++count}`)
		return fn(...args)
	}
}

const add = (x, y) => x + y

const countedAdd = withCount(add)

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))
