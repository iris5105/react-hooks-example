import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");

  //map을 통해서 l(왼쪽값) r(오른쪽값)을 더하기.
  return persons.map((persons) => persons.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    {
      name: "Mark",
      age: 39,
    },
    {
      name: "Hanna",
      age: 28,
    },
  ]);
  //useMemo는 persons가 변경 될때만 실행시켜준다
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
