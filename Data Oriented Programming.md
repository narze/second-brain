---
title: "Data Oriented Programming"
author: "Yehonathan Sharvit"
tags:
- #Book
date: 2022-03-14
---

![](/Images/Data%20Oriented%20Programming.png)

# Summary
A story about adopting Data-Oriented Programming paradigm and it's 4 principles which reduce complexity compared to Object-Oriented Programming (OOP). However DOP is language agnostic and can be applied on OOP, and also FP (Functional Programming).

The core idea is to use generic data structure like JSON to represent data, then separate the code (behavior) from the data. In OOP-ish languages you can use Static Class Method.

However, adopting DOP comes with a price, such as slight performance impact (which can be fixed by using libraries like Lodash or Immutable.js), also developers must understand FP enough to work with data manipulation as well.

# Part 1 - Flexibility
## Chapter 1 - Complexity of Object-Oriented Programming
- Complexity of OOP
	- Code and data is mixed
	- Data is locked in objects
	- Code is locked in classes

## Chapter 2 - Separation between code and data
- Data Oriented Programming (DOP)
	- Used in Clojure
	- DOP Principle #1 : Separate Code from Data
		- Data Entities
			- Nouns / noun phrases in the requirements
			- Draw data entity diagrams, group into high level groups (nested list or mind map)
		- Code Modules
			- Verbs / verb phrases in the requirements
			- Stateless functions
			- Aggregate "exposed" functions in a single code module
				- Can be represented in package, namespace, or class
			- Has "Usage" relations between modules
				- e.g. Library module "uses" Catalog module
				- Causes "Constraints"
	- DOP is against Data Encapsulation of data in Objects
	- DOP principles are language agnostic, can be applied in OOP and FP
	- Pass explicit data as function argument
		- Don't use `this` or `self`, they are the state of the object i.e. implicit argument
	- Define high level data modules
	- "Data lives on its own"
		- So that DOP is easier to understand because system is split into 2 parts
		- Easier to adapt to changing requirements
	- Supports polymorphism (See chapter 13)
## Chapter 3 - Basic data manipulation
- DOP Principle #2 : Represent data entities with generic data structures
- Data Representation
	- Record
		- Heterogeneous map e.g. Book (TypeScript "interface")
	- Collection
		- Array, List
	- Index
		- Homogeneous map e.g. Record<string, Book>
- DOP: Data model is flexible
	- JSON Serialization is free (JSON.parse & JSON.stringify)
	- Trade data safety for flexibility & genericity
		- Safety: accessing record members defined at compile time
- Use `Lodash` for data manipulation & retrieval
	- `_.map`
	- `_.get`
	- `_.filter`
	- `_.values`
	- `_.has`
	- `_.merge`
- Data is represented as data (not Object)
	- Represent records with string maps (Record<string, ...>)
- Code contains no abstraction, just manipulate the data.
- Nesting data can be retrieved with "Information Path"
- Feature fields : Separate "type" of record (e.g. `isAdmin`, `isVIP`) as boolean
	- Simpler to having `type` field as Enum

## Chapter 4 - State management
- DOP Principle #3 - Data is immutable
	- But the state reference is mutable (like Git HEAD commit)
- Mutation
	- An operation that changes the state of the system
	- Calculation phase + Commit phase
	- Data manipulation via native hash map is forbidden, must use immutable functions
		- Use Immutable.js to enforce Immutable data structure
- Structural sharing
	- Sharing the parts that don't need to change
	- Use shallow clone
- `_.set` is mutable function by default, use "Lodash FP" for immutable version
```javascript
_ = fp.convert({
  "cap": false,
  "curry": false,
  "fixed": false,
  "immutable": true,
  "rearg": false
})
```
- Commit phase is stateful (OOP-like)
	- Validate inside commit phase (e.g. Git commit hook)

## Chapter 5 - Basic concurrency control
- Use Optimistic Concurrency Control (OCC) without locking mechanism
	- Locks hit performance & cause deadlocks
	- Elasticsearch uses OCC
	- "Let mutations (commit phase) ask forgiveness instead of permission"
	- We assume that conflicts don't occur to often, hence the name "optimistic "
- 3-way merge like Git, when conflict occurs
- Structural Diff
	- Uses `_.reduce`
	- Conflict occurs wheh the diff share the same information path (`_.intersection`)
- Implement SystemComsistency.reconcile & SystemValidity.validate in commit phase

## Chapter 6 - Unit tests
- In DOP, usually mocking functions is not needed
- Test f(dataIn) == expectedDataOut
	- Use `_.isEqual` to compare data recursively
- Data validity depends on the context
	- e.g. Can strip some unused data, just for unit testing
- Tree of function calls
	- Test the tree leaves first (Unit test)
	- Low data complexity : More test cases
	- Higher data complixite : Less test cases
	- Assume that the functions down the tree work as expected (when writing unit tests from the leaves up to the root)

# Part 2 - Scalibility
## Chapter 7 - Basic data validation
- DOP Principle #4: Separate data schema and data representation.
- Data validation
	- Validate data that crosses the system boundaries (for production safety) > validate data inside the system (for ease of development)
- Use [JSON Schema](https://json-schema.org)
	- [ajv](https://github.com/ajv-validator/ajv)
		- ajv catches only the first validation failure by default
- Be strict on data you send, be flexible on data you receive
	- Robustness principle: "Be conservative in what you send, be liberal in what you accept" (https://en.wikipedia.org/wiki/Robustness_principle).
	- "Client is always right"
- JSON schema cheatsheet
	- Schema
```json
{
  "type": "array", ❶
  "items": {
    "type": "object", ❷
    "properties": { ❸
      "myNumber": {"type": "number"}, ❹
      "myString": {"type": "string"}, ❺
      "myEnum": {"enum": ["myVal", "yourVal"]}, ❻
      "myBool": {"type": "boolean"} ❼
    },
    "required": ["myNumber", "myString"], ❽
    "additionalProperties": false ❾
  }
}
```
  - Valid Data
```json
[
  { ❶
    "myNumber": 42,
    "myString": "Hello",
    "myEnum": "myVal",
    "myBool": true
  },
  { ❷
    "myNumber": 54,
    "myString": "Happy"
  }
]
```

## Chapter 8 - Advanced Concurrency Control
- Deadlocks never happen with Atoms.
- Atom consists of `get`, `set`, and `swap`
- `swap`: Compute next value of the Atom, then check if value has not changed during the computation (OCC), them commit using `set`
	- e.g. `counter.swap(x => x+1)`
	- If data is changed during the computation, retry
	- Check if value is not change using [Compare and Swap (CAS)](https://en.wikipedia.org/wiki/Compare-and-swap) operation
	- In theory, doing this could create Starvation, but in practice the threads would do some real work e.g. db access, then other threads  can swap the atom by that time

## Chapter 9 - Persistent Data Structures
- When collection is big, naive structural sharing has performance issues e.g. diff-ing
- And also it doesn't prevent direct mutation
- [Persistent Data Structure](https://en.wikipedia.org/wiki/Persistent_data_structure) preserves previous version of itself when modified
- When data is immutable, it is safe to share it e.g. Adding a node to the head of existing linked-list
- Persistent lists can be manipulated in near constant time, using linked list with tree.
- Immutable.js supports PDS
	- `Immutable.fromJS({...})`
- [Mudash](https://github.com/brianneisler/mudash) ports Lodash to Immutable
	- Or port it yourself
```javascript
Immutable.map = function(coll, f) {
  return coll.map(f);
};

Immutable.filter = function(coll, f) {
  if(Immutable.isMap(coll)) {
    return coll.valueSeq().filter(f);
  }
  return coll.filter(f);
};

Immutable.isEqual = Immutable.is;

Immutable.reduce = function(coll, reducer, initialReduction) {
  return coll.reduce(reducer, initialReduction);
};

Immutable.isEmpty = function(coll) {
  return coll.isEmpty();
};

Immutable.keys = function(coll) {
  return coll.keySeq();
};

Immutable.isObject = function(coll) {
  return Immutable.Map.isMap(coll);
};

Immutable.isArray = Immutable.isIndexed;

Immutable.union = function() {
  return Immutable.Set.union(arguments);
};
```
  - Then replace all `_.` with `Immutable.`

## Chapter 10 - Database Operations
- DOP represent data from database with generic data collections, and manipulate it with generic functions
- Validate query from database with JSON Schema (ajv)
- Use `_.at` to slice values using keys
- Rename SQL result keys with map, filter, reduce (e.g. convert snake_case from database to camelCase in JSON)
- Aggregate field from SQL queries with JOINs

## Chapter 11 - Web Services
- DOP: Build the system insides like building the outsides
- Combine data from database & external APIs with generic functions
- Transform array into map with `_.keyBy`

# Part 3 - Maintainability
## Chapter 12 - Advanced Data Validation
- All functions receive and return generic data, so that it's hard to know the expected shape of data in & out during development
	- Write in&out schema validation which runs only in dev & test environment
- JSON Schema
	- Use `additionalProperties: {"type": "number"} for number maps`
	- Use `prefixItems` to define schema for tuples
	- Can also validate with Regex patterns, number ranges, date, etc.
	- Use https://navneethg.github.io/jsonschemaviewer to visualize schema
	- Use https://github.com/metosin/malli to generate PlantUML diagram, then visualize with https://www.planttext.com/
	- Generate fake data from JSON Schema with https://github.com/json-schema-faker/json-schema-faker
		- Useful for unit testing
- Data validation inside the system should be disabled in production as it'll impact performance

## Chapter 13 - Polymorphism
- Polymorphism = polus + morphe = many + form
- Main benefit of polymorphism is extensibility
- Represent `"type"` in JSON data (the field name can be anything)
- Use Multimethod to achieve polymorphism in DOP
	- Js library : https://github.com/caderek/arrows/tree/master/packages/multimethod
	- Create `dispatch` function and returns type of data in JSON
	- Create `method` for each type
	- Combine in `multi`
	- Supports tuple `"type"` e.g. `[animal, language]` as [Multimethod with multiple dispatch](https://en.wikipedia.org/wiki/Multiple_dispatch)
	- Multimethod with dynamic dispatch e.g. animal which name is longer than 5 chars

## Chapter 14 - Advanced Data Manipulation
- Generic update function
	- `update(data, path, fun)` e.g. `update(book, "authors", _.uniq` or `update(book, "lentCount", x => x+1)`
	- Lodash has `_.update`
- `_.flatMap` = `_.map` then `_.flatten`
- Pick the least generic utility function that solves the problem
	- e.g. Use screwdriver to turn screws instead of Swiss army knife
	- Use `reduce` instead of `forEach`, if possible
	- Refactor to function with proper name to hide low-level data manipulation e.g. `countByBoolField(books, "isLent", "lent", "notLent")` 
- MongoDB's `$unwind` implemented in js
```javascript
function unwind(map, field) {
  var arr = _.get(map, field);
  return _.map(arr, function(elem) {
      return _.set(map, field, elem);
  });
}
```
- 4 Steps of custom data manipulation design
	- 1. Discover the function signature (name, parameters, return value) by using it before implement
	- 2. Write unit test (TDD)
	- 3. Formulate behavior in plain English
	- 4. Implement

## Chapter 15 - Debugging
- Determinism of function 
	- The same arguments always lead to same return values
	- "Functional Programming"
- Avoid state to cause "Side effects" as much as possible
	- Have only SystemState module deals with state (e.g. database)
- REPL
  - `node` in CLI, browser dev console
	- Copy object or data to run in repl for debugging
	- Faster feedback loop
		- When done with debugging and fixing in REPL, test the system once from end to end.
- "Context Capturing"
  - `copy(string)` copy data from browser dev console
	- Add `console.log(arguments)` in the first line of function
	- Wrap with JSON.stringify to add surrounding quotes e.g. `console.log(JSON.stringify(sentence));`
```javascript
function contextCapturer(fun) {
  return (...args) => {
    args.forEach((arg) => console.log(JSON.stringify(arg)))
    return fun(...args)
  }
}

function test(a,b,c) {
  return a+b*c
}

testA = contextCapturer(test)
testA(1,2,3)
1
2
3

=> 7
```
- `JSON.stringify(data, null, 2)` specify the number of characters to use for indentation
- #regex \b : word boundary, use to perform prefix matching (i.e. `^` but locally)

## Appendix A
- DOP Mind map
  - Data
    - Representation
      - Generic
        - Mutable
        - ~~Immutable~~
      - ~~Specific~~
    - Schema
  - Code
    - Functional Programming
    - Object-Oriented Programming
- Data Entities has Association & Composition relations
- Code Entities (Modules) has Dependency & Inheritance relations
- Price of using DOP
  - Principle #1 - Separate Code From Data
    - No control on what code can acccess what data
    - No packaging
    - More entities to build
  - Principle #2 - Represent Data With Generic Data Structures
    - Slight performance hit
    - No data schema
    - No compile time data type checks
    - Type casting may be needed for some statically-typed languages
  - Principle #3 - Data Is Immutable
    - Performance hit
    - Need library for Persistent Data Structure
  - Principle #4 - Separate Data Schema from Data Representation
    - Weak connection between data and its schema
    - Slight performance hit

## Appendix C
- Data Oriented Programming != Data Oriented Design != Data Driven Programming