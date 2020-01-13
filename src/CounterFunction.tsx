import React, { useState } from "react";

interface Props {
  title1: string;
  title2: string;
}

export default (props: Props): JSX.Element => {
  const [count, setCount] = useState(0);
  const { title1, title2 } = props;
  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);
  return (
    <div>
      <h1>Function Component</h1>
      <h3>{count}</h3>
      <button type="button" onClick={increment}>
        {title1}
      </button>
      <button type="button" onClick={decrement}>
        {title2}
      </button>
    </div>
  );
};
