// helpers
const map = (fn) => (a) => a.filter(fn)
const join = (separator) => (a) =>
	a.join(separator)
const lowerCase = (str) => str.toLowerCase()
const split = (pattern) => (str) =>
	str.split(pattern)
const compose = (...fns) => (x) =>
	fns.reduceRight((acc, fn) => fn(acc), x)
// =================

const bookTitles = [
	'The Culture Code',
	'Designing Your Life',
	'Algorithms to Live By',
]

// One of the challenges of debugging functional compositions is that,
// by design, we have removed side effects in favor of pure, pointfree
// functions. We need to create an "escape hatch" that lets us examine
// values at different parts of their transformation during a composition.
// This can be achieved with the use of a `trace()` function.

const trace = (msg) => (x) => (
	console.log(msg, x), x
)

// The code above may look a bit confusing. We are using the comma operator,
// a not-so-well-known operator that evaluates each expression from left to
// right and returns the final expression, in order to first log out our
// message and value, and then return the value. We can insert `trace`s into
// our compositions to see what a value is at a given point in the evaluation.

// Let's try to take the `bookTitles` from above and try to make a list of URL
// slugs from them. We'll do this through a composition, debugging as we go along.
// We'll iterate through buggy versions of the composition until we arrive at the
// best version.

let slugify = compose(
	join('-'),
	map(lowerCase),
	map(split(' '))
)

console.log(slugify(bookTitles)) // str.toLowerCase is not a function

// Ok, something isn't right about our composition, let's add some traces to see into
// the transformations

slugify = compose(
	join('-'),
	map(lowerCase),
	trace('after split'),
	map(split(' '))
)

console.log(slugify(bookTitles))
