import React, { useState, useEffect } from "react";
import {hot} from "react-hot-loader";
import Todos from "./components/todos";
import TodosWithRedux from "./components/todosWithRedux";
import { Provider } from "react-redux";
import "./App.css";
import axios from 'axios';
import store from "./redux/store";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() =>{

      axios.get("./todos.json")
      .then((response)=>{
        
        console.log(response);
        console.log(response.data);
        setTodos([...response.data]);
      })
      .catch(error => {
        console.log("Error fetching ");
        console.log(error);
      });

      /*setTodos([
        {id: 1, name: "item 1", completed: false, description: ""},
        {id: 2, name: "item 2", completed: false, description: ""}        
      ]);*/
    }, []);


  return(
    <Provider store={store}>
     <div className="App">
        <h1> Todos With Hooks </h1>
        <Todos todos={todos} />
        <hr></hr>
        <h1>Todos with Redux</h1>
        <TodosWithRedux />>
      </div>
    </Provider>
 
  );
}

export default hot(module)(App);