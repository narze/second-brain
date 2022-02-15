---
title: "Chaining GraphQL queries"
---

(ref: https://stackoverflow.com/questions/49317582/how-to-chain-two-graphql-queries-in-sequence-using-apollo-client/49320606#49320606)

The props added by your `firstQuery` component will be available to the component below (inside) it, so you can do something like:

```
export default compose(
  graphql(firstQuery, {
    name: 'firstQuery'
  }),
  graphql(secondQuery, { 
    name: 'secondQuery',
    skip: ({ firstQuery }) => !firstQuery.data,
    options: ({firstQuery}) => ({
      variables: {
          var1: firstQuery.data.someQuery.someValue
      }
    })
  })
)(withRouter(TestPage))
```

Notice that we use `skip` to skip the second query unless we actually have data from the first query to work with.

### Using the Query Component

If you're using the `Query` component, you can also utilize the `skip` property, although you also have the option to return something else (like `null` or a loading indicator) inside the first render props function:

```
<Query query={firstQuery}>
  {({ data: { someQuery: { someValue } = {} } = {} }) => (
    <Query
      query={secondQuery}
      variables={{var1: someValue}}
      skip={someValue === undefined}
    >
      {({ data: secondQueryData }) => (
        // your component here
      )}
</Query>
```

### Using the useQuery Hook

You can also use `skip` with the `useQuery` hook:

```
const { data: { someQuery: { someValue } = {} } = {} } = useQuery(firstQuery)
const variables = { var1: someValue }
const skip = someValue === undefined
const { data: secondQueryData } = useQuery(secondQuery, { variables, skip })
```

### Mutations

Unlike queries, mutations involve specifically calling a function in order to trigger the request. This function returns a Promise that will resolve with the results of the mutation. That means, when working with mutations, you can simply chain the resulting Promises:

```
const [doA] = useMutation(MUTATION_A)
const [doB] = useMutation(MUTATION_B)

// elsewhere
const { data: { someValue } } = await doA()
const { data: { someResult } } = await doB({ variables: { someValue }
```