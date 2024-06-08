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

let time = 0
//     function printHeartRate(event) {
//         const heartRate = event.target.value.getInt8(1)
//             addData(liveChart, time, heartRate);
//             time += 1;
//   }

const ctx = document.getElementById('liveChart').getContext('2d');
const data = {
    labels: [],
    datasets: [
        {
            label: 'Heart Rate',
            data: [], // Array to hold dataset values
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: false, // No fill under the line
            yAxisID: 'y-axis-1'

        },
        {
            label: '2nd graph',
            data: [], // Array to hold dataset values
            borderColor: 'rgb(75, 192, 0)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: false, // No fill under the line
            yAxisID: 'y-axis-2'

        },]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,

        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Seconds'
                },
                // grid: {
                //     color: 'grey'  // Change the grid color for x-axis
                // },

            },

            'y-axis-1': {
                type: 'linear',
                display: true,
                position: 'left',

                min: 30,
                max: 200,
                // title: {
                //     display: true,
                //     text: 'Value for Dataset 1'
                // },
                ticks: {
                    color: 'rgba(255, 0, 0, 1)'  // Change the y-axis label color

                },
                grid: {
                    color: 'grey',  // Change the grid color for x-axis
                }

            },
            'y-axis-2': {
                type: 'linear',
                display: true,
                position: 'right',

                min: 30,
                max: 200,

                // title: {
                //     display: true,
                //     text: 'Value for Dataset 2'
                // },
                ticks: {
                    color: 'rgb(75, 192, 0)'  // Change the y-axis label color

                },

                grid: {
                    drawOnChartArea: false  // only want the grid lines for one axis to show up
                }
            },
        }
    }
};

const chart = new Chart(ctx, config);

// Update the chart every second (1000 milliseconds)
setInterval(updateChart, 500);

function addData(chart, datalist) {
    const data = datalist[0]
    const data2 = datalist[1]
    document.getElementById("hr-value").innerText = data;
    time += 1

    chart.data.labels.push(time);
    chart.data.datasets[1].data.push(data2)
    chart.data.datasets[0].data.push(data)

    chart.options.scales.x.min = Math.max(0, time - 50);
}

// Function to update the chart with new data and adjust the x-axis range
function updateChart() {
    const data = Math.floor(Math.random() * 100 + 100) // Random data for example
    const data2 = Math.floor(Math.random() * 120 + 80) // Random data for example
    addData(chart, [data, data2]);
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


document.addEventListener('DOMContentLoaded', (event) => {
    const checkBox = document.getElementById('night-mode-toggle');
    const body = document.body;

    checkBox.addEventListener('change', () => {
        if (this.checked) {
            body.classList.toggle('night-mode');
        } else {
            body.classList.toggle('night-mode');
        }
    });
});
