import { useReducer } from "react";

export default function Example6() {
  //useState에서는 set을 사용했지만
  //useReducer에서는 dispatch를 사용한다.
  //reducer => state를 변경하는 로직이 담겨있는 함수
  //초기에 들어오는 state는 기존의 state값 뒤에는 state에 어떠한 조작을 가하려는
  // action이라는 객체가 들어온다.
  //기존의 state와 action이 들어오면 새로운 객체를 반환해준다.

  const reducer = (state, action) => {
    if (action.type === "PLUS") {
      return {
        count: state.count + 1,
      };
    }
    return state;
  };
  //dispatch => action 객체를 넣어서 실행.
  //reducer에 들어가는 action 객체를 전달

  //action => 보통 객체이고 필수 프로퍼티로 type을 가진다.

  //state객체는 다수의 하위 값을 가질때 사용하면 좋다.
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p> you clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    dispatch({ type: "PLUS" });
  }
}
