$(document).ready(function(){
    
    var yesterdayLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    var thisWeekLabels = ['Sunday', 'Monday', 'Tuesday'];
    var lastWeekLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var thisMonthLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    var lastMonthLabels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    var lastSixMonthLabels = ["Mar", "Apr", "May", "June", "July", "Aug"];
    var thisYearLabels = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct" ];

    salesThisMonthChanges();
    tableAlignment();
    
    //sales this week changes
    function salesThisWeekChanges() {

        //top row
        //add data in text()
        $('#totalOrdersSales').text('8,700');
        $('#totalOrdersTrend').text('8%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#newCustomersSales').text('2,370');
        $('#newCustomersTrend').text('5%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#totalCustomersSales').text('2,673');
        $('#totalCustomersTrend').text('2.5%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#totalSalesHere').text('$836,067');
        $('#totalSalesTrend').text('5%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');

        //trend chart data
        var uniqueStackLabels = "Total Sales";
        
        //change total sales data
        var totalSalesData = [ 540, 270, 660, 128, 523, 890, 324, 432, 156, 888 ];
        console.log("hi");
        drawBarChartHere('line', 'salesTrendChart', uniqueStackLabels,  thisYearLabels,  totalSalesData, ["Time Period", "Sales"]);

        //fast moving, slow moving, trending
        //add data in text
        $('#fastMovingUnits').text('1,608 units');
        $('#fastMovingProduct').text('Protective Case Cover for Apple');
        $('#slowMovingUnits').text('690 units');
        $('#slowMovingProduct').text('Xiaomi Mi Band 2 Strap');
        $('#trendingUnits').text('1,500 units');
        $('#trendingProduct').text('In-Ear Earphones with Mic');

        //heatmap
        //change the data in corresponding tsv file
        $('#daySalesChart').empty();
        dataComparisonChart("data.tsv");

        //best selling, worst selling
        //add data in text
        $('#bestSellingDay').text('Sunday');
        $('#bestSellingDaySales').text('$106');
        $('#vestSellingDayUnits').text('30,123 units');
        $('#bestSellingHour').text('4pm-10pm');
        $('#bestSellingHourSales').text('$11,596');
        $('#bestSellingHourUnits').text('13,196 units');
        $('#worstSellingDay').text('Wednesday');
        $('#worstSellingDaySales').text('$20,596');
        $('#worstSellingDayUnits').text('421 units');

        //sales specifics
        //add data to text
        $('#netSales').text('$702,296');
        $('#quantitySold').text('1,032,400 units');
        $('#aov').text('$384');
        $('#avgSalePerDay').text('$27,869');
        $('#aoq').text('356 units');
        $('#refund').text('$920');

        //best seller table
        //change values in bestSellers for timeline
        var bestSellers= {
            "product": {
                "quantitySold": [
                    {
                    "product": "Screen Guard",
                    "sale": "104,470",
                    "quantity": "720",
                    "currencyCode": "USD",
                    "percentage": "2"
                    },
                    {
                    "product": "Cricket kit",
                    "sale": "167,720",
                    "quantity": "560",
                    "currencyCode": "USD",
                    "percentage": "6.5"
                    },
                    {
                    "product": "Universal Grip Mount",
                    "sale": "88,520",
                    "quantity": "560",
                    "currencyCode": "USD",
                    "percentage": "40"
                    },
                    {
                    "product": "Fidget Spinner",
                    "sale": "162,920",
                    "quantity": "320",
                    "currencyCode": "USD",
                    "percentage": "4.2"
                    },
                    {
                    "product": "Biking Gloves",
                    "sale": "87,810",
                    "quantity": "160",
                    "currencyCode": "USD",
                    "percentage": "12"
                    }
                ],
                "sales": [
                    {
                    "product": "Cricket kit",
                    "sale": "167,720",
                    "quantity": "560",
                    "currencyCode": "USD",
                    "percentage": "6.5"
                    },
                    {
                    "product": "Fidget Spinner",
                    "sale": "162,290",
                    "quantity": "320",
                    "currencyCode": "USD",
                    "percentage": "4.2"
                    },
                    {
                    "product": "Screen Guard",
                    "sale": "104,470",
                    "quantity": "720",
                    "currencyCode": "USD",
                    "percentage": "2"
                    },
                    {
                    "product": "Universal Grip Mount",
                    "sale": "88,520",
                    "quantity": "560",
                    "currencyCode": "USD",
                    "percentage": "40"
                    },
                    {
                    "product": "Biking Gloves",
                    "sale": "87,810",
                    "quantity": "160",
                    "currencyCode": "USD",
                    "percentage": "12"
                    }
                ]
            },
            "category": {
                "quantitySold": [
                    {
                    "category": "Furniture",
                    "sale": "28,342.30",
                    "quantity": "186",
                    "currencyCode": "USD",
                    "percentage": "0.23"
                    },
                    {
                    "category": "Electronics",
                    "sale": "20,724.30",
                    "quantity": "152",
                    "currencyCode": "USD",
                    "percentage": "0.83"
                    },
                    {
                    "category": "Basics",
                    "sale": "17,753.30",
                    "quantity": "146",
                    "currencyCode": "USD",
                    "percentage": "0.66"
                    },
                    {
                    "category": "Running",
                    "sale": "19,928.30",
                    "quantity": "144",
                    "currencyCode": "USD",
                    "percentage": "0.73"
                    },
                    {
                    "category": "Sports",
                    "sale": "16,068.30",
                    "quantity": "116",
                    "currencyCode": "USD",
                    "percentage": "0.53"
                    }
                ],
                "sales": [
                    {
                    "category": "Sports",
                    "sale": "28,342.30",
                    "quantity": "186",
                    "currencyCode": "USD",
                    "percentage": "-0.23"
                    },
                    {
                    "category": "Basics",
                    "sale": "20,724.30",
                    "quantity": "152",
                    "currencyCode": "USD",
                    "percentage": "0.70"
                    },
                    {
                    "category": "Running",
                    "sale": "19,928.30",
                    "quantity": "144",
                    "currencyCode": "USD",
                    "percentage": "0.64"
                    },
                    {
                    "category": "Electronics",
                    "sale": "17,753.30",
                    "quantity": "146",
                    "currencyCode": "USD",
                    "percentage": "0.41"
                    },
                    {
                    "category": "Furniture",
                    "sale": "16,068.30",
                    "quantity": "116",
                    "currencyCode": "USD",
                    "percentage": "0.43"
                    }
                ]
            }
        }
        var buttonQty = $("#byQtyBestSeller").hasClass('btn btn-toggle');
        var buttonSales = $("#bySalesBestSeller").hasClass('btn btn-toggle');
        if(buttonQty) {
            $("#byQtyBestSeller").removeClass('btn btn-toggle');
            $("#byQtyBestSeller").addClass('btn btn-light');
            $("#bySalesBestSeller").removeClass('btn btn-light');
            $("#bySalesBestSeller").addClass('btn btn-toggle');
        } 
        $(".salesSelector").val('Products');
        $('.prodQtyBestSeller').hide();
        $('.prodSalesBestSeller').show();
        $('.categorySalesBestSeller').hide();
        $('.categoryQtyBestSeller').hide();
        bestSellerProducts(bestSellers);
        bestSellerCategory(bestSellers);

        //repeat order table
        //change value in repeatOrderDetails for timeline
        var repeatOrderDetails = {
            "product": [
            {
                "product": "DSLR",
                "repeatOrders": "1,289",
                "customers": "101",
                "currencyCode": "USD"
            },
            {
                "product": "Seat Cover",
                "repeatOrders": "1,111",
                "customers": "120",
                "currencyCode": "USD"
            },
            {
                "product": "Pendrive",
                "repeatOrders": "988",
                "customers": "788",
                "currencyCode": "USD"
            },
            {
                "product": "Screen Protector",
                "repeatOrders": "877",
                "customers": "690",
                "currencyCode": "USD"
            },
            {
                "product": "Seinheiser Earphones	",
                "repeatOrders": "588",
                "customers": "299",
                "currencyCode": "USD"
            }
            ],
            "category": [
            {
                "category": "Electronics",
                "repeatOrders": "11",
                "customers": "4",
                "currencyCode": "USD"
            },
            {
                "category": "Sports",
                "repeatOrders": "7",
                "customers": "2",
                "currencyCode": "USD"
            },
            {
                "category": "Furniture",
                "repeatOrders": "7",
                "customers": "2",
                "currencyCode": "USD"
            },
            {
                "category": "Footwear",
                "repeatOrders": "7",
                "customers": "3",
                "currencyCode": "USD"
            },
            {
                "category": "Basics",
                "repeatOrders": "5",
                "customers": "2",
                "currencyCode": "USD"
            }
            ]
        }
        $(".repeatOrderSelector").val('Products');
        $('.productRepeats').show();
        $('.categoryRepeats').hide();
        productRepeatOrders(repeatOrderDetails);

        //returns table
        //change value in returnData for timeline
        var returnData= {
            "product": {
                "quantitySold": [
                    {
                    "product": "Printer USB",
                    "sale": "13,304",
                    "quantityReturned": "360",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Shock Resistant Protective Case",
                    "sale": "18,502",
                    "quantityReturned": "330",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Screen Protector for HTC Desire 610",
                    "sale": "48,302",
                    "quantityReturned": "303",
                    "currencyCode": "USD",
                    "percentage": "0.80"
                    },
                    {
                    "product": "Thermal printer",
                    "sale": "11,790",
                    "quantityReturned": "105",
                    "currencyCode": "USD",
                    "percentage": "5.00"
                    },
                    {
                    "product": "Thermal Receipt Printer",
                    "sale": "8,888",
                    "quantityReturned": "45",
                    "currencyCode": "USD",
                    "percentage": "0.50"
                    }
                ],
                "sales": [
                    {
                    "product": "Screen Protector for HTC Desire 610",
                    "sale": "48,302",
                    "quantityReturned": "303",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Shock Resistant Protective Case",
                    "sale": "18,502",
                    "quantityReturned": "330",
                    "currencyCode": "USD",
                    "percentage": "0.08"
                    },
                    {
                    "product": "Thermal Receipt Printer",
                    "sale": "8,888",
                    "quantityReturned": "45",
                    "currencyCode": "USD",
                    "percentage": "0.19"
                    },
                    {
                    "product": "Printer USB",
                    "sale": "13,304",
                    "quantityReturned": "360",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Thermal Printer",
                    "sale": "11,790",
                    "quantityReturned": "105",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    }
                ]
            },
            "category": {
                "quantitySold": [
                    {
                    "category": "Furniture",
                    "sale": "18,342",
                    "quantityReturned": "18",
                    "currencyCode": "USD",
                    "percentage": "0.23"
                    },
                    {
                    "category": "Electronics",
                    "sale": "2,072",
                    "quantityReturned": "15",
                    "currencyCode": "USD",
                    "percentage": "0.83"
                    },
                    {
                    "category": "Basics",
                    "sale": "17,753",
                    "quantityReturned": "140",
                    "currencyCode": "USD",
                    "percentage": "0.66"
                    },
                    {
                    "category": "Running",
                    "sale": "9,928",
                    "quantityReturned": "100",
                    "currencyCode": "USD",
                    "percentage": "0.73"
                    },
                    {
                    "category": "Sports",
                    "sale": "6,068",
                    "quantityReturned": "50",
                    "currencyCode": "USD",
                    "percentage": "0.53"
                    }
                ],
                "sales": [
                    {
                    "category": "Sports",
                    "sale": "28,342",
                    "quantityReturned": "101",
                    "currencyCode": "USD",
                    "percentage": "-0.23"
                    },
                    {
                    "category": "Basics",
                    "sale": "2,724",
                    "quantityReturned": "20",
                    "currencyCode": "USD",
                    "percentage": "0.70"
                    },
                    {
                    "category": "Running",
                    "sale": "5,141",
                    "quantityReturned": "60",
                    "currencyCode": "USD",
                    "percentage": "0.64"
                    },
                    {
                    "category": "Electronics",
                    "sale": "7,753",
                    "quantityReturned": "46",
                    "currencyCode": "USD",
                    "percentage": "0.41"
                    },
                    {
                    "category": "Furniture",
                    "sale": "6,068",
                    "quantityReturned": "22",
                    "currencyCode": "USD",
                    "percentage": "0.43"
                    }
                ]
            }
        }
        var buttonQtyRet = $("#byQtyReturns").hasClass('btn btn-toggle');
        var buttonSalesRet = $("#bySalesReturns").hasClass('btn btn-toggle');
        if(buttonQty) {
            $("#byQtyReturns").removeClass('btn btn-toggle');
            $("#byQtyReturns").addClass('btn btn-light');
            $("#bySalesReturns").removeClass('btn btn-light');
            $("#bySalesReturns").addClass('btn btn-toggle');
        } 
        $(".returnSelector").val('Products');
        $('.prodQtyReturns').hide();
        $('.prodSalesReturns').show();
        $('.categorySalesReturns').hide();
        $('.categoryQtyReturns').hide();
        returnsProducts(returnData);
        returnsCategory(returnData);
    }

    

    //sales this month changes
    function salesThisMonthChanges() {

        //top row
        //add data in text()
        $('#totalOrdersSales').text('42,025');
        $('#totalOrdersTrend').text('10%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#newCustomersSales').text('15,800');
        $('#newCustomersTrend').text('3%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#totalCustomersSales').text('17,820');
        $('#totalCustomersTrend').text('5%').append('<i class="up-trend-icon fa fa-arrow-up trend-icons"></i>');
        $('#totalSalesHere').text('$5,573,780');
        $('#totalSalesTrend').text('12%').append('<i class="down-trend-icon fa fa-arrow-down trend-icons"></i>');

        //trend chart data
        var uniqueStackLabels = "Total Sales";
        
        //change total sales data
        var totalSalesData = [ 540, 270, 660, 128, 523, 890, 324, 432, 156, 888 ];

        // drawBarChartHere('line', 'salesTrendChart', uniqueStackLabels,  thisYearLabels, totalSalesData, ["Time Period", "Sales"]);

        //fast moving, slow moving, trending
        //add data in text
        $('#fastMovingUnits').text('11,256 units');
        $('#fastMovingProduct').text('Protective Case Cover for Apple');
        $('#slowMovingUnits').text('920 units');
        $('#slowMovingProduct').text('Xiaomi Mi Band 2 Strap');
        $('#trendingUnits').text('7,500 units');
        $('#trendingProduct').text('In-Ear Earphones with Mic');

        //heatmap
        //change the data in corresponding tsv file
        $('#daySalesChart').empty();
        // dataComparisonChart("data.tsv");

        //best selling, worst selling
        //add data in text
        $('#bestSellingDay').text('Sunday');
        $('#bestSellingDaySales').text('$32,731');
        $('#vestSellingDayUnits').text('644 units');
        $('#bestSellingHour').text('4pm-10pm');
        $('#bestSellingHourSales').text('$11,596');
        $('#bestSellingHourUnits').text('19,794 units');
        $('#worstSellingDay').text('Wednesday');
        $('#worstSellingDaySales').text('$20,596');
        $('#worstSellingDayUnits').text('421 units');

        //sales specifics
        //add data to text
        $('#netSales').text('$3,511,481');
        $('#quantitySold').text('3,362,000 units');
        $('#aov').text('$133');
        $('#avgSalePerDay').text('$185,793');
        $('#aoq').text('79 units');
        $('#refund').text('$2,876');

        //best seller table
        //change values in bestSellers for timeline
        var bestSellers= {
            "product": {
                "quantitySold": [
                    {
                    "product": "Screen Guard",
                    "sale": "379,891",
                    "quantity": "2,618",
                    "currencyCode": "USD",
                    "percentage": "2.1"
                    },
                    {
                    "product": "Boxing games",
                    "sale": "609,981",
                    "quantity": "2,036",
                    "currencyCode": "USD",
                    "percentage": "2.4"
                    },
                    {
                    "product": "Universal Grip Mount",
                    "sale": "321,891",
                    "quantity": "2,036",
                    "currencyCode": "USD",
                    "percentage": "22"
                    },
                    {
                    "product": "Biking Gloves",
                    "sale": "592,436",
                    "quantity": "1,164",
                    "currencyCode": "USD",
                    "percentage": "3.2"
                    },
                    {
                    "product": "thermal print",
                    "sale": "319,309",
                    "quantity": "582",
                    "currencyCode": "USD",
                    "percentage": "5"
                    }
                ],
                "sales": [
                    {
                    "product": "Boxing games",
                    "sale": "609,981",
                    "quantity": "2,036",
                    "currencyCode": "USD",
                    "percentage": "2.4"
                    },
                    {
                    "product": "Biking Gloves",
                    "sale": "592,436",
                    "quantity": "1,164",
                    "currencyCode": "USD",
                    "percentage": "3.2"
                    },
                    {
                    "product": "Screen Guard",
                    "sale": "379,891",
                    "quantity": "2,618",
                    "currencyCode": "USD",
                    "percentage": "2.1"
                    },
                    {
                    "product": "Universal Grip Mount",
                    "sale": "321,891",
                    "quantity": "2,036",
                    "currencyCode": "USD",
                    "percentage": "22"
                    },
                    {
                    "product": "thermal print",
                    "sale": "319,309",
                    "quantity": "582",
                    "currencyCode": "USD",
                    "percentage": "5"
                    }
                ]
            },
            "category": {
                "quantitySold": [
                    {
                    "category": "Furniture",
                    "sale": "28,342.30",
                    "quantity": "186",
                    "currencyCode": "USD",
                    "percentage": "0.23"
                    },
                    {
                    "category": "Electronics",
                    "sale": "20,724.30",
                    "quantity": "152",
                    "currencyCode": "USD",
                    "percentage": "0.83"
                    },
                    {
                    "category": "Basics",
                    "sale": "17,753.30",
                    "quantity": "146",
                    "currencyCode": "USD",
                    "percentage": "0.66"
                    },
                    {
                    "category": "Running",
                    "sale": "19,928.30",
                    "quantity": "144",
                    "currencyCode": "USD",
                    "percentage": "0.73"
                    },
                    {
                    "category": "Sports",
                    "sale": "16,068.30",
                    "quantity": "116",
                    "currencyCode": "USD",
                    "percentage": "0.53"
                    }
                ],
                "sales": [
                    {
                    "category": "Sports",
                    "sale": "28,342.30",
                    "quantity": "186",
                    "currencyCode": "USD",
                    "percentage": "-0.23"
                    },
                    {
                    "category": "Basics",
                    "sale": "20,724.30",
                    "quantity": "152",
                    "currencyCode": "USD",
                    "percentage": "0.70"
                    },
                    {
                    "category": "Running",
                    "sale": "19,928.30",
                    "quantity": "144",
                    "currencyCode": "USD",
                    "percentage": "0.64"
                    },
                    {
                    "category": "Electronics",
                    "sale": "17,753.30",
                    "quantity": "146",
                    "currencyCode": "USD",
                    "percentage": "0.41"
                    },
                    {
                    "category": "Furniture",
                    "sale": "16,068.30",
                    "quantity": "116",
                    "currencyCode": "USD",
                    "percentage": "0.43"
                    }
                ]
            }
        }
        var buttonQty = $("#byQtyBestSeller").hasClass('btn btn-toggle');
        var buttonSales = $("#bySalesBestSeller").hasClass('btn btn-toggle');
        if(buttonQty) {
            $("#byQtyBestSeller").removeClass('btn btn-toggle');
            $("#byQtyBestSeller").addClass('btn btn-light');
            $("#bySalesBestSeller").removeClass('btn btn-light');
            $("#bySalesBestSeller").addClass('btn btn-toggle');
        } 
        $(".salesSelector").val('Products');
        $('.prodQtyBestSeller').hide();
        $('.prodSalesBestSeller').show();
        $('.categorySalesBestSeller').hide();
        $('.categoryQtyBestSeller').hide();
        // bestSellerProducts(bestSellers);
        // bestSellerCategory(bestSellers);

        //repeat order table
        //change value in repeatOrderDetails for timeline
        var repeatOrderDetails = {
            "product": [
            {
                "product": "DSLR",
                "repeatOrders": "1,418",
                "customers": "111",
                "currencyCode": "USD"
            },
            {
                "product": "Seat Cover",
                "repeatOrders": "1,222",
                "customers": "132",
                "currencyCode": "USD"
            },
            {
                "product": "Pendrive",
                "repeatOrders": "1,087",
                "customers": "867",
                "currencyCode": "USD"
            },
            {
                "product": "Screen Protector",
                "repeatOrders": "965",
                "customers": "759",
                "currencyCode": "USD"
            },
            {
                "product": "Seinheiser Earphones",
                "repeatOrders": "647",
                "customers": "329",
                "currencyCode": "USD"
            }
            ],
            "category": [
            {
                "category": "Electronics",
                "repeatOrders": "11",
                "customers": "4",
                "currencyCode": "USD"
            },
            {
                "category": "Sports",
                "repeatOrders": "7",
                "customers": "2",
                "currencyCode": "USD"
            },
            {
                "category": "Furniture",
                "repeatOrders": "7",
                "customers": "2",
                "currencyCode": "USD"
            },
            {
                "category": "Footwear",
                "repeatOrders": "7",
                "customers": "3",
                "currencyCode": "USD"
            },
            {
                "category": "Basics",
                "repeatOrders": "5",
                "customers": "2",
                "currencyCode": "USD"
            }
            ]
        }
        $(".repeatOrderSelector").val('Products');
        $('.productRepeats').show();
        $('.categoryRepeats').hide();
        // productRepeatOrders(repeatOrderDetails);

        //returns table
        //change value in returnData for timeline
        var returnData= {
            "product": {
                "quantitySold": [
                    {
                    "product": "Printer USB",
                    "sale": "4,838",
                    "quantityReturned": "196",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Shock Resistant Protective Case",
                    "sale": "6,728",
                    "quantityReturned": "108",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Screen Protector for HTC Desire 610",
                    "sale": "17,564",
                    "quantityReturned": "165",
                    "currencyCode": "USD",
                    "percentage": "0.80"
                    },
                    {
                    "product": "Thermal printer",
                    "sale": "4,287",
                    "quantityReturned": "57",
                    "currencyCode": "USD",
                    "percentage": "5.00"
                    },
                    {
                    "product": "Thermal Receipt Printer",
                    "sale": "3,232",
                    "quantityReturned": "25",
                    "currencyCode": "USD",
                    "percentage": "0.50"
                    }
                ],
                "sales": [
                    {
                    "product": "Screen Protector for HTC Desire 610",
                    "sale": "17,564",
                    "quantityReturned": "165",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Shock Resistant Protective Case",
                    "sale": "6,728",
                    "quantityReturned": "180",
                    "currencyCode": "USD",
                    "percentage": "0.08"
                    },
                    {
                    "product": "Thermal Receipt Printer",
                    "sale": "3,232",
                    "quantityReturned": "25",
                    "currencyCode": "USD",
                    "percentage": "0.19"
                    },
                    {
                    "product": "Printer USB",
                    "sale": "4,838",
                    "quantityReturned": "196",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    },
                    {
                    "product": "Thermal Printer",
                    "sale": "4,287",
                    "quantityReturned": "57",
                    "currencyCode": "USD",
                    "percentage": "0.29"
                    }
                ]
            },
            "category": {
                "quantitySold": [
                    {
                    "category": "Furniture",
                    "sale": "18,342",
                    "quantityReturned": "18",
                    "currencyCode": "USD",
                    "percentage": "0.23"
                    },
                    {
                    "category": "Electronics",
                    "sale": "2,072",
                    "quantityReturned": "15",
                    "currencyCode": "USD",
                    "percentage": "0.83"
                    },
                    {
                    "category": "Basics",
                    "sale": "17,753",
                    "quantityReturned": "140",
                    "currencyCode": "USD",
                    "percentage": "0.66"
                    },
                    {
                    "category": "Running",
                    "sale": "9,928",
                    "quantityReturned": "100",
                    "currencyCode": "USD",
                    "percentage": "0.73"
                    },
                    {
                    "category": "Sports",
                    "sale": "6,068",
                    "quantityReturned": "50",
                    "currencyCode": "USD",
                    "percentage": "0.53"
                    }
                ],
                "sales": [
                    {
                    "category": "Sports",
                    "sale": "28,342",
                    "quantityReturned": "101",
                    "currencyCode": "USD",
                    "percentage": "-0.23"
                    },
                    {
                    "category": "Basics",
                    "sale": "2,724",
                    "quantityReturned": "20",
                    "currencyCode": "USD",
                    "percentage": "0.70"
                    },
                    {
                    "category": "Running",
                    "sale": "5,141",
                    "quantityReturned": "60",
                    "currencyCode": "USD",
                    "percentage": "0.64"
                    },
                    {
                    "category": "Electronics",
                    "sale": "7,753",
                    "quantityReturned": "46",
                    "currencyCode": "USD",
                    "percentage": "0.41"
                    },
                    {
                    "category": "Furniture",
                    "sale": "6,068",
                    "quantityReturned": "22",
                    "currencyCode": "USD",
                    "percentage": "0.43"
                    }
                ]
            }
        }
        var buttonQtyRet = $("#byQtyReturns").hasClass('btn btn-toggle');
        var buttonSalesRet = $("#bySalesReturns").hasClass('btn btn-toggle');
        if(buttonQty) {
            $("#byQtyReturns").removeClass('btn btn-toggle');
            $("#byQtyReturns").addClass('btn btn-light');
            $("#bySalesReturns").removeClass('btn btn-light');
            $("#bySalesReturns").addClass('btn btn-toggle');
        } 
        $(".returnSelector").val('Products');
        $('.prodQtyReturns').hide();
        $('.prodSalesReturns').show();
        $('.categorySalesReturns').hide();
        $('.categoryQtyReturns').hide();
        // returnsProducts(returnData);
        // returnsCategory(returnData);
    }

    
});