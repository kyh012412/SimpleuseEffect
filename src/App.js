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
  useEffect(() => {
    console.log('매번 랜더링 1');
  }); // 두번째 매개변수가 없어서 매번 실행됨

  // 마운팅 + count가 변화할 때 마다 실행됨
  useEffect(() => {
    console.log('랜더링 2 count : ' + count);
  }, [count]); //count가 바뀔때마다 실행됨

  // 마운팅 + name이 변화할 때 마다 실행됨
  useEffect(() => {
    console.log('랜더링 3 name : ' + name);
  }, [name]); //name이 바뀔때마다 실행됨

  // 마운팅할때만 실행됨
  useEffect(() => {
    console.log('랜더링 4 empty');
  }, []); // 최초 1회만 실행됨

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
