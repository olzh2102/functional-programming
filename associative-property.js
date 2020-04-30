const scream = (str) => str.toUpperCase()
const exclaim = (str) => `${str}!`
const repeat = (str) => `${str} ${str}`

const compose = (...fns) => (a) =>
	fns.reduceRight((acc, fn) => fn(acc), a)

const withExuberance = compose(
	repeat,
	exclaim,
	scream
)

const str = 'I love kazy!'
console.log(withExuberance(str))

const repeatExcitedly = compose(repeat, exclaim)
console.log(compose(repeatExcitedly, scream)(str))

const screamLoudly = compose(exclaim, scream)
console.log(compose(repeat, screamLoudly)(str))
