// ========================================================
// 1. SELECTORS
// ========================================================
const container = document.getElementById("shayari-container");
const searchInput = document.getElementById("searchInput");

// ========================================================
// 2. DISPLAY SHAYARI (Search & All)
// ========================================================
function displayShayari(searchText = "") {
    if (!container) return; // Agar container nahi hai, toh stop
    
    container.innerHTML = '<h2 class="section-title">Search Results</h2><div class="shayari-grid"></div>';
    const grid = container.querySelector('.shayari-grid');

    const filteredShayari = shayariData.filter(s => 
        s.title.toLowerCase().includes(searchText.toLowerCase())
    );

    filteredShayari.forEach(s => {
        grid.innerHTML += `
            <div class="shayari-card">
                <h3>${s.title}</h3>
                <p class="shayari-text">"${s.text}"</p>
                <div class="card-meta">
                    <strong>Vol: ${s.volume}</strong> | 
                    <span>${Array.isArray(s.topics) ? s.topics.join(", ") : s.topics}</span>
                </div>
            </div>
        `;
    });
}

// ========================================================
// 3. VOLUME FILTER FUNCTION (For Each Volume)
// ========================================================
function displayVolumeShayari(volumeNumber) {
    if (!container) return;
    
    container.innerHTML = `<h2 class="section-title">Volume ${volumeNumber}</h2><div class="shayari-grid"></div>`;
    const grid = container.querySelector('.shayari-grid');

    // Sirf us volume ka data filter karein
    const filteredShayari = shayariData.filter(s => String(s.volume) === String(volumeNumber));

    if (filteredShayari.length === 0) {
        grid.innerHTML = `<p style="color: #bbb; grid-column: 1/-1; text-align: center; padding: 20px;">Is Volume mein abhi koi shayari nahi hai.</p>`;
        return;
    }

    filteredShayari.forEach(s => {
        grid.innerHTML += `
            <div class="shayari-card">
                <h3>${s.title}</h3>
                <p class="shayari-text">"${s.text}"</p>
            </div>
        `;
    });
}

// ========================================================
// 4. TOPIC FILTER FUNCTION (Including All Topics)
// ========================================================
function displayTopicShayari(topicName) {
    if (!container) return;
    
    container.innerHTML = `<h2 class="section-title">Topic: ${topicName.toUpperCase()}</h2><div class="shayari-grid"></div>`;
    const grid = container.querySelector('.shayari-grid');

    // Filter shayaris where topics array includes the topicName
    const filteredShayari = shayariData.filter(s => {
        if (Array.isArray(s.topics)) {
            return s.topics.some(t => t.toLowerCase() === topicName.toLowerCase());
        } else if (typeof s.topics === 'string') {
            return s.topics.toLowerCase() === topicName.toLowerCase();
        }
        return false;
    });

    if (filteredShayari.length === 0) {
        grid.innerHTML = `<p style="color: #bbb; grid-column: 1/-1; text-align: center; padding: 20px;">Is topic mein abhi koi shayari nahi hai.</p>`;
        return;
    }

    filteredShayari.forEach(s => {
        grid.innerHTML += `
            <div class="shayari-card">
                <h3>${s.title}</h3>
                <p class="shayari-text">"${s.text}"</p>
            </div>
        `;
    });
}

// ========================================================
// 5. RECENT 15 SHAYARI
// ========================================================
function loadRecentShayari() {
    if (!container) return;
    
    container.innerHTML = '<h2 class="section-title">Latest 15 Shayari</h2><div class="shayari-grid"></div>';
    const grid = container.querySelector('.shayari-grid');

    const sortedShayari = [...shayariData].sort((a, b) => new Date(b.date) - new Date(a.date));
    const recentShayari = sortedShayari.slice(0, 15);

    recentShayari.forEach(s => {
        grid.innerHTML += `
            <div class="shayari-card">
                <h3>${s.title}</h3>
                <p class="shayari-text">"${s.text}"</p>
                <small style="color: #666;">${s.date}</small>
            </div>
        `;
    });
    container.scrollIntoView({ behavior: 'smooth' });
}

// ========================================================
// 6. WEBSITE AGE TRACKER
// ========================================================
function calculateWebsiteAge() {
    const startDate = new Date('2025-11-01');
    const currentDate = new Date();
    let diffInMs = currentDate - startDate;
    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) { months--; const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); days += prevMonth; }
    if (months < 0) { years--; months += 12; }

    if(document.getElementById('count-years')) {
        document.getElementById('count-years').innerText = years;
        document.getElementById('count-months').innerText = months;
        document.getElementById('count-days').innerText = days;
        document.getElementById('count-total-days').innerText = totalDays;
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    calculateWebsiteAge();
    if(searchInput) {
        searchInput.addEventListener("input", (e) => displayShayari(e.target.value));
    }
});