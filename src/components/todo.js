import React, {useState} from 'react';



const Todo = (props) =>{

    const {todo} = props;
    const [isChecked, setIsChecked] = useState(todo.completed);
 
    const checkItem = () =>{
        todo.completed = !todo.completed;
        setIsChecked(!isChecked);
        console.log(todo);
    };

    return (
        <React.Fragment>
            <div  >
                <input type="checkbox" id={todo.id} checked={isChecked} onChange={()=>checkItem()} />
                {todo.name}
                
            </div>  

        </React.Fragment>
    );

};

export default Todo;