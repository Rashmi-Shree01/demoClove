$(document).ready(function(){

    //var yesterdayLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    var yesterdayLabels = ['25-09-2018'];
    var thisWeekLabels = ['Sunday', 'Monday', 'Tuesday'];
    var lastWeekLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //var thisMonthLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    var thisMonthLabels = ['Sep'];
    //var lastMonthLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var lastMonthLabels = ['August'];
    var lastSixMonthLabels = ["Mar", "Apr", "May", "June", "July", "Aug"];
    var thisYearLabels = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

    dashboardThisMonthChanges();

    //dashboard this month changes
    function dashboardThisMonthChanges() {

        //add data in text()
        $('#dashboardOrders').text(633);
        $('#pending').text(33);
        $('#quantitySold').text(2389);
        $('#aov').text('$2899');
        $('#returnedQuantity').text(111);

        $('#dashboardCustomers').text(394),
        $('#newCustomers').text(349),
        $('#returningCustomers').text(45),
        $('#ltv').text('$2900');

        $('#dashboardRevenue').text('$45900'),
        $('#arpu').text('$889'),
        $('#refunds').text('$343'),
        $('#declines').text('$300'),
        $('#chargeback').text('$200');

        $('#dashboardVisitors').text(450),
        $('#sessions').text(890),
        $('#pagesPerSession').text(5),
        $('#ppc').text(11),
        $('#bounceRate').text('2%');

        $('#dashboardSales').text('$12,234');

                //trend chart data
                var uniqueStackLabels = "Total Sales";
        
                //change total sales data
                var totalSalesData = [ 540, 270, 660, 128, 523, 890, 324, 432, 156, 888 ];
               // var thisSale = [600,567,123,567,222,345,564,890,876,888]
        
        //        trendLabel.push(value);
        //         totalOrderData.push(0);
        //         cancelledOrderData.push(0);
        //         visitorsData.push(0);
        //         sessionsData.push(0);
        //         bouncesData.push(0);
        //         failedPayData.push(0);
        //         successPayData.push(0);
        //         totalPaymentsData.push(0);
        //        var dataSets = [];
        // $.each(finalDataSets,function(index,finalDataSet){
        //     var dataSet = {
        //             label 				: finalDataSet['key'],
        //             data				: finalDataSet['value']['logData'],
        //             original			: finalDataSet['originalValues'],
        //             fill 				: false,
        //             tension 			: 0,
        //             borderColor 		: backgroundColor[index],
        //             backgroundColor 	: 'transparent',
        //             pointRadius 		: 2,
        //             pointHoverRadius 	: 5,
        //             pointHitRadius 		: 30,
        //             pointBorderWidth 	: 1,
        //             borderWidth			: 2
        //     }
        //     dataSets.push(dataSet);
        // });
        
        var totalOrderData = {
            label: ["Total Orders"],
            data: [163,206,183,188,148,222,161,135,89,112,86,101],
            fill: false,
            tension: 0,
            borderColor: "rgb(144,135,192)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var cancelledOrderData = {
            label: ["Cancelled Orders"],
            data: [62,83,52,54,48,107,48,62,23,35,27,23],
            fill: false,
            tension: 0,
            borderColor: "rgb(150,209,243)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var visitorsData = {
            label: ["Visitors"],
            data: [250,300,350,300,280,250,260,360,320,300,270,290],
            fill: false,
            tension: 0,
            borderColor: "rgb(244,137,167)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var sessionsData = {
            label: ["Sessions"],
            data: [270,320,370,320,300,270,280,380,350,320,290,310],
            fill: false,
            tension: 0,
            borderColor: "rgb(197,229,214)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var bouncesData = {
            label: ["Bounces"],
            data: [230,280,330,280,260,230,240,340,310,280,250,270],
            fill: false,
            tension: 0,
            borderColor: "rgb(231,180,211)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var totalPaymentsData = {
            label: ["Total Payments"],
            data: [100,180,120,125,140,200,150,120,70,100,80,95],
            fill: false,
            tension: 0,
            borderColor: "rgb(71,120,230,0.92)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var successPaymentsData = {
            label: ["Success Payments"],
            data: [80,150,80,100,130,170,140,100,35,72,80,85],
            fill: false,
            tension: 0,
            borderColor: "rgb(248,202,177)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var failedPaymentsData = {
            label: ["Failed Payments"],
            data: [20,30,40,25,10,30,10,20,35,25,0,10],
            fill: false,
            tension: 0,
            borderColor: "rgb(246,133,103)",
            backgroundColor: 'transparent',
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 1,
            borderWidth: 2
        }

        var labels = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
        
        drawBarChartHere('line', 'storeTrendChart',  labels, [totalOrderData,cancelledOrderData,visitorsData,
                sessionsData,bouncesData,totalPaymentsData,successPaymentsData,failedPaymentsData], ["Time Period", "Count"]);
        
        //change data for timeline
        // data for category chart
        var idForCategory = 'categoryChart';
        var categoryLabels = ["Electronics", "Furniture", "Stationery", "Sports", "Footwear"]
        var currentDatasetCategory = {
            label: "Current",
            data: [400, 500, 700, 150, 500],
            backgroundColor: "rgb(144,135,192)",
            hoverBackgroundColor:"rgb(144,135,192)"
        }
        var previousDatasetCategory = {
            label: "Previous",
            data: [350, 320, 400, 145, 400],
            backgroundColor: "rgb(150,209,243)",
            hoverBackgroundColor:"rgb(150,209,243)"
        }

        //change data for timeline
        //acquisition bar chart
        
        var dataSet = {
            label: "Visits",
            data: [ 65, 70, 80, 55, 90, 100, 60, 85, 110, 45, 75, 95 ],
            borderColor: "rgb(144,135,192)",
            borderWidth: "0",
            backgroundColor: "rgb(144,135,192)"
        }

        //acquistion stacked chart
        //change data for timeline
        var dataStacked = [{
                label: 'Organic Search',
                data: [65],
                backgroundColor: 'rgb(144,135,192)'
            }, {
                label: 'Direct',
                data: [28],
                backgroundColor: 'rgb(150,209,243)'
            }, {
                label: 'Social',
                data: [86],
                backgroundColor: 'rgb(231,180,211)'
            }, {
                label: 'Referral',
                data: [56],
                backgroundColor: 'rgb(222,210,232)'
            }, {
                label: 'Display',
                data: [28],
                backgroundColor: 'rgb(197,229,214)'
            }, {
                label: 'Email',
                data: [65],
                backgroundColor: 'rgb(250,245,179)'
            }
        ]
        // chartForAcquisition('acquisitionChart',thisYearLabels,dataSet);

        // var buttonTotal = $("#totalButton").hasClass('btn btn-toggle');
        // var buttonAcquisition = $("#byAcquisition").hasClass('btn btn-toggle');
        // if(buttonTotal) {
        //     $(".chartForTotal").show();
        //     $(".chartByAcquisition").hide();
        //     chartForAcquisition('acquisitionChart',thisMonthLabels,dataSet);
        // } else if(buttonAcquisition) {
        //     $(".chartForTotal").hide();
        //     $(".chartByAcquisition").show();
        //     stackedAcquisitionChart('acquisitionChartStacked',thisMonthLabels,dataStacked);
        // }

        //location doughnut chart
        //change data for timeline
        var doughnutLabel = ['India', 'USA', 'Canada', 'United Kingdom', 'Brazil']
        var doughnutData = [342, 242, 120, 109, 100 ];

        // doughnutChart('locationChart', doughnutLabel, doughnutData);

        $("#selectFilter").change( function() {
            var selectedFilter = $("#selectFilter").val();
            switch(selectedFilter) {
                case "Products" : 
                                    $(".productCategorySales").hide();
                                    $(".productSales").show();
                                    productSalesChart(previousDatasetProduct, currentDatasetProduct, idForProducts, productLabels);
                                    break;
                case "Category" :
                                    $(".productSales").hide();
                                    $(".productCategorySales").show();
                                    categorySalesChart(previousDatasetCategory, currentDatasetCategory, idForCategory, categoryLabels);
                                    break;
                default :
                                    $(".productCategorySales").hide();
                                    $(".productSales").show();
                                    productSalesChart(previousDatasetProduct, currentDatasetProduct, idForProducts, productLabels);
                                    break;
            }
        });

        // $("#byAcquisition").click( function() {
        //     var buttonClass = $("#byAcquisition").hasClass('btn btn-light');
        //     stackedAcquisitionChart('acquisitionChartStacked',thisMonthLabels,dataStacked);
        //     if(buttonClass) {
        //         $("#byAcquisition").removeClass('btn btn-light');
        //         $("#byAcquisition").addClass('btn btn-toggle');
        //         $("#totalButton").removeClass('btn btn-toggle');
        //         $("#totalButton").addClass('btn btn-light');
        //         $(".chartForTotal").hide();
        //         $(".chartByAcquisition").show();
        //         stackedAcquisitionChart('acquisitionChartStacked',thisMonthLabels,dataStacked);
        //     } 
        // });
    
        // $("#totalButton").click( function() {
        //     var buttonClass = $("#totalButton").hasClass('btn btn-light');
        //     chartForAcquisition('acquisitionChart',thisMonthLabels,dataSet);
        //     if(buttonClass) {
        //         $("#totalButton").removeClass('btn btn-light');
        //         $("#totalButton").addClass('btn btn-toggle');
        //         $("#byAcquisition").removeClass('btn btn-toggle');
        //         $("#byAcquisition").addClass('btn btn-light');
        //         $(".chartByAcquisition").hide();
        //         $(".chartForTotal").show();
        //         chartForAcquisition('acquisitionChart',thisMonthLabels,dataSet);
        //     } 
        // });
    }


});