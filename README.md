# Places Visited  

#### A simple web-based application that keeps track of destinations travelled to, April 27, 2025  
#### By **Cynthia Muthoni Mugo**  

## Description  
The Travel Journal is a personal web application designed to help users record and organize the places they have visited. Each destination entry includes details like the location, landmarks, time of year, and personal notes.
Users can add new destinations, view a full list, and click on any place to see more details.
This project was developed as part of a full-stack learning journey, utilizing HTML, CSS, and JavaScript with a focus on object-oriented programming principles and test-driven development.

## Setup/Installation Requirements  
* Clone or download the repository from GitHub  
* Open the `index.html` file in your browser  
* Make sure you have the main html file, styles.css and script.js in your vs code
* No server setup is required  
* No external dependencies needed—just HTML, CSS, and JavaScript  
* Ensure your browser supports modern JavaScript features

## Test-Driven Development (TDD)

1. Test: Create a Destination object with location, landmarks, time of year, and notes.
Expectation: A Destination instance should store all the provided properties correctly.

2. Test: Add a new destination to the DestinationLog.
Expectation: The DestinationLog should include the new destination in its record with a unique ID.

3. Test: Find a destion by its ID.
Expectation: When given a valid ID, the DestinationLog should return the correct Destination object.

4. Test: Try to find a destination with an invalid ID.
Expectation: If the ID does not exist, the method should return false.

5. Test: Delete a destination by its ID.
Expectation: If the ID exists, the destination should be removed from the log and return true.

6. Test: Try to delete a destination with an invalid ID.
Expectation: If the ID doesn't exist, the method should return false.



## Known Bugs  
* The page clears upon refresh. Research on using localstorage to store the destination details  
* If you experience any unexpected behavior, feel free to open an issue or contact the me directly

## Technologies Used  
* HTML  
* CSS  
* JavaScript  

## Support and contact details  
For any questions, suggestions, or bug reports, please contact:  
**Email:** cynthiamugo25@gmail.com  
**LinkedIn:** [Cynthia Muthoni Mugo](https://www.linkedin.com/in/cynthiamuthonimugo)  
You are also welcome to fork the repository and contribute!

### License  
*MIT License*  
Copyright (c) 2025 **Cynthia Muthoni Mugo**
