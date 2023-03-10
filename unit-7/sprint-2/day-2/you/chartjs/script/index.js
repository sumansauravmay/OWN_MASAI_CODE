let ctx, chart;

window.addEventListener("load", function () {
  ctx = document.getElementById("chart");
  const btn=document.getElementById("btn").addEventListener("click",()=>{
    const month=document.getElementById("month").value;
    const perfomance=document.getElementById("perfomance").value
    const attendence=document.getElementById("attendence").value

    payload={month,perfomance,attendence}
    addData(chart,payload)
  })

  const remove=document.getElementById("remove").addEventListener("click",()=>{removeData(chart)})
  
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "attendence",
          data: [40, 80, 90, 30, 60, 55, 70],
          backgroundColor:
            "black",
            // generateColor(255),
            // generateColor(255),
            // generateColor(255),
            // generateColor(255),
            // generateColor(255),
            // generateColor(255),
          
        },
        {
            label: "perfomance",
          data: [30, 60, 70, 40, 50, 45, 60],
          backgroundColor:"gray"
            // generateColor(255)
          
        },
      ],
      borderWidth: 1,
    },
  });
});

const addData=(chart,{month,perfomance,attendence})=>{
    chart.data.labels.push(month);
    chart.data.datasets[0].data.push(attendence);
    chart.data.datasets[1].data.push(perfomance);
    chart.update()
    console.log(chart)

}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function random(num){
    return Math.floor(Math.random()*num)
  };

  function generateColor(num){
    return `rgba(${random(255)},${random(255)},${random(255)},${Math.random(1)})`
  }

