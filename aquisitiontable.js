var acquisitionData = [
    {
        "Source" : "Direct",
        "Users" : "123,856",
        "New Users" : "119,496",
        "Sessions" : "151,524",
        "Bounce Rate" :"66.99%",
        "Pages/Session" :"3.35",
        "Avg Session Duration" :"122.13",
        "Conversion Rate" :"1.06%",
        "transactions" :"1,607",
        "Revenue" :"$106,332.11"
    }, {
        "Source" : "Email",
        "Users" : "6,769",
        "New Users" : "4,232",
        "Sessions" : "11,517",
        "Bounce Rate" :"21.93%",
        "Pages/Session" :"4.18",
        "Avg Session Duration" :"212,47",
        "Conversion Rate" :"4.02%",
        "transactions" :"463",
        "Revenue" :"$26,046.7"
    }, {
        "Source" : "Referral",
        "Users" : "9,011",
        "New Users" : "3,226",
        "Sessions" : "17,410",
        "Bounce Rate" :"36.23%",
        "Pages/Session" :"5.59",
        "Avg Session Duration" :"261.80",
        "Conversion Rate" :"5.62%",
        "transactions" :"978",
        "Revenue" :"$53,078.55"
    }, {
        "Source" : "Organic Search",
        "Users" : "148,731",
        "New Users" : "138,261",
        "Sessions" : "189,954",
        "Bounce Rate" :"52.98%",
        "Pages/Session" :"4.22",
        "Avg Session Duration" :"169.45",
        "Conversion Rate" :"1.19%",
        "transactions" :"2,252",
        "Revenue" :"$125,918.42"
    }
]

tableForAcquisition(acquisitionData);

var countrydata = [{
    "Country Name" : "US",
    "Sales" : "$554,365.64"
},
{
    "Country Name" : "CA",
    "Sales" : "$9,318.7"
},
{
    "Country Name" : "BM",
    "Sales" : "$8,340.19"
},
{
    "Country Name" : "AU",
    "Sales" : "$3,593.54"
},
{
    "Country Name" : "GB",
    "Sales" : "$2,925.85"
},]
tableForcountry(countrydata);
var statedata = [{
    "State Name" : "Virginia",
    "Sales" : "$2,925.85"
},
{
    "State Name" : "Pennsylvania",
    "Sales" : "$3,593.54"
},
{
    "State Name" : "Texas",
    "Sales" : "$554,365.64"
},
{
    "State Name" : "Florida",
    "Sales" : "$8,340.19"
},
{
    "State Name" : "California",
    "Sales" : "$9,318.7"
},]
tableForstate(statedata);
var citydata = [{
    "City Name" : "Upper Marlboro",
    "Sales" : "$8,960.9"
},
{
    "City Name" : "Chicago",
    "Sales" : "$8,623.63"
},
{
    "City Name" : "Brooklyn",
    "Sales" : "$8,444.62"
},
{
    "City Name" : "Southampton",
    "Sales" : "$8,246.24"
},
{
    "City Name" : "Washington",
    "Sales" : "$7,457.81"
},]
tableForcity(citydata);
function tableForAcquisition(data) {      
    var keyTable = $("#acquisitionTable").DataTable({
        order : [],
        data : data,
        scrollX: true,
        paging : true,
        destroy : true,
        info : true,
        sDom: "<'row'<'col-sm-12'tr>>" +
         "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        language : {
            emptyTable : "Data not available"
        },
        columns : [ {data : 'Source'}, 
                    {data : 'Users'},
                    {data : 'New Users'}, 
                    {data : 'Sessions'},
                    {data : 'Bounce Rate'},
                    {data : 'Pages/Session'},
                    {data : 'Avg Session Duration'}, 
                    {data : 'Conversion Rate'}, 
                    {data : 'transactions'}, 
                    {data : 'Revenue'}
        ]
    });
    $('.dataTable').wrap('<div class="dataTables_scroll" />'); 
}

function tableForcountry(data) {      
    var keyTable = $("#countrytable").DataTable({
        order : [],
        data : data,
        scrollX: true,
        paging : true,
        destroy : true,
        info : true,
        sDom: "<'row'<'col-sm-12'tr>>" +
         "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        language : {
            emptyTable : "Data not available"
        },
        columns : [ {data : 'Country Name'}, 
                    {data : 'Sales'}
        ]
    });
    $('.dataTable').wrap('<div class="dataTables_scroll" />'); 
}

function tableForstate(data) {      
    var keyTable = $("#statetable").DataTable({
        order : [],
        data : data,
        scrollX: true,
        paging : true,
        destroy : true,
        info : true,
        sDom: "<'row'<'col-sm-12'tr>>" +
         "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        language : {
            emptyTable : "Data not available"
        },
        columns : [ {data : 'State Name'}, 
                    {data : 'Sales'}
        ]
    });
    $('.dataTable').wrap('<div class="dataTables_scroll" />'); 
}

function tableForcity(data) {      
    var keyTable = $("#citytable").DataTable({
        order : [],
        data : data,
        scrollX: true,
        paging : true,
        destroy : true,
        info : true,
        sDom: "<'row'<'col-sm-12'tr>>" +
         "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        language : {
            emptyTable : "Data not available"
        },
        columns : [ {data : 'City Name'}, 
                    {data : 'Sales'}
        ]
    });
    $('.dataTable').wrap('<div class="dataTables_scroll" />'); 
}