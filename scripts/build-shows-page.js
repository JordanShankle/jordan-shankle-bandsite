// Base URL
const BASE_API_URL = "https://project-1-api.herokuapp.com/";

// API Key
const API_KEY = "42326e44-760b-48b9-8a5f-bdcbd5aa2d84";

// Query
const query = "showdates";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(url);

// Create an Array for the Comments
let shows = [];


// Make a GET request function
function getRequest() {
    axios
    // Go to the URL & get the Data
    .get(url)
    
    // Store the data in a our Array –– comments
    .then((result) => {
        
        console.log(result)

    // Redeclare our comments array to store the data of our API request
    shows = result.data;
            
    // Loop thru our data & add each iteration to our Array –– comments
    for (let i = 0; i < shows.length; i++) {
        displayShows(shows[i]);
        }
    }) // Catch any errors in the request
    .catch((error) => {
        console.error(`You have an ${error}`);
    });
}




// Select the parent element (section with shows class)
const showsListElement = document.querySelector(".shows__tickets__wrapper");


const displayShows = (show) => { 
    
    
    // Create a div container for all the info with a class of shows__ticket
    const showsTicket = document.createElement("div");
    showsTicket.classList.add("shows__ticket");
    
    
    // Create a p tag for the DATE heading
    const showsDateHeading = document.createElement("h6");
    showsDateHeading.classList.add("shows__ticket__heading");
    showsDateHeading.innerText = "DATE";
    showsTicket.appendChild(showsDateHeading);
    
    // Create a p tag for the date info
    const showsDate = document.createElement("p");
    showsDate.classList.add("shows__ticket__text");
    showsDate.innerText = new Date(show.date).toDateString("en-us");
    showsTicket.appendChild(showsDate);
    
    
    
    // Create a p tag for the VENUE heading
    const showsVenueHeading = document.createElement("h6");
    showsVenueHeading.classList.add("shows__ticket__heading");
    showsVenueHeading.innerText = "VENUE";
    showsTicket.appendChild(showsVenueHeading);
    
    // Create a p tag for the venue info
    const showsVenue = document.createElement("p");
    showsVenue.innerText = show.place;
    showsTicket.appendChild(showsVenue);
    
    
    
    // Create a p tag for the LOCATION heading
    const showsLocationHeading = document.createElement("h6");
    showsLocationHeading.classList.add("shows__ticket__heading");
    showsLocationHeading.innerText = "LOCATION";
    showsTicket.appendChild(showsLocationHeading);
    
    // Create a p tag for the location info
    const showsLocation = document.createElement("p");
    showsLocation.innerText = show.location;
    showsTicket.appendChild(showsLocation);

    const showsButton = document.createElement("button");
    showsButton.classList.add("shows__ticket__button");
    showsButton.innerText = "BUY TICKETS" 
    showsTicket.appendChild(showsButton);

    
    // Append Shows Ticket to Shows Container
    showsListElement.appendChild(showsTicket);
};


getRequest();
// Loop over the Shows Array
// for (let i = 0; i < shows.length; i++) {
//     displayShows(shows[i]);
// };



// Selected Card 
// const selectedTicket = document.querySelector(".shows__tickets__wrapper")
// console.log(selectedTicket)

// let previouslySelected = undefined;

// const selected = (event) => {
//     if () 
// }




// let activeCard;

// const setActiveCard = (cardToSet) => {
//   if (activeCard) {
//     activeCard.classList.remove("highlighted-card");
//   }
//   cardToSet.classList.add("highlighted-card");
//   activeCard = cardToSet;
// };

// const displayShow = (showObj) => {
//   let showsCard = document.createElement("div");
//   showsCard.classList.add("shows__card");
//   showsContainer.appendChild(showsCard);
// // ...
// // ...
// // ...
//   showsCard.onclick = () => setActiveCard(showsCard);
// };


















