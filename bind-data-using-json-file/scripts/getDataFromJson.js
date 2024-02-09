function bindCountryList() {
    $('#ddlCountries').empty().append(`<option value='-1'>--Select--</option>`);
    $.ajax({
        url: '../scripts/Global.json',
        dataType: 'json',
        success: function (data) {
            $.each(data.GetCountryList, function (Index_, item) {
                $('#ddlCountries').append(`<option value="${item.index}">${item.name}</option>`);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error fetching country list: ", error);
        }
    });
}