// Business Logic for AddressBook ---------
function DestinationLog() {
    this.destinations = {};
    this.currentId = 0;
  }
  
  // Assign ID to each destination
  DestinationLog.prototype.addDestination = function(destination) {
    destination.id = this.assignId();
    this.destinations[destination.id] = destination;
  };
  
  // Increment ID for each new destination
  DestinationLog.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
  DestinationLog.prototype.findDestination = function(id) {
    if (this.destinations[id] !== undefined) {
      return this.destinations[id];
    }
    return false;
  };
  
  // delete destination by ID
  DestinationLog.prototype.deleteDestination = function(id) {
    if (this.destinations[id] === undefined) {
      return false;
    }
    delete this.destinations[id];
    return true;
  };
  
  // Business Logic for destinations ---------
  function Destination(location, landmark, timeOfYear, notes) {
    this.location = location;
    this.landmark = landmark;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  Destination.prototype.summary = function() {
    return this.location + " " + this.landmark + " " + this.timeOfYear + " " + this.notes;
  };
  
  // User Interface Logic ---------
  let destinationLog = new DestinationLog();
  
  const predefinedDestinations = [
    {
        id: 1,
        location: "Paris",
        landmark: "Eiffel Tower",
        timeOfYear: "Spring",
        notes: "A beautiful city with a rich history and culture."
    },
    {
        id: 2,
        location: "New York",
        landmark: "Statue of Liberty",
        timeOfYear: "Summer",
        notes: "The city that never sleeps, bustling with energy and life."
    },
    {
        id: 3,
        location: "Tokyo",
        landmark: "Mount Fuji",
        timeOfYear: "Autumn",
        notes: "A serene place with breathtaking natural beauty."
    }
];

function listDestinations() {
  const destinationsDiv = document.querySelector("div#destinations");
  destinationsDiv.innerHTML = "";  // Clear previous destinations

  const ul = document.createElement("ul");

  // Display predefined destinations
  predefinedDestinations.forEach(function(destination) {
      const li = document.createElement("li");
      li.innerText = destination.location;
      li.setAttribute("id", destination.id);
      li.addEventListener("click", function() {
          displayDestinationDetails(destination);
      });
      ul.appendChild(li);
  });

  // Display dynamically added destinations
  Object.keys(destinationLog.destinations).forEach(function(key) {
      const destination = destinationLog.findDestination(key);
      const li = document.createElement("li");
      li.innerText = destination.location;
      li.setAttribute("id", destination.id);
      li.addEventListener("click", function() {
          displayDestinationDetails(destination);
      });
      ul.appendChild(li);
  });

  destinationsDiv.appendChild(ul);
}

// Function to display details of a clicked destination
function displayDestinationDetails(destination) {
  if (destination) {
      document.querySelector("#location").innerText = destination.location;
      document.querySelector("#landmark").innerText = destination.landmark;
      document.querySelector("#time-of-year").innerText = destination.timeOfYear;
      document.querySelector("#notes").innerText = destination.notes;
      document.querySelector("div#destinations-details").classList.remove("hidden");
  } else {
      console.log("Destination object is undefined.");
  }
}

// Handle form submission to add a new destination
function handleFormSubmission(event) {
  event.preventDefault();
  
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedLandmark = document.querySelector("input#new-landmark").value;
  const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  
  // Create new destination object
  let newDestination = new Destination(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
  destinationLog.addDestination(newDestination);
  listDestinations();  // Update the list to include the new destination

  // Clear form fields after submission
  document.getElementById("new-destination").reset();
}

// Event listener for form submission and displaying destination details
window.addEventListener("load", function() {
  listDestinations();  

  document.querySelector("form#new-destination").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#destinations").addEventListener("click", function(event) {
      const destination = destinationLog.findDestination(event.target.id);
      if (destination) {
          displayDestinationDetails(destination);
      }
  });
});