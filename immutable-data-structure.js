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

const c = [1, 2, 3]
const d = push(4)(c)
console.log(c) // [1, 2, 3]
console.log(d) // [1, 2, 3, 4]

// taking a drink from a glass

class MutableGlass {
	constructor(content, amount) {
		this.content = content
		this.amount = amount
	}

	takeDrink(value) {
		this.amount = Math.max(
			this.amount - value,
			0
		) // to make sure as a result we have positive number
		return this
	}
}

const mg1 = new MutableGlass('water', 100)
const mg2 = mg1.takeDrink(20)
console.log(mg1)
console.log(mg2)

class ImmutableGlass {
	constructor(content, amount) {
		this.content = content
		this.amount = amount
	}

	takeDrink(value) {
		return new ImmutableGlass(
			this.content,
			Math.max(this.amount - value, 0)
		)
	}
}

const ig1 = new ImmutableGlass('water', 100)
const ig2 = ig1.takeDrink(20)
console.log(ig1)
console.log(ig2)
