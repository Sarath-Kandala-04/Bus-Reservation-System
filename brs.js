function search() {
  // Get the user inputs
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var date = document.getElementById("date").value;

  // Construct the URL for the API call
  var url = "https://api.example.com/buses?from=" + from + "&to=" + to + "&date=" + date;

  // Make the API call
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Display the search results
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
      if (data.length > 0) {
        var table = document.createElement("table");
        var headerRow = table.insertRow();
        var headerCell1 = headerRow.insertCell(0);
        headerCell1.innerHTML = "Bus Name";
        var headerCell2 = headerRow.insertCell(1);
        headerCell2.innerHTML = "Departure Time";
        var headerCell3 = headerRow.insertCell(2);
        headerCell3.innerHTML = "Arrival Time";
        for (var i = 0; i < data.length; i++) {
          var row = table.insertRow();
          var cell1 = row.insertCell(0);
          cell1.innerHTML = data[i].name;
          var cell2 = row.insertCell(1);
          cell2.innerHTML = data[i].departureTime;
          var cell3 = row.insertCell(2);
          cell3.innerHTML = data[i].arrivalTime;
        }
        resultDiv.appendChild(table);
      } else {
        resultDiv.innerHTML = "No buses found";
      }
    })
    .catch(error => console.log(error));
}
