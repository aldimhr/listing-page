// global settings chart

Chart.defaults.global.defaultFontColor = 'white';

// earningsChart

let earningsChart = document.getElementById('earningsChart').getContext('2d');
let earningsData = {
    labels: ['Jul 2020', 'Aug 2020', 'Sep 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'],
    datasets: [{
        label: "Gross Revenue",
        backgroundColor: '#082e62',
        data: [25000, 15000, 10090],
    }, {
        label: "Net Profit",
        backgroundColor: '#6aa9fd',
        data: [4000, 3000, 5000],
    }]
};

let earningsOptions = {
    legend: {
        display: false
    },
    barValueSpacing: 0,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 30000
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        }
    }
};

let earningChart = new Chart(earningsChart, {
    type: 'bar',
    data: earningsData,
    options: earningsOptions
});

// trafficChart

let trafficChart = document.getElementById('trafficChart').getContext('2d');
let trafficData = {
    labels: ['Jul 2020', 'Aug 2020', 'Sep 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'],
    datasets: [{
        label: "Page Views",
        backgroundColor: '#314156',
        data: [25000, 15000, 10090],
    }, {
        label: "Unique Users",
        backgroundColor: '#c9dcf4',
        data: [4000, 3000, 5000],
    }]
};

let trafficOptions = {
    legend: {
        display: false
    },
    barValueSpacing: 0,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 30000
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
    }
};

let trfChart = new Chart(trafficChart, {
    type: 'bar',
    data: trafficData,
    options: trafficOptions
});

var optionsLine = {
    responsive: true
};