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

    var tbody = d3.select("tbody");
    var table = d3.select("#ufo-table")
    tbody.html("");
    table.attr("class", "table table-striped");
    
    filteredData.forEach((dataRow) => {
      // Append a row to the table body
      var row = tbody.append("tr");
      
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
      });
    });
} 




  
    
    

