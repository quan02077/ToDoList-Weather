import { NavLink, Routes, Route } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Content.module.scss'
import ToDoList from './todo'
import Weather from './weather'

function Content() {
    const classes = clsx(styles.content, 'container', 'mt-4')
    const navClasses = clsx(styles.navbar)
    const getNavLinkClass = ({ isActive }) => isActive ? styles.active : ''

    return (
        <div className={classes}>
            <nav className={navClasses}>
                <ul>
                    <li>
                        <NavLink to="/todo" className={getNavLinkClass}>
                            ToDoList
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/weather" className={getNavLinkClass}>
                            Weather
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="mt-4 p-4 text-center">
                <Routes>
                    <Route path="/todo" element={<ToDoList />} />
                    <Route path="/weather" element={<Weather />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content