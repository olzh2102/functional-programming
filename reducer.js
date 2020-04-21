const numbers = [1, 2, 3]

const summingReducer = (acc, current) =>
	current + acc
const result = numbers.reduce(summingReducer)
console.log(result)

const reduceArr = (
	reducerFn,
	initialAcc,
	array
) => {
	let accumulatorValue = initialAcc

	for (let current of array) {
		accumulatorValue = reducerFn(
			accumulatorValue,
			current
		)
	}

	return accumulatorValue
}

const resultOfReduceArr = reduceArr(
	summingReducer,
	0,
	numbers
)
console.log(resultOfReduceArr)

const objReducer = (acc, current) => {
	console.log(current)
	acc[current.title] = current.id
	return acc
}

const testArray = [
	{ id: 1, title: 'a' },
	{ id: 2, title: 'b' },
]

const anotherResultOfReduceArr = reduceArr(
	objReducer,
	{},
	testArray
)
console.log(anotherResultOfReduceArr)
