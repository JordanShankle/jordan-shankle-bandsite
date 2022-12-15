// Create an Array of Objects with our Shows data.
const showsArray = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" }, // (1)
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" }, // (2)
    { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" }, // (3)
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" }, // (4)
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" }, // (5)
    { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" }, // (6)
];


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
    showsDate.innerText = show.date;
    showsTicket.appendChild(showsDate);
    
    
    
    // Create a p tag for the VENUE heading
    const showsVenueHeading = document.createElement("h6");
    showsVenueHeading.classList.add("shows__ticket__heading");
    showsVenueHeading.innerText = "VENUE";
    showsTicket.appendChild(showsVenueHeading);
    
    // Create a p tag for the venue info
    const showsVenue = document.createElement("p");
    // showsVenue.classList.add("shows__ticket__text");
    showsVenue.innerText = show.venue;
    showsTicket.appendChild(showsVenue);
    
    
    
    // Create a p tag for the LOCATION heading
    const showsLocationHeading = document.createElement("h6");
    showsLocationHeading.classList.add("shows__ticket__heading");
    showsLocationHeading.innerText = "LOCATION";
    showsTicket.appendChild(showsLocationHeading);
    
    // Create a p tag for the location info
    const showsLocation = document.createElement("p");
    // showsLocation.classList.add("shows__ticket__text");
    showsLocation.innerText = show.location;
    showsTicket.appendChild(showsLocation);

    const showsButton = document.createElement("button");
    showsButton.classList.add("shows__ticket__button");
    showsButton.innerText = "BUY TICKETS" 
    showsTicket.appendChild(showsButton);

    
    // Append Shows Ticket to Shows Container
    showsListElement.appendChild(showsTicket);
};



// Loop over the Shows Array
for (let i = 0; i < showsArray.length; i++) {
    displayShows(showsArray[i]);
};



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


















