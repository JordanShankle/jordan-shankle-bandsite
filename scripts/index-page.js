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
    
    // sort comments by newest
    comments.sort((a, b) => {
       return b.timestamp - a.timestamp
    })
            
    // Loop thru our data & add each iteration to our Array –– comments
    for (let i = 0; i < comments.length; i++) {
        displayComments(comments[i]);
        }
    }) // Catch any errors in the request
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



// Call the GET request function
getRequest();


// Grab parent element for Event Listener
const form = document.querySelector(".form");

// Create Event Listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Create a new Object for our Array
    const newComment = {
        name: event.target.name.value,
        date: event.target.timestamp,
        comment: event.target.comment.value
    }
    
    // Reset the values
    form.reset();
    
    
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













