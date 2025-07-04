const dateBtn = document.getElementById('date-btn');
const yearBtn = document.getElementById('year-btn');
const exitBtn = document.getElementById('exit-btn');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const dateInput = document.getElementById('date-input');
const yearInput = document.getElementById('year-input');
const fetchBtn = document.getElementById('fetch-btn');
const resultPopup = document.getElementById('result-popup');
const resultContent = document.getElementById('result-content');
const closeResult = document.getElementById('close-result');

let mode = 'date';

dateBtn.onclick = () => {
    popup.classList.remove('hidden');
    dateInput.classList.remove('hidden');
    yearInput.classList.add('hidden');
    popupTitle.textContent = "Enter Date";
    mode = 'date';
};

yearBtn.onclick = () => {
    popup.classList.remove('hidden');
    dateInput.classList.add('hidden');
    yearInput.classList.remove('hidden');
    popupTitle.textContent = "Enter Year";
    mode = 'year';
};

exitBtn.onclick = () => window.location.href = 'index.html';

fetchBtn.onclick = () => {
    let prompt = '';

    if (mode === 'date') {
        const dateVal = dateInput.value;
        if (!dateVal) return alert('Please select a date');
        prompt = `List major space, astronomy, or celestial events for ${dateVal}. Include launches, discoveries, and notable phenomena.`;
    } else {
        const yearVal = yearInput.value;
        if (!yearVal) return alert('Please enter a valid year');
        prompt = `Summarize key space exploration events, astronomical discoveries, and rocket launches in the year ${yearVal}. Month-wise preferred.`;
    }

    resultContent.innerHTML = '<p><strong>Loading...</strong></p>';
    resultPopup.classList.remove('hidden');
    popup.classList.add('hidden');

    fetch("/api/calendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            resultContent.innerHTML = `<p><strong>AstroBot:</strong> ${data.error}</p>`;
        } else {
            const reply = data.reply || "No response received.";
            resultContent.innerHTML = `<p><strong>Events:</strong><br>${reply}</p>`;
        }
    })
    .catch(err => {
        console.error(err);
        resultContent.innerHTML = `<p><strong>Error:</strong> Unable to fetch events from AstroBot.</p>`;
    });
};

closeResult.onclick = () => resultPopup.classList.add('hidden');
