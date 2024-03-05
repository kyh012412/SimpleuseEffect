import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  // 랜더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log(
      '새로 랜더링이 되서 useEffect로 인해 실행된 로그출력~ count : ' + count
    );
  });

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
    </div>
  );
}

export default App;
