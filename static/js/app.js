// from data.js
var tableData = data;

// select the table
var table = d3.select("ufo-table");

// select the table body
var tbody = d3.select("#ufo-tbody");

// select the input form
var form = d3.select("#filter-form")

// select text input for datetime filter
var input = d3.select("#datetime");

// select button to execute filtering
var button = d3.select("#filter-btn");

// select dropdown
var dropdown = d3.select("#dropdown-filter");

// function to add table row and append cells
function append_func(data) {

    // append table row the table body
    let row = tbody.append("tr");

    // add in cell contents
    row.append("td").text(data.datetime);
    row.append("td").text(data.city);
    row.append("td").text(data.state);
    row.append("td").text(data.country);
    row.append("td").text(data.shape);
    row.append("td").text(data.durationMinutes);
    row.append("td").text(data.comments);
    
};

function append_blank_func() {
    
    // append table row the table body
    let row = tbody.append("tr");

    console.log("No data found");
    row.append("td").text("n/a");
    row.append("td").text("n/a");
    row.append("td").text("n/a");
    row.append("td").text("n/a");
    row.append("td").text("n/a");
    row.append("td").text("n/a");
    row.append("td").text("No sightings. Keep searching truth seeker!");
};


// event handlers for buttom click or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = input.property("value");
  console.log(inputValue);

  var dropdownValue = dropdown.property("value");
  console.log(dropdownValue);

  var filtered_data = data.filter(ufo => ufo[dropdownValue] === inputValue);
  console.log(filtered_data)

  // clear existing table
  tbody.selectAll("tr").remove();

  if (filtered_data.length === 0) {
      append_blank_func()
  }
  
  else {
  // run function based on input value to populate table
  filtered_data.forEach(ufo => append_func(ufo))
  };

};




