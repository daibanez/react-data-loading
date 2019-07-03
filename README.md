
Just a spike on using some react hooks to inject data into a component.

> i used a higher order component, maybe in future use a custom hook instead?

basically learned to keep use effect call implementation down to just a  service function call that dispatches actions for our reducer.

keep the reducer and service function covered under tests.

and we can mock the useReducer function to manipulate component state for unit testing the component.

in this way the useEffect block is the only thing not directly under test, but its observable outcomes will be verified.
