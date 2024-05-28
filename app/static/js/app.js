const ctx = document.getElementById('liveChart').getContext('2d');
const data = {
    labels: [],
    datasets: [{
        label: 'Live Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
};

const liveChart = new Chart(ctx, config);

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function getRandomData() {
    return Math.floor(Math.random() * 100);
}

let time = 0;
setInterval(() => {
    addData(liveChart, time, getRandomData());
    time += 1;
}, 1000);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/static/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

 // Add event listener to the button
 document.getElementById('refreshButton').addEventListener('click', function() {
    // Send a GET request to the Flask route
    fetch('/run_script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log the result from the Python script
        })
        .catch(error => {
            console.error('Error:', error);
        });
});