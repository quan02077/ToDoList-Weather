// Weather
// Logic fetch API sẽ được viết ở đây sau.

async function fetchData(event) {
    const searchBtn = document.getElementById('searchBtn');
    const cityInputElement = document.getElementById('cityInput');
    const weatherCard = document.getElementById('weatherCard');
    const errorMessage = document.getElementById('errorMessage');

    try {
        if (event) {
            event.preventDefault();
        }

        const cityInput = cityInputElement.value.toLowerCase().trim();

        if (!cityInput) {
            errorMessage.textContent = 'Vui lòng nhập tên thành phố.';
            return;
        }

        searchBtn.disabled = true;
        cityInputElement.disabled = true;
        searchBtn.textContent = 'Loading...';
        errorMessage.textContent = 'Đang tìm dữ liệu thời tiết...';
        weatherCard.classList.add('is-loading');

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=919a27b590f2470fa57133833261906&q=${encodeURIComponent(cityInput)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data.');
        }

        const data = await response.json();
        const cityName = document.getElementById('cityName');
        const temperature = document.getElementById('temperature');
        const condition = document.getElementById('weatherDesc');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');
        const weatherIcon = document.getElementById('weatherIcon');

        errorMessage.textContent = '';
        cityName.textContent = data.location.name;
        temperature.textContent = data.current.temp_c + '°C';
        condition.textContent = data.current.condition.text;
        humidity.textContent = 'Độ ẩm: ' + data.current.humidity + '%';
        windSpeed.textContent = 'Tốc độ gió: ' + data.current.wind_kph + ' km/h';
        weatherIcon.src = 'https:' + data.current.condition.icon;
        weatherIcon.alt = data.current.condition.text;
    }
    catch (error) {
        errorMessage.textContent = 'Không thể lấy dữ liệu thời tiết. Vui lòng thử lại.';
        console.error('Error fetching weather data:', error);
    }
    finally {
        searchBtn.disabled = false;
        cityInputElement.disabled = false;
        searchBtn.textContent = 'Search';
        weatherCard.classList.remove('is-loading');
    }
}
