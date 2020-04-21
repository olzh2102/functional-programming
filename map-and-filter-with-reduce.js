const numbers = [1, 2, 4, 5]
const filter = (item) => item % 2 === 0
const map = (item) => item + 10

const filterArr = (predicate, array) =>
	array.reduce((acc, current) => {
		if (predicate(current)) {
			acc.push(current)
		}
		return acc
	}, [])

const result = filterArr(filter, numbers)
console.log(result)

const mapArr = (fn, array) =>
	array.reduce((acc, current) => {
		acc.push(fn(current))
		return acc
	}, [])

const resultMap = mapArr(map, numbers)
console.log(resultMap)
