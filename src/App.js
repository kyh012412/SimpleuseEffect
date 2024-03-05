import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링 될때마다 매번 실행됨
  // 정확하게는 랜더링이 완료된 후에 작동되는 코드임
  useEffect(() => {
    console.log(
      '새로 랜더링이 되서 useEffect로 인해 실행된 로그출력~ count : ' + count
    );
  });

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>{name}</span>
    </div>
  );
}

export default App;
