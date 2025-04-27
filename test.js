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
  
  function listDestinations(destinationLogToDisplay) {
    let destinationsDiv = document.querySelector("div#destinations");
    destinationsDiv.innerText = null;
    const ul = document.createElement("ul");
    Object.keys(destinationLogToDisplay.destinations).forEach(function(key) {
      const destination = destinationLogToDisplay.findDestination(key);
      const li = document.createElement("li");
      li.append(destination.location);
      li.setAttribute("id", destination.id);
      ul.append(li);
    });
    destinationsDiv.append(ul);
  }
  
  function displayDestinationDetails(event) {
    const destination = destinationLog.findDestination(event.target.id);
    document.querySelector("#location").innerText = destination.location;
    document.querySelector("#landmark").innerText = destination.landmark;
    document.querySelector("#time-of-year").innerText = destination.timeOfYear;
    document.querySelector("#notes").innerText = destination.notes;
    document.querySelector("div#destinations-details").removeAttribute("class");
  }
  
  function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedLocation = document.querySelector("input#new-location").value;
    const inputtedLandmark = document.querySelector("input#new-landmark").value;
    const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
    const inputtedNotes = document.querySelector("input#new-notes").value;

    let newDestination = new Destination(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    destinationLog.addDestination(newDestination);
    listDestinations(destinationLog);

    // Clear the form fields after submission
    document.getElementById("new-destination").reset();
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#new-destination").addEventListener("submit", handleFormSubmission);
    document.querySelector("div#destinations").addEventListener("click", displayDestinationDetails);
  });