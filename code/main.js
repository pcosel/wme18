/* var request;

if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', '../world_data_v1.json');
request.onreadystatechange = function () {
    if((request.readyState === 4) && request.status === 200) {
        var items = JSON.parse(request.responseText);
        console.log(items);
    }
}

request.send(); */

var text = "[\n" +
    "   {\n" +
    "      \"id \": \"001\",\n" +
    "      \"name\": \"Brazil\",\n" +
    "      \"birth rate per 1000\": \"16.405\",\n" +
    "      \"cell phones per 100\": \"90.01936334\",\n" +
    "      \"children per woman\": \"1.862\",\n" +
    "      \"electricity consumption per capita\": \"2201.808724\",\n" +
    "      \"gdp_per_capita\": \"4424.758692\",\n" +
    "      \"gdp_per_capita_growth\": \"-1.520402823\",\n" +
    "      \"inflation annual\": \"8.228535058\",\n" +
    "      \"internet user per 100\": \"39.22\",\n" +
    "      \"life expectancy\": \"74\",\n" +
    "      \"military expenditure percent of gdp\": \"1.615173655\",\n" +
    "      \"gps_lat\": -14.235004,\n" +
    "      \"gps_long\": -51.92528\n" +
    "   }]";
var result = JSON.parse(text);

console.log(result);