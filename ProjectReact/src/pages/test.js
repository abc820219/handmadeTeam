import React, { createContext} from "react";
const CountContext  = createContext();
// 主要組件
function Example4() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      {/* 傳遞什麼 */}
      <CountContext.Provider value={count}>
        {/* 傳給誰 */}
        <Counter />
      </CountContext.Provider>
    </>
  );
}