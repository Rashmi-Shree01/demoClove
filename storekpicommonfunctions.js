var charts = [];

// function for drawing bar chart   
function drawBarChartHere(type, idToUse, labelUsed, label, data, axisName) {

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
            datasets : [ {
                label: labelUsed,
                fill : false,
                backgroundColor : "rgb(144,135,192)",
                borderColor : "rgb(144,135,192)",
                borderWidth : 2,
                tension : 0,
                data : data
            } ]
        },
        options : {
            legend : {
                display : false,
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

