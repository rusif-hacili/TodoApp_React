import { useCallback, useContext, useRef } from 'react';
import style from './css/style.module.css';
import { todoContext } from '../contexts/TodoApp';

function AddTodo() {

    const [state, dispatch] = useContext(todoContext);
    const inpRef = useRef();

    const onSubmit = useCallback(e => {
        e.preventDefault();
        dispatch ({
            type: 'add',
            payload: inpRef.current.value
        })
        
        inpRef.current.value = ''

    }, [])

    return (
        <>
            <form onSubmit={onSubmit} className={style.addTodo}>
                <input type="text" ref={inpRef} placeholder='Add a new task'/>
                <button className={style.addBtn}>Add</button>
            </form>
        </>
    )
}
export default AddTodo;