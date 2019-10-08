# Reat-Redux --- setup
To setup React-Redux we need three package
1) React
2) Redux
3) React-Redux

To install React please their official page install-[react](https://create-react-app.dev/).

install redux
```bash
npm install --save redux
```

install react-redux
```bash
npm install --save react-redux
```

On my view there are four major step to connect redux with react.
1) Create a reducer
2) Create store with the help of reducer
3) Then subscribe
4) Dispatch some action

The folder structure of redux as my compatibility
-------------------------------------------------
```text
.
└── Src
    ├── store
        ├── index.js
        ├── reducers
          └── rootReducer.js
        ├── actions
          └── actions.js
```

# Step-1: Create a reducer
A reducer is a pure function which takes two arg state and action. 
```js
const initalState = {
    count: 0
}

const rootReducer = (state=initalState, action) =>{
    switch(action.type){
        case 'ADD':{
            return{
                count: state.count + 1
            }
        }
        case 'SUB':{
            return{
                count: state.count - 1
            }
        }

        default: return state
    }
}

export default rootReducer
```
# Step-2: Create a store with help of reducer
now create the store -- which is index.js
```js
import { createStore, compose } from 'redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
```

# Step-3: combined react-redux
To combined react redux we just need this simple work with our app.js
first import Providor from react-redux and wrap the App with Providor
like
```js
<Provider>
  <div className="App">
    <h1>React redux app</h1>
    <Count />
    <Control />
  </div>
</Provider>
```
we connected react-redux with react.now connect redux with react-redux.
for this we just need to pass store as props to provider
like
```js
<Provider store={ store }></Provider>
```

the whole combination of this code is
```js
import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import Count from './components/Count'
import Control from './components/Control'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <h1>React redux app</h1>
          <Count />
          <Control />
        </div>
      </Provider>
    )
  }
}

export default App;
```
