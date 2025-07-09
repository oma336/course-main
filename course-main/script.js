
// عرض تاريخ اليوم
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("dateBox").innerText = today.toLocaleDateString('ar-EG', options);

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // ضع مفتاح API الخاص بك هنا
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const result = `
      <p><strong>المدينة:</strong> ${data.name}</p>
      <p><strong>درجة الحرارة:</strong> ${data.main.temp}°C</p>
      <p><strong>الوصف:</strong> ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } else {
    document.getElementById("weatherResult").innerHTML = "مشمس";
  }
}
