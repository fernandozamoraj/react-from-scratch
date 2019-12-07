import React, { useState, useEffect } from "react";
import {hot} from "react-hot-loader";
import Todos from "./components/todos";
import "./App.css";
import axios from 'axios';

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
    <div className="App">
      <h1> Hello, World! </h1>
      <Todos todos={todos} />>
    </div>
  );
}

export default hot(module)(App);