import style from './css/style.module.css';

function TodoApp({ children }) {
    return (
        <>
            <div className={style.todoApp}>
                {children}
            </div>
        </>
    )
}
export default TodoApp;