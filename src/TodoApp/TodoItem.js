import { useCallback, useContext, useRef } from 'react';
import style from './css/style.module.css';
import { todoContext } from '../contexts/TodoApp';

function TodoItem({ id, task, isActive, isEditable }) {

    const [state, dispatch] = useContext(todoContext);
    const inpRef = useRef();


  
  
    const complete = useCallback(() => {
        dispatch({
            type: 'complete',
            payload: id
        })
    }, []);

    const uncomplete = useCallback(() => {
        dispatch({
            type: 'uncomplete',
            payload: id
        })
    }, []);

    const edit = useCallback(() => {
        dispatch({
            type: 'open_edit_form',
            payload: id
        })
    }, [])

    const cancel = useCallback(() => {
        dispatch({
            type: 'close-edit-form',
            payload: id
        })
    }, [])

    const removeTask = useCallback(() => {

        if (!window.confirm('Are you sure?')) {
            return state;
        }
        dispatch({
            type: 'remove',
            payload: id
        })
    }, [])


    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'save_change',
            payload: {
                id,
                task: inpRef.current.value
            }
        })
    }


    if (isEditable) {
        return (
            <>
                <div className={style.todoItemEditable}>
                    <form onSubmit={onSubmit}>
                        <input type="text" defaultValue={task} ref={inpRef} />
                        <div className={style.editBtn}>
                            <button className={style.saveBtn} type='submit'>Save</button>
                            <button className={style.cancelBtn} type='button' onClick={cancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`${style.todoItem} ${!isActive && style.isNotActive}`}>
                <h2>{task}</h2>
                <div className={`${style.btn} ${!isActive && style.isNotActive}`}>
                    <button onClick={isActive ? complete : uncomplete}>{isActive ? 'Complete' : 'Uncomplete'}</button>
                    <button onClick={edit}>Edit</button>
                    <button className={style.redBtn} onClick={removeTask}>Delete</button>
                </div>
            </div>
        </>
    )
}
export default TodoItem;