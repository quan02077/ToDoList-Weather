import clsx from 'clsx'
import styles from './Header.module.scss'

function Header() {
    const classes = clsx(styles.header)
    return (
        <header className={classes}>
            <div className={styles.headerContent}>
                <div className={styles.titleGroup}>
                    <span className={styles.logo}>✦</span>
                    <div>
                        <h1 className={styles.title}>ToDo — Weather</h1>
                        <p className={styles.subtitle}>Thực hành ReactJS</p>
                    </div>
                </div>
                {/* Nút toggle dark mode — logic do bạn tự viết */}
                <button className={styles.darkToggle} aria-label="Chuyển đổi dark mode" title="Dark mode">
                    🌙
                </button>
            </div>
        </header>
    )
}

export default Header