import React from "react";

//useState => xount
//useState => {count :0};으로 변경하기

export default function Exapmle3() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p> you clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  // function click() {
  //   setState({ count: state.count + 1 });
  // }
  // function click() {
  //   setState((state) => {
  //     return {
  //       count: state.count + 1,
  //     };
  //   });
  // }
  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}
