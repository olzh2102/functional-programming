// Pure Functions

// f(x) = x + 1
const f = (x) => x + 1

// Impure fns

// Ex 1 - Global State
const COST_OF_ITEM = 19
const cartTotal = (quantity) =>
	COST_OF_ITEM * quantity

// Ex 2 - Same input, different output
const generateID = () =>
	Math.floor(Math.random() * 1000)

const createUser = (name, age) => ({
	id: generateID(),
	name,
	age,
})

// Ex 3 - Sde Effects #1
let id = 0
const createFoodItem = (name) => ({
	id: ++id,
	name,
})

// Ex 4 - Side Effects #2 - Outside World
const logger = (msg) => console.log(msg)
