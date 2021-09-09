import  { useState } from "react";
const useDelete = () => {
  const students = ["Huyen", "Hoa", "Hung", "Long"];
  const [newList, setNewList] = useState(["Huyen", "Hoa", "Hung", "Long"]);

  const deleteStudent = (input) => {
    setNewList(newList.filter((student) => student !== input));
  };
  return [students, newList, deleteStudent];
};

export default useDelete;