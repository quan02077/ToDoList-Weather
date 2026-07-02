import clsx from 'clsx'
import styles from './todo.module.scss'
function ToDoList() {
    const classes = clsx('container', 'mt-4')
    return (
        <div>
            <div className={classes}>
                <h4>Thêm công việc mới tại đây!!!</h4>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder="Nhập công việc của bạn..."
                    />
                    <button className={styles.button}>Thêm</button>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <table className={styles.tableJob}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên công việc</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Học CSS và React</td>
                            <td>Chưa hoàn thành</td>
                            <td>
                                <button className={styles.btnComplete}>👌</button>
                                <button className={styles.btnEdit}>🖋️</button>
                                <button className={styles.btnDelete}>🗑️</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-5 d-flex justify-content-center mb-5">
                <div className="progress" role="progressbar" aria-label="Tiến độ" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '800px', height: '25px' }}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: '50%' }}>
                        50%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList