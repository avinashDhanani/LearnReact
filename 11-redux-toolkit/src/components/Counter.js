import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const flagShowCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type : SOME_UNIQUE_IDENTIFIER, payload : 10}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {flagShowCounter ? (
        <div className={classes.value}>{counter}</div>
      ) : (
        <div className={`${classes.value} ${classes.dotMailClass}`}>
          <div className={classes["dot-price"]}></div>
          <div className={classes["dot-price"]}></div>
          <div className={classes["dot-price"]}></div>
        </div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;