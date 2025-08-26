function updateDateTime() {
    // Get the current date and time
    const now = new Date();

    // Format the day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];

    // Format the date
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString('en-US', options);

    // Format the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // Use 12-hour format with AM/PM
    };
    const time = now.toLocaleTimeString('en-US', timeOptions);

    // Combine and display in the widget
    const widget = document.getElementById('datetime-widget');
    if (widget) {
        widget.textContent = `${day}, ${date} at ${time}`;
    }
}

// Call the function once to display the time immediately
updateDateTime();

// Update the time every second to keep it accurate
setInterval(updateDateTime, 1000);
