import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const GorevleriGoster = ({ todos, setTodos }) => {
  //!deleteTodo fonksiyonuna asagidan h3 ün icindeki x isaretine click olayindan id gönderdik. "todo.id" yi "rmv" ile karsiladik, o yüzden rmv .id degil rmv yazdik.
  const deleteTodo = (rmv) => {
    //!uzun yol:
    // todos = todos.filter((i) => i.id !== rmv);
    // setTodos(todos);

    //!kisa yol:
    setTodos(todos.filter((i) => i.id !== rmv));
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            className={todo.isDone ? "done" : "gorev"}
            onDoubleClick={() =>
              setTodos(
                todos.map((a) =>
                  a.id === todo.id ? { ...a, isDone: !a.isDone } : a
                )
              )
            }
          >
            <h3>
              {todo.text} <FaTimesCircle onClick={() => deleteTodo(todo.id)} />{" "}
            </h3>
            <h6>{todo.day} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
