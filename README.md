# React - React useEffect

useEffect는 크게 2가지 방법으로 쓸 수 있음  
거시적인 형태는 useEffect 매개변수로 함수를 받음

```js
useEffect(() => {
  //작업
});
```

## useEffect에 매개변수가 하나인 형태

```js
useEffect(() => {
  //작업
});
```

- 랜더링 될때 마다 실행됨
- 컴포넌트가 다시 랜더링 될때 실행됨

## useEffect에 매개변수가 두 개인 형태

```js
useEffect(() => {
  //작업
}, [value]);
```

- 컴포넌트가 맨 처음랜더링 될 때 실행됨
- 두번째 매개변수가 바뀔 때마다 실행됨

### 그래서 최초에 한번만 실행하게 하려면 보통 두번째 매개변수로 빈 배열을 넣음

```js
useEffect(() => {
  //작업
}, []);
```

### 어떤 메서드를 정리작업을 하려면 useEffect내에 return으로 메서드를 주면 된다.

```js
useEffect(() => {
  //구독...
  return () => {
    // 구독 해지...
    // 해당 컴포넌트를 언마운트 될 때 작동할 기능들
    // 소멸자 비슷한 느낌?
  };
}, []);
```

참고 자료 링크 :  
[React Hooks에 취한다 - useEffect 깔끔하게 마스터하기 | 리액트 훅스 시리즈](https://www.youtube.com/watch?v=kyodvzc5GHU)
