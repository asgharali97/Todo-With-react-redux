import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-[#1E201E] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-white text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <AddTodo />
            </div>
            <div className="flex flex-wrap gap-y-3">
              <div className="w-full">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
