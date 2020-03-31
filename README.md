This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Redux

# Dependancies
```npm install redux```

```npm install react-redux```

```npm install --save-dev redux-devtools```

Note:
## Provider
React Redux provides ```<Provider />```, which makes the Redux store available to the rest of your app

## connect()
React Redux provides a ```connect``` function for you to connect your component to the store.
With React Redux, your components never access the store directly - ```connect``` does it for you.

## ```mapStateToProps```
 used for selecting the part of the data from the store that the connected component needs
 
 (get data from store)

## ```mapDispatchToProps```
used for dispatching actions to the Redux store. This is the only way to trigger a state change

(change store data)
