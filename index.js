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
        id: 1, location: "Maasai Mara Game Reserve", landmark: "Great Migration",timeOfYear: "August 2023",
        notes: "A renowned game reserve known for its incredible wildlife, including the Big Five: lion, elephant, buffalo, leopard, and rhinoceros). It's famous for the Great Migration of wildebeest and zebras, and also for luxury safari lodges and cultural experiences with the Maasai people.."
    },

    {
        id: 2, location: "Lake Nakuru National Park", landmark: "Flamingoes", timeOfYear: "September 2022",
        notes: "Known for its large populations of flamingos that congregate around the shores of Lake Nakuru."
    },
    {
        id: 3, location: "Diani Beach", landmark: "White Sand Beaches", timeOfYear: "December 2024",
        notes: "A popular beach destination on the south coast of Kenya, known for its pristine beaches and vibrant coral reefs. Check out Flamboyant Hotel!"
    }
,
    {
        id: 4, location: "Mount Kenya", landmark: "Snow-capped Peaks", timeOfYear: "January 2025",
        notes: "The second-highest mountain in Africa, known for its stunning landscapes and diverse wildlife. It's a UNESCO World Heritage Site and offers various trekking routes."
    },
    {
        id: 5, location: "Nairobi National Park", landmark: "Wildlife in the City", timeOfYear: "February 2023",
        notes: "A unique wildlife park located just outside Nairobi, where you can see lions, giraffes, and rhinos against the backdrop of the city skyline."
    },
    {
        id: 6, location: "Samburu National Reserve", landmark: "Unique Wildlife", timeOfYear: "March 2023",
        notes: "Known for its unique wildlife species, including the reticulated giraffe, Grevy's zebra, and Somali ostrich. It's a less crowded alternative to the Maasai Mara."
    },
    {
        id: 7, location: "Tsavo National Park", landmark: "Red Elephants", timeOfYear: "April 2023",
        notes: "One of the largest national parks in the world, known for its red elephants and diverse ecosystems. It's a great place for wildlife safaris and birdwatching."
    },
    {
        id: 8, location: "Lamu Island", landmark: "Swahili Culture", timeOfYear: "May 2023",
        notes: "A UNESCO World Heritage Site known for its well-preserved Swahili architecture and rich cultural heritage. It's a great place to relax on the beach and explore the local culture."
    },
    {
        id: 9, location: "Amboseli National Park", landmark: "Mount Kilimanjaro Views", timeOfYear: "June 2023",
        notes: "Famous for its large elephant herds and stunning views of Mount Kilimanjaro. It's a great place for wildlife photography and birdwatching."
    },
    {
        id: 10, location: "Hell's Gate National Park", landmark: "Geothermal Activity", timeOfYear: "July 2023",
        notes: "Known for its geothermal activity, including hot springs and geysers. It's a great place for hiking and rock climbing."
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