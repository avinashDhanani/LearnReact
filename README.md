<h1>08-working-with-forms</h1>
<div>
  <p>Desc for this module</p>
  <ul>
    <li>creating custom hooks and provide validation</li>
    <li>learn custom hooks. (create custom hook call useInput)</li>
    <li>apply concept of useReducer. (useReducer : better state management tool than useState)</li>
  </ul>
</div>

<h1>09-food-order</h1>
<div>
  <p>Desc for this module</p>
  <ul>
    <li>use firebase as db</li>
    <li>use concept useContext and form validation</li>
    <li>useContext, fetch api</li>
  </ul>
</div>

<h1>10-redux-core</h1>
<div>
  <p>Desc for this module</p>
  <ul>
    <li>createStore :: create redux store</li>
    <li>reducer funtion :: to change redux store data</li>
    <li>subscriber :: subscribe redux store.</li>
    <li>dispatch :: change redux store value</li>
  </ul>
  <p>example</p>
  <div
    class="highlight highlight-source-js notranslate position-relative overflow-auto"
    dir="auto"
  >
    <pre>
      // store reducer
      const counterReducer = (state = { counter: 0 }, action) => {
        if (action.type == "increment") {
          return {
            counter: state.counter + 1,
          };
        }
        return state;
      };

      // create store
      const store = redux.createStore(counterReducer);

      const counterSubscriber = () => {
        const latestState = store.getState();
        console.log("latestState : ", latestState);
      };

      // store subscriber
      store.subscribe(counterSubscriber);

      // dispatch :: change store data
      store.dispatch({ type: "increment" });
    </pre>

  </div>
</div>
