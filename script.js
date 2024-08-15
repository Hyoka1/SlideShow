const images = document.querySelectorAll("#container img");
let currentIndex = 0;

function showImage(index) {
    console.log('Showing image at index:', index); // Debugging
    images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
}

function startSlideshow() {
    console.log('Starting slideshow'); // Debugging
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000); // 5 seconds
}

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
    
    document.getElementById("time").innerText = time;
    document.getElementById("day").innerText = day;
}

function updateWeather() {
    // Replace with your weather API integration
    const weather = "Sunny 25°C"; // Example static weather
    document.getElementById("weather").innerText = weather;
}

document.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex);
    startSlideshow();
    updateTime();
    updateWeather();
    setInterval(updateTime, 1000); // Update time every second
});
