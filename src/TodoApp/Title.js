import style from './css/style.module.css';

function Title({ children }) {
    return (
        <>
            <div className={style.title}>
                {children}
            </div>
        </>
    )
}
export default Title;