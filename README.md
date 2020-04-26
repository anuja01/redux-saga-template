This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Redux

# Dependancies
```npm install redux```

```npm install react-redux```

```npm install --save-dev redux-devtools```

Notes:   
### Redux is a predictable state container

## Provider
React Redux provides ```<Provider />```, which makes the Redux store available to the rest of your app

## connect()
React Redux provides a ```connect``` function for you to connect your component to the store.
With React Redux, your components never access the store directly - ```connect``` does it for you.

## ```mapStateToProps```
 used for selecting the part of the data from the store that the connected component needs - data is available with props
 
 (get data from store)

## ```mapDispatchToProps```
used for dispatching actions to the Redux store. This is the only way to trigger a state change

(change store data)

complete sample: https://codesandbox.io/s/todo-app-with-redux-4mjbs

### Three main principles of Redux.  
   1. Single source of truth - The state of whole application is stored in an object tree within a single store.   
   2. State is read-only - The only way to change the state is to emit an action, an object describing what happened.   
   3. Changes are mode with pure functions - To specify how the state tree is transformed by actions, you write pure reducers.   (Reducers takes the previous state and an action and return the new state)   
   
### Selectors in redux.  
Selecto takes state as an argument and used to filter out values from state as necessary to use in a component.   

More Questions and answers: https://www.fullstacktutorials.com/interviews/redux-interview-questions-and-answers-33.html

