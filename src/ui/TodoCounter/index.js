import React from 'react';
import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos, loading}) {
    return(
            <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
                Completed {completedTodos} of {totalTodos} Sings</h2>
    );
 }

 export { TodoCounter };


 