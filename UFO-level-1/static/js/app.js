//assign the data from data.js to variable
var sightings = data;

//select the button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select(".form-group");

//create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

//complete the event handler function for the form
function runEnter() {
    //prevent refreshing
    d3.event.preventDefault();

    //select input element
    var inputElement = d3.select(".form-control");

    //get input value
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(sightings);

    var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredData);

    for (row in filteredData) {
        var list = d3.select("#ufo-table");
        var date = filteredData.map(sightings => sightings.datetime);
            list.ForEach.append("li").text(`${date}`);
        var city = filteredData.map(sightings => sightings.city);
            list.append("li").text(`${city}`);
        var state = filteredData.map(sightings => sightings.state);
            list.append("li").text(`${state}`);
        var country = filteredData.map(sightings => sightings.country);
            list.append("li").text(`${country}`);
        var shape = filteredData.map(sightings => sightings.shape);
            list.append("li").text(`${shape}`);
        var comment = filteredData.map(sightings => sightings.comment);
           list.append("li").text(`${comment}`); 
        }

   
}