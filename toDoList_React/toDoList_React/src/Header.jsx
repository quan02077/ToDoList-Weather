import clsx from 'clsx'
import styles from './Header.module.scss'
function Header() {
    const classes = clsx(styles.header)
    return (
        <div className={classes}>
            <h1>ToDo App</h1>
            <p>App được tạo ra với mục đích thực hành trong quá trình học ReactJS</p>
        </div>
    )
}

export default Header