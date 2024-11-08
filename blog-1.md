# The Significance of Union and Intersection Types in TypeScript

Typescript offers a lot of powerful features over Javascript to make coding more efficient, union and intersection types is important features in typescript. These two types helps us to define variables and functions more flexibly. Let's learn this two simple terms with real life examples.

## Union Type

Union type allows a variable to hold more than one type of data. It gives us flexibility to store variable one type or another. This is help us when we want a variable to accept multiple types of values. In typescript, we can create union type using the | symbol.

**Example:**

```typescript
let value: string | number;
value = 'Hello';
value = 241113;
```

### Real world example

Let assume building a form that can accept userName or a userId for login, now instead of creating multiple variables for each, we can use a union type to handle this situation.

```typescript
type Input = string | number;

function handleInput(input: Input) {
	if (typeof input === 'string') {
		console.log(`userName: ${input}`);
	} else {
		console.log(`userId: ${input}`);
	}
}

handleInput('md.readwan');
handleInput(241113);
```

## Intersection Type

Intersection type combine multiple types into single one. A variable with an intersection type have to satisfy all the conditions of the combined type. Intersection type are opposite of union type. We use & symbol to create intersection type.

**Example:**

```typescript
type Person = { name: string };
type Student = { studentId: number };
type StudentDetails = Person & Student;

const student: StudentDetails = {
	name: 'Alice',
	studentId: 12345,
};
```

## Now let’s summarize this

- **Union types** allows variable to hold multiple type
- **Intersection type** combines multiple type together, and result must include all properties from each type.
