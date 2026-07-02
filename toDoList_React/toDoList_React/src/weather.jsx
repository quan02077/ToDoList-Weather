import styles from './weather.module.scss';

function Weather() {
    return (
        <div className={styles.weatherWrapper}>

            {/* ===== CARD TÌM KIẾM ===== */}
            <section className={styles.card} aria-label="Tìm kiếm thời tiết">
                <h2 className={styles.cardTitle}>
                    <span>🌍</span> Tra cứu thời tiết
                </h2>
                <div className={styles.inputGroup}>
                    <input
                        className={styles.searchInput}
                        placeholder="Ví dụ: Ha Noi, Tokyo, London..."
                        aria-label="Nhập tên thành phố"
                    />
                    {/* Logic onClick do bạn tự viết */}
                    <button className={styles.geoBtn} title="Lấy vị trí hiện tại" aria-label="Dùng vị trí hiện tại">
                        📍
                    </button>
                    <button className={styles.searchBtn} aria-label="Tìm kiếm">
                        Tìm kiếm
                    </button>
                </div>

                {/* ===== TÌM KIẾM GẦN ĐÂY ===== */}
                <div className={styles.recentSection}>
                    <p className={styles.recentLabel}>🕐 Gần đây:</p>
                    <div className={styles.recentTags}>
                        {['Ha Noi', 'Tokyo', 'London', 'New York'].map((city) => (
                            <span key={city} className={styles.recentTag}>
                                {city}
                                <button className={styles.tagClose} aria-label={`Xóa ${city}`}>×</button>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TRẠNG THÁI LOADING (UI tĩnh — logic do bạn viết) ===== */}
            {/* Uncomment khi cần xem loading state:
            <div className={styles.loadingCard}>
                <div className={styles.spinner}></div>
                <p>Đang tải dữ liệu thời tiết...</p>
            </div>
            */}

            {/* ===== TRẠNG THÁI LỖI (UI tĩnh — logic do bạn viết) ===== */}
            {/* Uncomment khi cần xem error state:
            <div className={styles.errorCard}>
                <span className={styles.errorIcon}>⚠️</span>
                <div>
                    <p className={styles.errorTitle}>Không tìm thấy thành phố</p>
                    <p className={styles.errorMsg}>Vui lòng kiểm tra lại tên thành phố và thử lại.</p>
                </div>
            </div>
            */}

            {/* ===== CARD THỜI TIẾT HIỆN TẠI ===== */}
            <section className={styles.weatherCard} aria-label="Thời tiết hiện tại">
                <div className={styles.weatherCardTop}>
                    <div className={styles.locationInfo}>
                        <p className={styles.currentLabel}>CURRENT WEATHER</p>
                        <h3 className={styles.cityName}>Ho Chi Minh City</h3>
                        <p className={styles.countryName}>🇻🇳 Việt Nam · UTC+7</p>
                    </div>
                    <div className={styles.weatherIconWrapper}>
                        <div className={styles.weatherIcon}>⛅</div>
                        <span className={styles.conditionBadge}>Partly cloudy</span>
                    </div>
                </div>

                <div className={styles.tempRow}>
                    <h1 className={styles.temperature}>31.2°C</h1>
                    <div className={styles.feelsLike}>
                        <span>Cảm giác như</span>
                        <strong>33°C</strong>
                    </div>
                </div>

                {/* Details grid */}
                <div className={styles.detailsGrid}>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>💧</span>
                        <p className={styles.detailLabel}>Độ ẩm</p>
                        <p className={styles.detailValue}>72%</p>
                    </div>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>💨</span>
                        <p className={styles.detailLabel}>Tốc độ gió</p>
                        <p className={styles.detailValue}>12 km/h</p>
                    </div>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>🌅</span>
                        <p className={styles.detailLabel}>Bình minh</p>
                        <p className={styles.detailValue}>05:42</p>
                    </div>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>🌇</span>
                        <p className={styles.detailLabel}>Hoàng hôn</p>
                        <p className={styles.detailValue}>18:07</p>
                    </div>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>🌡️</span>
                        <p className={styles.detailLabel}>Áp suất</p>
                        <p className={styles.detailValue}>1012 hPa</p>
                    </div>
                    <div className={styles.detailBox}>
                        <span className={styles.detailIcon}>👁️</span>
                        <p className={styles.detailLabel}>Tầm nhìn</p>
                        <p className={styles.detailValue}>10 km</p>
                    </div>
                </div>
            </section>

            {/* ===== DỰ BÁO 5 NGÀY ===== */}
            <section className={styles.forecastSection} aria-label="Dự báo 5 ngày tới">
                <h4 className={styles.forecastTitle}>📅 Dự báo 5 ngày tới</h4>
                <div className={styles.forecastList}>
                    {[
                        { day: 'Hôm nay', icon: '⛅', high: '32°C', low: '25°C', desc: 'Nhiều mây' },
                        { day: 'Thứ Tư',  icon: '🌧️', high: '28°C', low: '23°C', desc: 'Có mưa' },
                        { day: 'Thứ Năm', icon: '🌦️', high: '29°C', low: '24°C', desc: 'Mưa rào' },
                        { day: 'Thứ Sáu', icon: '☀️',  high: '34°C', low: '26°C', desc: 'Nắng đẹp' },
                        { day: 'Thứ Bảy', icon: '🌤️', high: '33°C', low: '25°C', desc: 'Ít mây' },
                    ].map((item, index) => (
                        <div key={index} className={styles.forecastCard}>
                            <p className={styles.forecastDay}>{item.day}</p>
                            <div className={styles.forecastIcon}>{item.icon}</div>
                            <p className={styles.forecastDesc}>{item.desc}</p>
                            <p className={styles.forecastHigh}>{item.high}</p>
                            <p className={styles.forecastLow}>{item.low}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Weather;