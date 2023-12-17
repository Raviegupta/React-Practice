import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  useEffect(() => {
    console.warn("useEffect is called");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>UseEffectHook in practice</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
};

export default UseEffectHook;
