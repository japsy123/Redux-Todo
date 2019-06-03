function createStore () {
    // 1. the state
    // 2. get the state
    // 3. listen for state
    // 4. update the state


    let state;
    const getState () => state;
    let listener = [];

    const subscribe = (listener) => {

        listener.push(listener)
    }

    return {
        getState,
        subscribe
    }
}