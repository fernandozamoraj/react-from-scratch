import axios from 'axios';
import { FETCH_TODOS } from './types';

export const fetchTodos = () => dispatch =>{

    axios.get("./todos.json")
    .then((response)=>{
      
      console.log(response);
      console.log(response.data);
      dispatch({
          type: FETCH_TODOS,
          payload: [...response.data]
      })
    })
    .catch(error => {
      console.log("Error fetching ");
      console.log(error);
    });
}