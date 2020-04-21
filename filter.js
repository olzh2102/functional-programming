const arr = [2, 4, 8]

const transform = (number) => number % 4 === 0
const result = arr.filter(transform)
console.log(result) // [4, 6, 10]

const filterArr = (predicate, array) => {
	let filtered = []

	for (let current of array) {
		if (predicate(current)) {
			filtered.push(current)
		}
	}

	return filtered
}

const resultOffilterArr = filterArr(
	transform,
	arr
)
console.log(resultOffilterArr)
