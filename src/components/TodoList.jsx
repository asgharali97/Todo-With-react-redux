import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../features/todoSlice";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState();

  const editTodo = (todo) => {
    dispatch(updateTodo(todo));
    console.log(todo);
  };
  return (
    <>
    {todos.map((todo)=>(
      <div  key={todo.id} className="flex border border-black/10 text-gray-400 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 bg-[#393a34]">
        <input
          type="text"
          className={`border outline-none w-full bg-[#393a34] rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } `}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {todo.text}
        <button onClick={() => {
            if (isTodoEditable) {
              editTodo(todo.id);
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}>
             <CiEdit className="inline-flex text-3xl justify-center items-center  disabled:opacity-50 cursor-pointer " />
        </button>
        <button>
        <MdDelete
          onClick={() => dispatch(removeTodo(todo.id))}
          className="inline-flex text-3xl justify-center items-center  disabled:opacity-50 cursor-pointer"
          />
          </button>
      </div>
        ))}
    </>
  );
};

export default TodoList;

{
  /*    <div>Todos</div>
{todos.map((todo) => (
  <ul className="list-none">
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className='text-white'>{todo.text}</div>
          <button
           onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
          </button>
          {/* <input type="text" onChange={(e)=> setEdit(e.target.value)} readOnly={!edit}/> */
}
//       <button onClick={()=> editTodo(todo.id)}>
//         Edit
//       </button>
//     </li>
// </ul>
//   ))}
