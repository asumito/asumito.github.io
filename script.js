function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString('en-US', options);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const time = now.toLocaleTimeString('en-US', timeOptions);

    const widget = document.getElementById('datetime-widget');
    if (widget) {
        widget.innerHTML = `${date}<br><strong class="font-bold">${time}</strong>`;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
