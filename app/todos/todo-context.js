import React, { createContext } from "react";
import { useLocal, useLocalStore } from "mobx-react-lite";
import { getTodos, getTodoById, deleteTodo, postTodo } from "./todo-service";


export const todoContext = createContext();
export const TodoProvider = ({ children }) => {

  //Provides store and cruds  
  const store = useLocalStore(() => ({
    //Observables
    todos: [],
    todo: {
      id: "",
      title: ""
    },
    isLoading: false,
    error: "",

    //Actions
    async getTodos() {
      store.isLoading = true;
      try {
        //const {data} = await getTodos();
        //store.todos = data;
        store.todos = (await getTodos()).data;
      } catch (e) {
        alert(e.message);
      }
      store.isLoading = false;
    },
    async getTodo(id) {
      store.isLoading = true;
      try {
        //const {data} = await getTodos();
        //store.todos = data;
        store.todo = (await getTodoById(id)).data;
      } catch (e) {
        alert(e.message);
      }
      store.isLoading = false;
    },
    async postTodo(todo){
      store.isLoading = true;
      try {
        //const {data} = await getTodos();
        //store.todos = data;
        const {data: addedTodo} = await postTodo(todo);
        const newSetOfTodos = [...todos, addedTodo];
        todos = newSetOfTodos;
      } catch (e) {
        alert(e.message);
      }
      store.isLoading = false;
    },
    async deleteTodo(id){
      store.isLoading = true;
      try {
        //const {data} = await getTodos();
        //store.todos = data;
        await deleteTodo(id);
        const newSetOfTodos = todos.filter(todo => todo.id !== id);
        todos = newSetOfTodos;
      } catch (e) {
        alert(e.message);
      }
      store.isLoading = false;
    }
  }));
  return <todoContext.Provider value={store}>{children}</todoContext.Provider>
};

