import React, { useState } from "react";

interface Props {
  pippo: string;
}

export default (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>this is the count: {count}</p>
      <button type="button" onClick={(): void => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
