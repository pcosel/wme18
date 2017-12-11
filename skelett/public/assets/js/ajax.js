
$.ajax({
    type: "GET",
    url: "http://localhost:3000/items",
    async: true,
    success: function(data) {
        displayTable(data);
    }, error: function(jqXHR, text, err) {
// Handle error if occured
    }
});

function filterByID() {
    var id = $('#country_filter_id').value;

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/items/" + id,
        async: true,
        success: function (data) {
            displayTable(data);
        }, error: function (jqXHR, text, err) {
// Handle error if occured
        }
    });
}

function displayTable (data) {
    var output = "";
    for (var key in data) {
        item = data[key];
        output+=
            ' <tr>' +
            ' <td class="id">' + item.id + '</td>' +
            ' <td class="name">' + item.name + '</td>' +
            ' <td class="birth_rate">' + item["birth rate per 1000"] + '</td>' +
            ' <td class="cellphones">' + item["cell phones per 100"] + '</td>' +
            ' <td class="children">' + item["children per woman"] + '</td>' +
            ' <td class="electric_usage">' + item["electricity consumption per capita"] + '</td>' +
            ' <td class="internet_usage">' + item["internet user per 100"] + '</td>' +
            ' </tr>';
    }
    $('#table_body').html(output);

}