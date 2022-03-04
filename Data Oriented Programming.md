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