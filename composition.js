const scream = (str) => str.toUpperCase()
const exclaim = (str) => `${str}!`
const repeat = (str) => `${str} ${str}`

console.log(
	repeat(exclaim(scream('what is up?')))
)

const compose = (...fns) => (a) =>
	fns.reduceRight((acc, fn) => fn(acc), a)

const transformStr = compose(
	repeat,
	exclaim,
	scream
)

console.log(transformStr('What is up?'))
