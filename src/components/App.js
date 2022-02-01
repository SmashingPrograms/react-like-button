import { useState } from 'react';
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0);

  const numCount = () => {
    setCount(count + 1);
  };
  
  return (
    <LikeButton numCount={numCount} count={count} />
  );
};

export default App;