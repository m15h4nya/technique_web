import { useState } from 'react';

export default function HeaderName() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <CurrentName count={count} onClick={handleClick} />
      <CurrentName count={count} onClick={handleClick} />
    </div>
  );
}

function CurrentName({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
