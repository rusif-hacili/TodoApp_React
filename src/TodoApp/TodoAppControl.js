import { useContext } from 'react';
import style from './css/style.module.css';
import { Link } from "react-router-dom";
import { todoContext } from '../contexts/TodoApp';

function TodoAppControl({ show, isActive }) {

    const [state, dispatch] = useContext(todoContext);


    const all = () => {
        dispatch({
            type: 'show',
            payload: 'all'
        })
    };

    const active = () => {
        dispatch({
            type: 'show',
            payload: 'active'
        })
    };

    const completed = () => {
        dispatch({
            type: 'show',
            payload: 'completed'
        })
    }

    return (
        <>
            <div className={style.todoAppControl}>

                <button onClick={all} className={state.show === 'all' && style.selected}><Link to="/">All</Link></button>
                <button onClick={active} className={state.show === 'active' && style.selected}><Link to="/active">Active</Link></button>
                <button onClick={completed} className={state.show === 'completed' && style.selected}><Link to="/completed">Completed</Link></button>
                <button><a href="">Remove tasks</a></button>

            </div>
        </>
    )
}
export default TodoAppControl;