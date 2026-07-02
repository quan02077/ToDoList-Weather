import clsx from 'clsx'
import styles from './todo.module.scss'

function ToDoList() {
    return (
        <div className={styles.todoWrapper}>

            {/* ===== CARD: THÊM CÔNG VIỆC ===== */}
            <section className={styles.card} aria-label="Thêm công việc mới">
                <h2 className={styles.cardTitle}>
                    <span className={styles.cardIcon}>✏️</span>
                    Thêm công việc mới
                </h2>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder="Nhập công việc của bạn..."
                        aria-label="Nhập công việc"
                    />
                    <button className={styles.addButton} aria-label="Thêm công việc">
                        + Thêm
                    </button>
                </div>
            </section>

            {/* ===== TOOLBAR: SEARCH + FILTER + SORT ===== */}
            <div className={styles.toolBar}>
                {/* Search */}
                <div className={styles.searchBox}>
                    <span className={styles.searchIcon} aria-hidden="true">🔍</span>
                    <input
                        className={styles.searchInput}
                        placeholder="Tìm kiếm công việc..."
                        aria-label="Tìm kiếm công việc"
                    />
                </div>

                <div className={styles.toolBarRight}>
                    {/* Filter */}
                    <div className={styles.filterGroup} role="group" aria-label="Lọc theo trạng thái">
                        <button className={clsx(styles.filterBtn, styles.filterActive)}>Tất cả</button>
                        <button className={styles.filterBtn}>✅ Hoàn thành</button>
                        <button className={styles.filterBtn}>⏳ Chưa xong</button>
                    </div>

                    {/* Sort */}
                    <select className={styles.sortSelect} aria-label="Sắp xếp công việc">
                        <option value="">↕ Sắp xếp</option>
                        <option value="az">A → Z</option>
                        <option value="za">Z → A</option>
                        <option value="newest">Mới nhất</option>
                        <option value="oldest">Cũ nhất</option>
                    </select>
                </div>
            </div>

            {/* ===== BẢNG DANH SÁCH CÔNG VIỆC ===== */}
            <section className={styles.card} aria-label="Danh sách công việc">
                <div className={styles.tableWrapper}>
                    <table className={styles.tableJob}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên công việc</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Học CSS và React</td>
                                <td><span className={styles.statusBadgePending}>⏳ Chưa xong</span></td>
                                <td>
                                    <div className={styles.actionGroup}>
                                        <button className={clsx(styles.actionBtn, styles.btnComplete)} title="Hoàn thành">👌</button>
                                        <button className={clsx(styles.actionBtn, styles.btnEdit)} title="Sửa">🖋️</button>
                                        <button className={clsx(styles.actionBtn, styles.btnDelete)} title="Xóa">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tập thể dục buổi sáng</td>
                                <td><span className={styles.statusBadgeDone}>✅ Hoàn thành</span></td>
                                <td>
                                    <div className={styles.actionGroup}>
                                        <button className={clsx(styles.actionBtn, styles.btnComplete)} title="Hoàn thành">👌</button>
                                        <button className={clsx(styles.actionBtn, styles.btnEdit)} title="Sửa">🖋️</button>
                                        <button className={clsx(styles.actionBtn, styles.btnDelete)} title="Xóa">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ===== PROGRESS BAR ===== */}
            <section className={styles.progressCard} aria-label="Tiến độ hoàn thành">
                <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>📊 Tiến độ hoàn thành</span>
                    <span className={styles.progressCount}>1 / 2 công việc</span>
                </div>
                <div
                    className={styles.progressTrack}
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="50% hoàn thành"
                >
                    <div className={styles.progressFill} style={{ width: '50%' }}>
                        <span className={styles.progressPercent}>50%</span>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ToDoList