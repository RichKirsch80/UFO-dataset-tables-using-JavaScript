//assign the data from data.js to variable
var tableData = data;

//select the button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select(".form-group");

//create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    //prevent refreshing
    d3.event.preventDefault();

    //select input element
    var inputElement = d3.select(".form-control");

    //get input value
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);
    var dates = [];
    var cities = [];
    var states = [];
    var countries = [];
    var shapes = [];
    var duration = [];
    var comments = [];

    filteredData.forEach((Data) => {
    Object.entries(Data).forEach(([key, value]) => {
      if (key === "datetime") {
        dates.push(value);
      }
      if (key === "city") {
        cities.push(value);
      }
      if (key === "state") {
          states.push(value);
      }
      if (key === "country") {
        countries.push(value);
      }
      if (key === "shape") {
          shapes.push(value);
      }
      if (key === "durationMinutes") {
          duration.push(value);
      }
      if (key === "comments") {
        comments.push(value);
    }
      else {
      }
     });
  });

    var tbody = d3.select("tbody");
    var table = d3.select("table")
    table.attr("class", "table table-striped");
    var row = tbody.append("tr");

    
    row.append("td").text(dates)
    row.append("td").text(cities)
    row.append("td").text(states)
    row.append("td").text(countries)
    row.append("td").text(shapes)
    row.append("td").text(duration)
    row.append("td").text(comments)
} 



    
    








