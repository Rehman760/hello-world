import React, { useEffect, useState } from 'react';

function EffectCounter() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      document.title = "Times Up!";
    } else {
      document.title = `Countdown: ${count}`;
      const timer = setInterval(() => setCount((prevCount) => prevCount - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [count]);

  return (
    <div>
      {count === 0 ? (
        <h1>Times Up!</h1>
      ) : (
        <button onClick={() => setCount(count - 1)}>Countdown: {count}</button>
      )}
    </div>
  );
}

export default EffectCounter;
