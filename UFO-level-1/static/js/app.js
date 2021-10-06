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

    var results = {
     dates: [],
     cities: [],
     states: [],
     countries: [],
     shapes: [],
     durationMinutes: [],
     comments: []
    };

    var keyMap = {
      datetime: "dates",
      city: "cities",
      state: "states",
      country: "countries",
      shape: "shapes",
      durationMinutes: "durationMinutes",
      comment: "comments"
    };

    filteredData.forEach((filteredData) => {
    Object.entries(filteredData).forEach(([key, value]) => {
      if (key === "datetime") {
        dates.push(value);
      }
      if (key === "city") {
        cities.push(value);
      }
      if (key === "State") {
          states.push(value);
      }
      if (key === "Country") {
        countries.push(value);
      }
      if (key === "Shape") {
          shapes.push(value);
      }
      if (key === "durationMinutes") {
          durationMinutes.push(value);
      }
      else {
          comment.push(value);
      }
     });
  });
} 



    
    








