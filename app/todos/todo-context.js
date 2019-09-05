import React, { createContext } from "react";
import { useLocal, useLocalStore } from "mobx-react-lite";
import { getTodos } from "./todo-service";


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
    }
  }));
  return <todoContext.Provider value={store}>{children}</todoContext.Provider>
};

