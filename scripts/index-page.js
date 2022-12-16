// Create an Array of Objects with our Shows data.
// const commentsArray = [
//     { name: "Connor Walton", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.", date: "02/17/2021" },
//     { name: "Emilie Beach", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.", date: "01/09/2021"},
//     { name: "Miles Acosta", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.", date: "12/20/2021"}
// ];


// Base URL
const BASE_API_URL = "https://project-1-api.herokuapp.com/";

// API Key
const API_KEY = "42326e44-760b-48b9-8a5f-bdcbd5aa2d84";

// Query
const query = "comments";

// URL
const url = `${BASE_API_URL}${query}?api_key=${API_KEY}`;

console.log(url);


// Create an Array for the Comments
let comments = [];


// Make a GET request function
function getRequest() {
    axios
    // Go to the URL & get the Data
    .get(url)
    
    // Store the data in a our Array –– comments
    .then((result) => {
            
    // Redeclare our comments array to store the data of our API request
    comments = result.data;

    comments.sort((a, b) => {
       return b.timestamp - a.timestamp
    })
            
    console.log(result);
            
    // Loop thru our data & add each iteration to our Array –– comments
    for (let i = 0; i < comments.length; i++) {
        displayComments(comments[i]);
        }
    })
    .catch((error) => {
        console.error(`You have an ${error}`);
    });
}





// Select the parent element (section with shows class)
const commentsListElement = document.querySelector(".comment-section")


const displayComments = (comment) => {

    // This is resetting the comments
    commentsListElement.innerText = "" 

    for (const comment of comments) {

        // Create a article container for the comments
        const commentsContainer = document.createElement("article")
        commentsContainer.classList.add("comment-container");
    
    
    
        // Create a div container for the comments pic and name
        const commentPicContainer = document.createElement("div");
        commentPicContainer.classList.add("comment__card-pic-container");
        commentsContainer.appendChild(commentPicContainer)
    
        // Add the profile pic
        const commentPic = document.createElement("div");
        commentPic.classList.add("comment__card__pic");
        commentPicContainer.appendChild(commentPic);
    
    
    
    
        // Create a div container for the Comment card
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment__card");
        commentsContainer.appendChild(commentCard)
    
    
        // Create a div container for the name and text
        const commentTextContainer = document.createElement("div");
        commentTextContainer.classList.add("comment__text-container");
        commentCard.appendChild(commentTextContainer)
    
    
        // Add the Name
        const commentName = document.createElement("p");
        commentName.classList.add("comment__name");
        commentName.innerText = comment.name;
        commentTextContainer.appendChild(commentName);
    
        // Add the Date
        const commentDate = document.createElement("p");
        commentDate.classList.add("comment__date")
        commentDate.innerText = new Date(comment.timestamp).toLocaleDateString("en-us");
        commentTextContainer.appendChild(commentDate);
    
    
    
        // Create a p tag for the comment text
        const commentText = document.createElement("p");
        commentText.classList.add("comment__text");
        commentText.innerText = comment.comment;
        commentCard.appendChild(commentText);
         
    
        // Append Comment Container to Comment Card
        commentsContainer.appendChild(commentCard);
    
        commentsListElement.appendChild(commentsContainer);
    }
};



// Loop over the Comments Array
// for (let i = 0; i < comments.length; i++) {
//     displayComments(comments[i]);
// };


// Call the GET request function
getRequest();


// Grab parent element for Event Listener
const form = document.querySelector(".form");

// Create Event Listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // let date = new Date().toLocaleDateString("en-US");
    
    // Create a new Object for our Array
    const newComment = {
        name: event.target.name.value,
        date: event.target.timestamp,
        comment: event.target.comment.value
    }
    
    // Reset the values
    form.reset();
    // event.target.name.value = "";
    // event.target.comment.value = "";


    // Add new comment to the top of the Array
    // displayComments(comments);
    // displayComments();
    
    
    axios
    .post(url, newComment)
    .then((result) => {
        console.log(result);

    // Add .GET request to create the new list of comments with our new comment
    getRequest();

    }).catch((error) => {
        console.error(`You have an ${error}`);
    });
});













