// async function connect(props) {
//     const device = await navigator.bluetooth.requestDevice({
//       filters: [{ services: ['heart_rate'] }],
//       acceptAllDevices: false,
//     })
//     const server = await device.gatt.connect()
//     const service = await server.getPrimaryService('heart_rate')
//     const char = await service.getCharacteristic('heart_rate_measurement')
//     char.oncharacteristicvaluechanged = props.onChange
//     char.startNotifications()
//     // alert('Starting heart rate measurement in few seconds...\nREFRESH the page to STOP.')
//     return char
//   }

//   document.getElementById('connectButton').addEventListener('click', function() {
//     connect({ onChange: printHeartRate })});

    const time = Date.now();
//     function printHeartRate(event) {
//         const heartRate = event.target.value.getInt8(1)
//             addData(liveChart, time, heartRate);
//             time += 1;
//   }
  
const ctx = document.getElementById('liveChart').getContext('2d');
const data = {
    labels: [],
    datasets: [{
        data: [],
    }]
};

const config = {
  type: 'line',
  data: data,
  options: {
      scales: {
          x: {
              type: 'linear',  // Use linear type for x-axis
              positiontop: 'bottom',
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10
              }
          },
          y: {
              min: 0,
              max: 100
          }
      }
  }
};


const chart = new Chart(ctx, config);

// Update the chart every second (1000 milliseconds)
setInterval(updateChart, 1000);

function addData(chart, data) {
    document.getElementById("hr-value").innerText = data;
    const time = Date.now()

    chart.data.labels.push(time);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.options.scales.x.min = time - 10000;
    chart.options.scales.x.max = time;
    console.log(time)
}

// Function to update the chart with new data and adjust the x-axis range
function updateChart() {
  const data = Math.floor(Math.random() * 100) // Random data for example
  addData(chart, data);
  chart.update();
}

//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('/service-worker.js')
//       .then(function(registration) {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     }


// document.addEventListener('DOMContentLoaded', (event) => {
//     const toggleButton = document.getElementById('night-mode-toggle');
//     const body = document.body;

//     toggleButton.addEventListener('click', () => {
//         body.classList.toggle('night-mode');
//     });
// });
