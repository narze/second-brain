---
title: "Data Oriented Programming"
author: "Yehonathan Sharvit"
tags:
- #Book
---

# Summary
TBA

## Chapter 1
- Complexity of OOP
	- Code and data is mixed
	- Data is locked in objects
	- Code is locked in classes

## Chapter 2
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
## Chapter 3
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

## Chapter 4
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
	```
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

## Chapter 5
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

## Chapter 6
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