function loadTearLive() {
    var hr = new XMLHttpRequest();
    var url = "list_data_live.php";
    var vars = "";
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function () {

        if (hr.readyState == 4 && hr.status == 200) {
            data = hr.responseText;
            processDataLive(data);
        }
    }
    // Send the data to PHP
    hr.send(vars);
    setTimeout(loadTearLive, 2000);
}
