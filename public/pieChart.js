var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [],
        }
    ],
    labels: []

};

function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}

// function getBudget() {
//     axios.get('http://localhost:3000/budget')
//     .then(function (res) {
//         console.log(res);
//         for (var i = 0; i < res.data.myBudget.length; i++) {
//             console.log(dataSource.datasets);
//             dataSource.datasets[0].data[i] = res.data.myBudget[i].value;
//             dataSource.labels[i] = res.data.myBudget[i].label;
//         }
        
//         createChart();
//     });
// }
// getBudget();



function getBudget() {
    axios.get('http://localhost:3000/budget')
    .then(function (res) {
        console.log(res);
        for (let i = 0; i < res.data.myBudget.length; i++) {
            console.log(dataSource.datasets);
            dataSource.datasets[0].data[i] = res.data.myBudget[i].data;
            dataSource.datasets[0].backgroundColor[i] = res.data.myBudget[i].backgroundColor;
            dataSource.labels[i] = res.data.myBudget[i].labels;
        }
        createChart();
    });
}
getBudget();
