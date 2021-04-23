$('[data-toggle="popover"]').popover();

var charts = [];

//product sales chart
// function productSalesChart(set1, set2, idToUse, labelsToUse) {
//     $.each(charts, function(index, bar) {
// 		if (bar['id'] == idToUse) {
// 			bar['object'].destroy();
// 		}
//     })
//     var parent = $("#" + idToUse).parent();
// 	$(parent).html("");
// 	$(parent).append("<canvas id='" + idToUse + "' />");
//     var ctx = $('#'+idToUse);
//     var chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labelsToUse,
//         datasets: [set1, set2]
//         },
//         options: {
//             legend: {
//                 display: true,
//                 labels: {
//                     boxWidth: 10
//                 }
//             },
//             scales : {
//                 xAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString: 'Products'
//                     },
//                     ticks : {
//                         stepSize : 1,
//                         min : 0,
//                         autoSkip : false
//                     }
//                 } ],
//                 yAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString : 'Sales'
//                     },
//                     ticks : {
//                         beginAtZero : true
//                     }
//                 } ]
//             },
//             responsive : true,
//             title : {
//                 display : false
//             }
//         }
//     });
//     var index = -1;
// 	$.each(charts, function(i, bar) {
// 		if (bar['id'] == idToUse) {
// 			index = i;
// 		}
// 	})
// 	if (index != -1) {
// 		charts.splice(index, 1);
// 	}
// 	var bar = {
// 		id : idToUse,
// 		object : chart
// 	}
// 	charts.push(bar);
// }

//category sales chart
// function categorySalesChart(set1, set2, idToUse, labelsToUse) {
//     $.each(charts, function(index, bar) {
// 		if (bar['id'] == idToUse) {
// 			bar['object'].destroy();
// 		}
//     })
//     var parent = $("#" + idToUse).parent();
// 	$(parent).html("");
// 	$(parent).append("<canvas id='" + idToUse + "' />")
//     var ctx = $('#'+idToUse);
//     var chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labelsToUse,
//         datasets: [set1, set2]
//         },
//         options: {
//             legend: {
//                 display: true,
//                 labels: {
//                     boxWidth: 10
//                 }
//             },
//             scales : {
//                 xAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString: 'Product Category'
//                     },
//                     ticks : {
//                         stepSize : 1,
//                         min : 0,
//                         autoSkip : false
//                     }
//                 } ],
//                 yAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString : 'Sales'
//                     },
//                     ticks: {
//                         beginAtZero: true 
//                     }
//                 } ]
//             },
//             responsive : true,
//             title : {
//                 display : false
//             }
//         }
//     });
//     var index = -1;
// 	$.each(charts, function(i, bar) {
// 		if (bar['id'] == idToUse) {
// 			index = i;
// 		}
// 	})
// 	if (index != -1) {
// 		charts.splice(index, 1);
// 	}
// 	var bar = {
// 		id : idToUse,
// 		object : chart
// 	}
// 	charts.push(bar);
// }

//acquisition chart
// function chartForAcquisition(idToUse, labels, data) {
//     $.each(charts, function(index, bar) {
// 		if (bar['id'] == idToUse) {
// 			bar['object'].destroy();
// 		}
//     })
//     var parent = $("#" + idToUse).parent();
// 	$(parent).html("");
// 	$(parent).append("<canvas id='" + idToUse + "' />")
//     var ctx = $("#"+idToUse);
//     var chart = new Chart( ctx, {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: [ data ]
//         },
//         options: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     boxWidth: 10
//                 }
//             },
//             scales : {
//                 xAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString: 'Time'
//                     },
//                     ticks : {
//                         stepSize : 1,
//                         min : 0,
//                         autoSkip : false
//                     }
//                 } ],
//                 yAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString : 'Visitors'
//                     },
//                     ticks : {
//                         beginAtZero : true
//                     }
//                 } ]
//             },
//             responsive : true,
//             stacked : true,
//             title : {
//                 display : false
//             }
//         }
//     });
//     var index = -1;
// 	$.each(charts, function(i, bar) {
// 		if (bar['id'] == idToUse) {
// 			index = i;
// 		}
// 	})
// 	if (index != -1) {
// 		charts.splice(index, 1);
// 	}
// 	var bar = {
// 		id : idToUse,
// 		object : chart
// 	}
// 	charts.push(bar);
// }

//stacked acquisition chart
// function stackedAcquisitionChart(idToUse, labels, dataset) {
//     $.each(charts, function(index, bar) {
//         if (bar['id'] == idToUse) {
//             bar['object'].destroy();
//         }
//     })
//     var parent = $("#" + idToUse).parent();
//     $(parent).html("");
//     $(parent).append("<canvas id='" + idToUse + "' />")
//     var ctx = $("#"+idToUse);
//     var chart = new Chart( ctx, {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: dataset
//         },
//         options: {
//             scales : {
//                 xAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString: 'Time',
//                     },
//                     stacked: true
//                 } ],
//                 yAxes : [ {
//                     scaleLabel : {
//                         display : true,
//                         labelString : 'Visitors',
//                     },
//                     stacked: true
//                 } ]
//             },
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     boxWidth: 10
//                 }
//             },
//             responsive : true,
//             title : {
//                 display : false
//             }
//         }
//     });
//     var index = -1;
//     $.each(charts, function(i, bar) {
//         if (bar['id'] == idToUse) {
//             index = i;
//         }
//     })
//     if (index != -1) {
//         charts.splice(index, 1);
//     }
//     var bar = {
//         id : idToUse,
//         object : chart
//     }
//     charts.push(bar);
// }

//location chart
// function doughnutChart(idToUse, labels, dataset){
//     $.each(charts, function(index, bar) {
//         if (bar['id'] == idToUse) {
//             bar['object'].destroy();
//         }
//     })
//     var parent = $("#" + idToUse).parent();
//     $(parent).html("");
//     $(parent).append("<canvas id='" + idToUse + "' />")
//     var ctx = $("#"+idToUse);
//     var chart = new Chart(ctx, {
//         type: 'doughnut',
//         responsive: 'true',
//         maintainAspectRatio: false,
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: "Dataset",
//                 data: dataset,
//                 //fill: false,
//                 backgroundColor:[
//                                     "rgb(144,135,192)",
//                                     "rgb(150,209,243)",
//                                     "rgb(244,137,167)",
//                                     "rgb(197,229,214)",
//                                     "rgb(231,180,211)"
                    
//                 ],
//                 borderWidth:2
//             }]
//         },
//         options: {
//             animateRotate: true,
//             cutoutPercentage: 60,
//             legend: {
//                 display: true,
//                 position: 'bottom',
//                 labels: {
//                     boxWidth: 10
//                 }
//             }
//         }
//     });
//     var index = -1;
//     $.each(charts, function(i, bar) {
//         if (bar['id'] == idToUse) {
//             index = i;
//         }
//     })
//     if (index != -1) {
//         charts.splice(index, 1);
//     }
//     var bar = {
//         id : idToUse,
//         object : chart
//     }
//     charts.push(bar);
// }

function drawBarChartHere(type, idToUse, label, data, axisName) {

    $.each(charts, function(index, bar) {
		if (bar['id'] == idToUse) {
			bar['object'].destroy();
		}
    })
    var parent = $("#" + idToUse).parent();
	$(parent).html("");
	$(parent).append("<canvas id='" + idToUse + "' />");
    var ctx = $('#' + idToUse);
    var chart = new Chart(ctx, {
        type : type,
        data : {
            labels : label,
            datasets : data
        },
        options : {
            legend : {
				display : true,
				position : 'top',
				labels : {
					boxWidth : 10,
					fontSize : 10
				}
			},
            scales : {
                xAxes : [ {
                    scaleLabel : {
                        display : true,
                        labelString : axisName[0]
                    },
                    ticks : {
                        stepSize : 1,
                        min : 0,
                        autoSkip : false
                    }
                } ],
                yAxes : [ {
                    scaleLabel : {
                        display : true,
                        labelString : axisName[1]
                    },
                    ticks : {
                        beginAtZero : true
                    }
                } ]
            },
            responsive : true,
            title : {
                display : false
            }
        }
    });
    var index = -1;
	$.each(charts, function(i, bar) {
		if (bar['id'] == idToUse) {
			index = i;
		}
	})
	if (index != -1) {
		charts.splice(index, 1);
	}
	var bar = {
		id : idToUse,
		object : chart
	}
	charts.push(bar);
};