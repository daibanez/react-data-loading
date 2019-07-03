
# React Data Loading

Just a spike on using some react hooks to inject data into a component.

> i used a higher order component, maybe in the future i will use a custom hook instead? -- TODO

## Summary

I came to the conclusion that it is best to keep the `useEffect` call implementation down to just a single service function call that dispatches actions for our reducer.

Assuming we keep the reducer and service function covered under tests.

We can mock the `useReducer` function to manipulate component state for unit testing the component.

In this way the `useEffect` block is the only thing not directly under test, but its observable outcomes will be verified.
