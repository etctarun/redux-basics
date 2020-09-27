# react redux boilerplate

```
npm i redux react-redux redux-devtools-extension

```

## --------------store-------------------------

- we need to create store and pass the reducers index file as argument and also redux-devtools-extension as second argument to debug in browser
- import Provider and wrap the full application with it.

```
<Provider store={store}>
      <App />
</Provider>
```

## ---------------actions----------------------

- it will have a index.js file , which will contain the action function of reducers.
- each function will have a type and payload (if we want a argument to be passed)

## -------------reducers----------------------

- it will have individual files for each state and all the states will be combined in index.js(at reducer folder).
- reducer file will have switch cases for every action type that we will define in actions folder.
- switch cases will return what we want to do when action will be called.

## -----------------dispatch---------------------

- this function will be called whenever we want to apply a function in any component and a action function will be passed as argument to do that action.
- import { useSelector, useDispatch } from "react-redux";

```
<button onClick={() => dispatch(increment(5))}> + </button>

```

## ------------------etc--------------------------------

- we have to import the action functions from actions folder in the component before using them.
- to use the state in any component, we need to define every state using useSelector.

- Working example in code

```
npm install
npm start
```
