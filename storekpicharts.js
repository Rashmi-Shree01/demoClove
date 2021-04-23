// conversion funnel chart
new Chart(document.getElementById("bar-chart"), {
    type: 'horizontalBar',
    data: {
    labels: ["Visitors", "Registrations", "Add to Cart", "Submitted", "Approved", "Orders", "Payments", "Cancelled orders","Failed Payments"],
    datasets: [
        {
        label: "Population (millions)",
        backgroundColor: ["purple", "blue","pink","green","lightpurple","darkblue","orange","brown","yellow"],
        data: [100,0,0,0,0,2.35,1.68,0.02,0.23]
        }
    ]
    },
    options: {
        legend: {
          display: false
        },
        scales:{
            yAxes:[{
                ticks:{
                    display:false
                }
            }]
        }
      },
});


//sales trend chart
const chart = document.getElementById("LineChart");
console.log(chart);
let linechart = new Chart(chart,{
    type:'line',
    data: {
    labels: ["Jan 19", "Feb 19", "Mar 19", "Apr 19", "May 19", "Jun 19", "Jul 19","Aug 19", "Sep 19","Oct 19", "Nov 19", "Dec 19"],
    datasets: [
    {
        label: "Total Revenue",
        strokeColor: "rgba(220,220,220,1)",
        data: [65000, 59000, 80000, 80001, 50006, 50050, 40000, 50045, 70087, 98009, 45004, 78007, 30000],
        lineTension: 0,
        fill: false,
        borderColor: 'purple'
    },
    {
        label: "Shipping",
        strokeColor: "rgba(151,187,205,1)",
        data: [28000, 48000, 40000, 19000, 86000, 27000, 30000,25000,22000,45000,32000,12000],
        lineTension: 0,
        fill:false,
        borderColor: 'lightblue'
    },
    {
        label: "Tax",
        strokeColor: "rgba(151,187,205,1)",
        data: [1200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        lineTension: 0,
        fill:false,
        borderColor: 'red'
    }
    ]
    },
})