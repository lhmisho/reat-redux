import React from 'react';
import { createStore } from 'redux'
import './App.css';

class App extends React.Component {
  render() {

    // A reducer function must have two parameters(state, actions)
    // State(Current state if has else empty object, initial state something like that)
    // Action must have a type property {type: 'something/action_name', payload: ''}

    const reducer = (state = {}, action) =>{
      if(action.type === "A"){
        return{
          ...state, // if we don't want to override the prev state
          A: "I am A"
        }
      }
      if(action.type === "B"){
        return{
          ...state,
          B: "I am B"
        }
      }
      return state
    }

    // creting a store using reducer
    const store = createStore(reducer)

    // now we can subscribe
    store.subscribe(() => {
      console.log(store.getState().A)
    })

    store.subscribe(() => {
      console.log(store.getState().B)
    })

    // now dispatch 
    store.dispatch({type: "B"})
    store.dispatch({type: "something"})
    store.dispatch({type: "A"})
    store.dispatch({type: "something"})

    return (
      <div className="App">
        <h1>React redux app</h1>
      </div>
    )
  }
}

export default App;
