import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Content.module.scss'
import ToDoList from './todo'
import Weather from './weather'

function Content() {
    const getNavLinkClass = ({ isActive }) =>
        isActive ? clsx(styles.navPill, styles.navPillActive) : styles.navPill

    return (
        <div className={styles.pageWrapper}>
            {/* ===== PILL NAVIGATION ===== */}
            <nav className={styles.navContainer} aria-label="Điều hướng chính">
                <NavLink to="/todo" className={getNavLinkClass}>
                    📋 To-Do
                </NavLink>
                <NavLink to="/weather" className={getNavLinkClass}>
                    🌤️ Thời Tiết
                </NavLink>
            </nav>

            {/* ===== CONTENT AREA ===== */}
            <main className={styles.contentArea}>
                <Routes>
                    <Route path="/todo" element={<ToDoList />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="*" element={<Navigate to="/todo" replace />} />
                </Routes>
            </main>
        </div>
    )
}

export default Content