import "./App.css";
import { useState } from "react";
import useDelete from "./hooks/useDelete";

function App() {
  const [students, newList, deleteStudent] = useDelete();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="main">
      学生一覧：[{students.join(", ")}] <br /> <br />
      削除する名前を入力してください。
      <br /> <br />
      <input type="text" value={input} onChange={handleChange} /> <br /> <br />
      <button
        onClick={() => {
          deleteStudent(input);
        }}
      >
        確定
      </button>
      <br /> <br />
      削除する名前: {input} <br /> <br />
      新しいー覧：[{newList.join(", ")}]
    </div>
  );
}

export default App;