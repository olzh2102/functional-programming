const arr = [2, 4, 8]

const transform = (number) => number + 2
const result = arr.map(transform)
console.log(result) // [4, 6, 10]

const mapArr = (fn, array) => {
	let result = []

	for (let current of array) {
		const transformed = fn(current)
		result.push(transformed)
	}

	return result
}

const resultOfMapArr = mapArr(transform, arr)
console.log(resultOfMapArr)
