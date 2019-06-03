function todos (state = [], action) {
    if (action.type === 'ADD_TODO') {
      return state.concat([action.todo])
    }
  
    return state
  }

function createStore (reducer) {
    // 1. the state
    // 2. get the state
    // 3. listen for state
    // 4. update the state


    let state;
    const getState () => state;
    let listeners = [];

    const subscribe = (listener) => {

        listeners.push(listener)

        return () => {
            listeners = listeners.filter( (l) => l !== listener)
        }
    }

    function dispatch(action) {
        state = reducer(state,action)
        listeners.forEach((l)=> l())
    }
    return {
        getState,
        subscribe
    }
}

const store = createStore()

const unsubscribe = store.subscribe(function () {
    console.log("state called")
})

unsubscribe();