function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

    // تغيير الخلفية بلون عشوائي
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

setInterval(updateClock, 1000);
updateClock();
