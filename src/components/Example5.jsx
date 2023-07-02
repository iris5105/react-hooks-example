import React from "react";

export default function Exapmle5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      //cleanup 다음 랜더시에 실행되기 전에 실행되는 내용.
      //componentWillUnmount의 역할을 함.
    };
  }, []);
  React.useEffect(() => {
    console.log("componentDidMoun & componentDidUpdate by count", count);
    return () => {
      //cleanup
      //return 부분이 먼저 실행 되고 useEffect의 console.log가 실행된다.
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p> you clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
