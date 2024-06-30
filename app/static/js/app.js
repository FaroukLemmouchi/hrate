//
// Dark mode
//
const nightModeToggle = document.getElementById('night-mode-toggle');

document.addEventListener('DOMContentLoaded', (event) => {

    nightModeToggle.addEventListener('change', () => {
        if (nightModeToggle.checked === true) {
            document.body.classList.add('night-mode');

        } else {
            document.body.classList.remove('night-mode')
        }
        localStorage.setItem('nightModeStatus', nightModeToggle.checked);
    });

});

// Apply the night mode status on page load
if (nightModeStatus === true) {
    document.body.classList.add('night-mode');
    nightModeToggle.checked = true
} else {
    document.body.classList.remove('night-mode')
    nightModeToggle.checked = false

}


//
// Service worker
//
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/js/service-worker.js')
        .then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
}