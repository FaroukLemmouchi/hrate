async function connect(props) {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['heart_rate'] }],
      acceptAllDevices: false,
    })
    const server = await device.gatt.connect()
    const service = await server.getPrimaryService('heart_rate')
    const char = await service.getCharacteristic('heart_rate_measurement')
    char.oncharacteristicvaluechanged = props.onChange
    char.startNotifications()
    alert('Starting heart rate measurement in few seconds...\nREFRESH the page to STOP.')
    return char
  }

  document.getElementById('connectButton').addEventListener('click', function() {
    connect({ onChange: printHeartRate })});

    let time = 0;
    function printHeartRate(event) {
        const heartRate = event.target.value.getInt8(1)
        console.clear()
            addData(liveChart, time, heartRate);
            time += 1;
  }
  
const ctx = document.getElementById('liveChart').getContext('2d');
const data = {
    labels: [],
    datasets: [{
        //label: 'Live Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        //fill: true
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const liveChart = new Chart(ctx, config);

function addData(chart, label, data) {
    document.getElementById("hr-value").innerText = data;
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    }


    // script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('night-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');
    });
});
