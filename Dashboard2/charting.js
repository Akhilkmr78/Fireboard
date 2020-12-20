Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontStyle = 900;
Chart.defaults.global.defaultFontSize = 10;
const ctx = document.getElementById('chart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'Visits',
            data: [8, 9, 11, 2, 8, 11, 7],
            backgroundColor: 'transparent',
            borderColor: 'rgba(0, 172, 238, 0.6)',
            borderWidth: 3,
            pointRadius: 0.8,
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }, gridLines: {
                    display: false
                }, display: false
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
                
            }]
        }, legend :{
            display: false
        }

    }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
const lineChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        barPercentage: 0.6,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'Visits',
            data: [8, 9, 22, 15, 8, 13, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            pointRadius: 0.8,
            
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }, gridLines: {
                    display: false
                }, display: false
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
                
            }]
        }, legend :{
            display: false
        }

    }
});

const ctx3 = document.getElementById('chart3').getContext('2d');
const lineChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
        
        datasets: [{
            label: 'Visits',
            data: [8, 19, 3, 5, 18, 3, 17],
            backgroundColor: 'transparent',
            borderColor: 'rgba(14, 118, 168, 1)',
            borderWidth: 3,
            pointRadius: 0.8,
            fill: true,
            backgroundColor: 'rgba(14, 118, 168, 0.6)'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }, gridLines: {
                    display: false
                }, display: false
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
                
            }]
        }, legend :{
            display: false
        }

    }
});

const ctx4 = document.getElementById('chart4').getContext('2d');
const lineChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'Th', 'Fr', 'Sa', 'Su'],
        
        datasets: [{
            label: 'Visits',
            data: [8, 11, 13, 5, 11, 3, 15],
            backgroundColor: 'transparent',
            borderColor: 'rgba(255, 69, 0, 1)',
            borderWidth: 3,
            pointRadius: 0.8,
            fill: true,
            backgroundColor: 'rgba(255, 69, 0, 0.5)',
            steppedLine: 'middle'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }, gridLines: {
                    display: false
                }, display: false
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
                
            }]
        }, legend :{
            display: false
        }

    }
});



